import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../todo/todo.service";
import {switchMap, tap} from "rxjs/operators";
import {Todo} from "../todo/todo.interface";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'todo-edit-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
    id: number;
    todo: Todo;
    errorMessage;
    myTodo: FormGroup = new FormGroup({
        changedTodo: new FormControl(null,
            [Validators.required, Validators.minLength(6)])
    });
    response = false;

    constructor(private route: ActivatedRoute, private todoService: TodoService) {
    }

    ngOnInit(): void {
        this.route.params
            .pipe(
                tap(params => {
                        this.id = params.id;
                    }
                ),
                switchMap(() => this.todoService.getTodo(this.id)))
            .subscribe(response => {
                this.todo = response;
                console.log(this.todo)
            }, error => {
                this.errorMessage = error;
            });
    }

    saveTodo() {
        const todo: Todo = {text: this.changedTodo.value}
        this.todoService.updateTodo(this.id, todo).subscribe(response => {
            console.log(response);
            this.response = true;
        })
    }

    get changedTodo(): AbstractControl | null {
        return this.myTodo.get('changedTodo');
    }
}
