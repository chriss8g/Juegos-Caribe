interface User
{
    id: number
    str: string,
    password: string,
    last_login: string, 
    is_superuser: boolean,
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
interface PostUser
{
    password: string,
    last_login: string, 
    is_superuser: boolean,
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

