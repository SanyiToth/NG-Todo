import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {switchMap, tap} from "rxjs/operators";
import {Todo} from "../todo.interface";
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
                console.log(this.todo)
            }, error => {
                this.errorMessage = error;
            });
    }

    saveTodo() {
        const todo: Todo = {text: this.changedTodo.value}
        this.todoService.updateTodo(this.id, todo).subscribe(response1 => {
            this.changedTodo.clearValidators();
            this.changedTodo.reset();
            this.successAlert = true;
            setTimeout(() => {
                this.router.navigate([""])
            }, 1000)
        })
    }

    get changedTodo(): AbstractControl | null {
        return this.myTodo.get('changedTodo');
    }

    clearValue($event: MouseEvent) {
        this.changedTodo.reset();
        $event.stopPropagation();
    }
}
