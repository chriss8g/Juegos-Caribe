interface New
{
    id: number,
    str: string,
    title: string,
    body: string,
    date: string
    picture: string,
    user: User
}

interface PostNew
{
    title: string,
    body: string,
    picture: File,
    user: User
}