export interface APiResulstModel<T> {
    isSuccess: boolean;
    message: string;
    resultData: T;
}