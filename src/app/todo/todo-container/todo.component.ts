import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Todo} from '../todo.interface';
import {TodoService} from '../todo.service';
import {switchMap} from "rxjs/operators";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    myTodo: FormGroup = new FormGroup({
            newTodo: new FormControl(null,
                [Validators.required, Validators.minLength(6)])
        }, Validators.required
    );
    todos: Todo[];
    errorMessage = '';

    constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
        /*  this.myTodo = this.createMyForm();*/
    }


    ngOnInit(): void {
        this.todoService.getTodos().subscribe(todos => {
            console.log("todos", todos)
            this.todos = todos;
        }, errorMsg => {
            this.errorMessage = errorMsg
        })
    };

    /*    createMyForm(): FormGroup {
            return this.formBuilder.group({
                newTodo: [null, [Validators.required, Validators.minLength(6)]]
            });
        }*/

    addTodo(): void {
        const todo = {text: this.newTodo.value}
        this.todoService.addTodo(todo).subscribe(response => {
            console.log('addTodo', response)
            this.todos = [response, ...this.todos]
        })
        console.log('myTodo', this.myTodo);

        this.newTodo.reset();
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

    get newTodo(): AbstractControl | null {
        return this.myTodo.get('newTodo');
    }


    clearValue($event: MouseEvent) {
        this.newTodo.reset();
        $event.stopPropagation();
    }
}
