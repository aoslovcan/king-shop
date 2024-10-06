export type User = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: 'male' | 'female';
    image: string;
}
export type LoginResponse = {

    accessToken: string;
    refreshToken: string;
} | User

export type RequestLoginBody = {
    username: string
    password: string
    expiresInMins: number
}

export type Tokens = {
    accessToken: string
    refreshToken: string
}