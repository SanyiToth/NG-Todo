import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo.interface';
import {Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: "todo-list.component.html",
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
