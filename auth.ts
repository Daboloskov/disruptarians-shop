import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/db/prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts-edge';
import type { NextAuthConfig } from 'next-auth';
import type { Session, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session: {
        strategy: 'jwt' as const,
        maxAge: 30 * 24 * 60 *60, // 30 days
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            async authorize(credentials) {
                if(credentials == null) return null;

                // Find user in db
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email as string
                    }
                });

                // Check if user exists ad password matches
                if(user && user.password) {
                    const isMatch = compareSync(credentials.password as string, user.password);
                    
                    // If password is correct, return user
                    if(isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role
                        };
                    }
                }
                // If user doesn't exist or password doesn't match
                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, user, trigger, token }: {
            session: Session;
            user: User;
            trigger?: string;
            token: JWT;
        }) {
            if (session.user) {
                // Set the user ID from the token
                session.user.id = token.sub;
                session.user.role = token.role;
                session.user.name = token.name;

                console.log(token);
            }

            // If there is an update, set the user name
            if (session.user) {
                if (trigger === 'update' && typeof user.name === 'string') {
                    session.user.id = user.name;
                }
            }

            return session;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async jwt({ token, user }: any) {
            // Assign user field to the token
            if (user) {
                token.role = user.role;

                // If the user has no name, then use the email
                if (user.name === 'NO_NAME') {
                    token.name = user.email!.split('@')[0];

                    // Update the db
                    await prisma.user.update({
                        where: { id: user.id },
                        data: {name: token.id},
                    })
                }
            }
            return token;
        }
    },
} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut } = NextAuth(config);
