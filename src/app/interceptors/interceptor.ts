import { HttpRequest, HttpHandlerFn, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

export function Interceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const commonUrl: string = environment.apiUrl;
    const newReq = req.clone({ url: commonUrl });
    return next(newReq);
}