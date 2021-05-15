import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo.interface';
import {Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'todo-list',
    template: `
        <div *ngIf="todos" class="todo-list">
            <mat-card *ngFor="let todo of todos;let i=index">
                <mat-card-title>{{todo.text}}</mat-card-title>
                <div class="todo-item-buttons">
                    <mat-icon (click)="removeTodoItem(todo.id)" aria-hidden="false" aria-label="Delete icon"
                              style="cursor: pointer">delete
                    </mat-icon>
                    <mat-icon routerLink="/edit/{{todo.id}}" aria-hidden="false" aria-label="Delete icon"
                              style="cursor: pointer">edit
                    </mat-icon>
                </div>
            </mat-card>
        </div>

        <mat-card *ngIf="todos?.length===0">
            <h2>No todos yet</h2>
        </mat-card>
    `,
    styleUrls: ["todo-list.component.css"]
})
export class TodoListComponent implements OnInit {

    @Input() todos: Todo[];
    @Output() newDeleteEvent = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit(): void {
    }

    removeTodoItem(value: number) {
        this.newDeleteEvent.emit(value);
    }


}
