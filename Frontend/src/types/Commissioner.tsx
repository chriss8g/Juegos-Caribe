export interface Commissioner
{
    id: number,
    str: string,
    name: string,
    position: string,
    biography: string,
    picture: string
    commissionerCategory: CommissionerCategory
}

export interface PostCommissioner
{
    name: string,
    position: string,
    biography: string,
    picture: File
    commissionerCategory: CommissionerCategory
}