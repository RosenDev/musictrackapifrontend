export interface ApiResponse<T>{
    status: number;
    result: T;
    error: string;
}