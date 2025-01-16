'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { SignUpDefaultValues } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signUpUser } from '@/lib/actions/user.actions';
import { useSearchParams } from 'next/navigation';

const SignUpForm = () => {
    const [data, action] = useActionState(signUpUser, {
        success: false,
        message: '',
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const SignUpButton = () => {
        const { pending } = useFormStatus();

        return (
            <Button disabled={pending} className='w-full' variant='default'>
                { pending ? 'Submitting...' : 'Sign Up' }
            </Button>
        )
    }

    return ( <form action={action}>
        <div className="space-y-6">
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <div>
                <Label htmlFor='name'>Name</Label>
                <Input
                    id='name'
                    name='name'
                    type='text'
                    required
                    autoComplete='name'
                    defaultValue={SignUpDefaultValues.name}
                ></Input>
            </div>
            <div>
                <Label htmlFor='email'>Email</Label>
                <Input
                    id='email'
                    name='email'
                    type='email'
                    required
                    autoComplete='email'
                    defaultValue={SignUpDefaultValues.email}
                ></Input>
            </div>
            <div>
                <Label htmlFor='password'>Password</Label>
                <Input
                    id='password'
                    name='password'
                    type='password'
                    required
                    autoComplete='password'
                    defaultValue={SignUpDefaultValues.password}
                ></Input>
            </div>
            <div>
                <Label htmlFor='password'>Confirm Password</Label>
                <Input
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    required
                    autoComplete='confirmPassword'
                    defaultValue={SignUpDefaultValues.confirmPassword}
                ></Input>
            </div>
            <div>
                <SignUpButton />
            </div>

            {
                data && !data.success && (<div className='text-center text-destructive'>
                    { data.message }
                </div>)
            }

            <div className="text-small text-center text-muted-foreground">
                Already have an account?{' '}
                <Link href='/sign-in' target='_self' className='link'>Sign In</Link>
            </div>
        </div>
    </form> );
}
 
export default SignUpForm;
