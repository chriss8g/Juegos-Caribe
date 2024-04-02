export interface User{
    email: string,
    name: string,
    lastname: string,
    faculty: string,
}

export interface RegisterUserInfo
{
    username: string,
    email: string,
    password1: string,
    password2: string
}

export interface LoginInfo
{
    username: string,
    email: string,
    password: string,
}

export interface UserInfo
{
    id: number
    str: string,
    password: string,
    last_login: string, 
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    is_staff: boolean,
    is_active: boolean,
    date_joined: string,
    groups: string,
    user_permissions: string
}

export interface PostUserInfo
{
    password: string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    is_staff: boolean,
    is_active: boolean,
}