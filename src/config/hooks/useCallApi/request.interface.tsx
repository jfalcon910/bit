export interface ApiRequest{
    method: string,
    path: string,
    token?: string,
    data?: any,
}