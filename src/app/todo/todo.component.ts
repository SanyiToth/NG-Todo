import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from './todo.interface';
import {TodoService} from './todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    myTodo: FormGroup;
    todos: Todo[];
    errorMessage = '';

    constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
        this.myTodo = this.createMyForm();
    }

    ngOnInit(): void {
        this.todoService.getTodos().subscribe(todos => {
            console.log("todos", todos)
            this.todos = todos;
        }, errorMsg => {
            this.errorMessage = errorMsg
        })
    };


    createMyForm(): FormGroup {
        return this.formBuilder.group({
            newTodo: [null, [Validators.required, Validators.minLength(6)]]
        });
    }

    addTodo(): void {
        console.log(this.newTodo.value)
        this.todos.push(this.newTodo.value)
        this.myTodo.reset();
    }

    removeTodo(i) {
        if (i > -1) {
            this.todos.splice(i, 1);
        }
        console.log(this.todos);
    }

    get newTodo(): AbstractControl | null {
        return this.myTodo.get('newTodo');
    }


}
