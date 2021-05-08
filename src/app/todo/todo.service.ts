import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo.interface";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    static readonly API_URL = `http://localhost:3000/todos`;

    constructor(private http: HttpClient) {
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(TodoService.API_URL);
    }
}
