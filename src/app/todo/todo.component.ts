import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    myTodo: FormGroup
    todos = [];

    constructor(private formBuilder: FormBuilder) {
        this.myTodo = this.createMyForm();
    }

    ngOnInit(): void {
    }


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

    get newTodo(): AbstractControl | null {
        return this.myTodo.get('newTodo');
    }

    removeTodo(i) {
        if (i > -1) {
            this.todos.splice(i, 1);
        }
        console.log(this.todos);
    }
}
