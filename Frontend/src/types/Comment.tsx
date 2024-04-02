import { News } from "./New"
import { UserInfo } from "./User"

export interface Comments
{
    id: number,
    str: string,
    body: string,
    date: string,
    news: News,
    users: UserInfo
}

export interface PostComment
{
    body: string,
    news: News,
    user: UserInfo
}