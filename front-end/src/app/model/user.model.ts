export interface User{
    id: number,
    name: string,
    ranks: number,
    totalGames: number,
    followers: number,
}

export interface NewUser{
    name: string,
    ranks: number,
    totalGames: number,
    followers: number,
}