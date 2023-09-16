//quando queremos reaproveitar um tipo
//cria uma pasta chamada type, cria o arquivo e exporta esse arquivo
export type UserProps = {
    avatar_url: string,
    login: string,
    location: string,
    followers: number,
    following: number
}
//iremos importar isso na home