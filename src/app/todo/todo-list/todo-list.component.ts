import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo.interface';
import {Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'todo-list',
    template: `
        <mat-card>
            <div *ngIf="todos">
                <mat-list *ngFor="let todo of todos;let i=index">
                    <mat-list-item>
                        <p>{{todo.text}}</p>
                        <div class="mat-list-item--buttons">
                            <mat-icon (click)="removeTodoItem(todo.id)" aria-hidden="false" aria-label="Delete icon"
                                      style="cursor: pointer">delete
                            </mat-icon>
                            <mat-icon routerLink="/edit/{{todo.id}}" aria-hidden="false" aria-label="Delete icon"
                                      style="cursor: pointer">edit
                            </mat-icon>
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
    @Output() newDeleteEvent = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit(): void {
    }

    removeTodoItem(value: number) {
        this.newDeleteEvent.emit(value);
    }


}
