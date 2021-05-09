import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo.interface';
import {TodoService} from "../todo.service";

@Component({
    selector: 'todo-list',
    template: `
        <mat-card>
            <div *ngIf="todos">
                <mat-list *ngFor="let todo of todos;let i=index">
                    <mat-list-item>
                        <p>{{todo.text}}</p>
                        <div class="mat-list-item--buttons">
                            <button (click)="removeTodo(todo.id)">Delete</button>
                            <button routerLink="/edit/{{todo.id}}">Edit</button>
                        </div>
                    </mat-list-item>
                </mat-list>
            </div>

            <div *ngIf="todos.length===0">
                <h2>No todos yet</h2>
            </div>

        </mat-card>
    `,
    styleUrls: ["todo-list.component.css"]
})
export class TodoListComponent implements OnInit {

    @Input() todos: Todo[];
    errorMessage = '';

    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {
    }


    removeTodo(id) {
        this.todoService.deleteTodo(id).subscribe(todo => {
            this.todoService.getTodos().subscribe(todos => {
                console.log("todos", todos);
                this.todos = todos;
            }, errorMsg => {
                this.errorMessage = errorMsg
            })
        })
    }

}
