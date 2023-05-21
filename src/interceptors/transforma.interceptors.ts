import { CallHandler, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs";

export interface Response<T> {
    data: T
}

@Injectable()
export class TransformaInterceptor<T>
  implements NestInterceptor<T, Response<T>>
  {
    intercept(_, next: CallHandler): Observable<Response<T>> {
        return next.handle().pipe(map((data) => ({ data })))
    }
  }