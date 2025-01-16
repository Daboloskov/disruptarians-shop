export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "The Disruptarians"
export const APP_DESC = process.env.NEXT_PUBLIC_APP_DESC || "Buy Bitcoin merch such as t-shirts, mugs, hardware wallets and become a real Bitcoin Maximalist."
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000/'
export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 4

export const SignInDefaultValues = {
    email: '',
    password: '',
}
export const SignUpDefaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}
