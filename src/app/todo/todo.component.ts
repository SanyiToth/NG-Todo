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
            newTodo: [null, Validators.required]
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

}
