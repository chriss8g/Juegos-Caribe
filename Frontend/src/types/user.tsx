export interface User{
    email: string,
    name: string,
    lastname: string,
    faculty: string,
    password: string,
    isLoggedIn: boolean
}
export interface LogInCredentials{
    email: string,
    password: string
}