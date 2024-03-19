export interface Comments
{
    id: number,
    str: string,
    body: string,
    date: string,
    news: New,
    users: User
}

export interface PostComment
{
    body: string,
    news: New,
    user: User
}