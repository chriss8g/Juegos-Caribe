import { UserInfo } from "./User"

export interface News
{
    id: number,
    str: string,
    title: string,
    body: string,
    date: string
    picture: string,
    user: UserInfo
}

export interface PostNews
{
    title: string,
    body: string,
    picture: File,
    user: UserInfo
}