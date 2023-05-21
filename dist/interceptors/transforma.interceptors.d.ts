import { CallHandler, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
export interface Response<T> {
    data: T;
}
export declare class TransformaInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(_: any, next: CallHandler): Observable<Response<T>>;
}
