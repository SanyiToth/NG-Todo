import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {switchMap, tap} from "rxjs/operators";
import {Todo} from "../todo.interface";
import {FormControl, Validators} from "@angular/forms";


@Component({
    selector: 'todo-edit-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
    todoFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
    ]);
    id: number;
    todo: Todo;
    errorMessage;
    successAlert = false;

    constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) {
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
            }, error => {
                this.errorMessage = error;
            });
    }

    saveTodo($event) {
        const todo: Todo = {text: this.todoFormControl.value};
        $event.currentTarget.reset();
        this.todoFormControl.reset();
        this.todoService.updateTodo(this.id, todo).subscribe(() => {
            this.successAlert = true;
            setTimeout(() => {
                this.router.navigate([""])
                    .then(() => {
                    });
            }, 500)
        });
    }


    clearValue($event: MouseEvent) {
        this.todoFormControl.reset();
        $event.stopPropagation();
    }
}
