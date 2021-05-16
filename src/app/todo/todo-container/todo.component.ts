import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Todo} from '../todo.interface';
import {TodoService} from '../todo.service';
import {switchMap} from "rxjs/operators";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


    todoFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
    ]);

    todos: Todo[];
    errorMessage = '';


    constructor(private todoService: TodoService) {
    }


    ngOnInit(): void {
        this.todoService.getTodos().subscribe(todos => {
            console.log("todos", todos)
            this.todos = todos;
        }, errorMsg => {
            this.errorMessage = errorMsg
        })
    };


    addTodo($event): void {
        const todo = {text: this.todoFormControl.value}
        this.todoService.addTodo(todo).subscribe(response => {
            this.todos = [response, ...this.todos]
        })
        $event.currentTarget.reset();
        this.todoFormControl.reset();
    }

    removeTodo(id) {
        this.todoService.deleteTodo(id)
            .pipe(
                switchMap(() => this.todoService.getTodos()))
            .subscribe(todos => {
                    this.todos = todos;
                }, errorMsg => {
                    this.errorMessage = errorMsg;
                }
            )
    }

    clearValue($event: MouseEvent) {
        this.todoFormControl.reset();
        $event.stopPropagation();
    }

}
