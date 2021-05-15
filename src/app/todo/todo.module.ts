import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {TodoComponent} from "./todo-container/todo.component";
import {EditTodoComponent} from "./edit-todo/edit-todo.component";
import {MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { TodoListComponent } from './todo-list/todo-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        TodoComponent,
        EditTodoComponent,
        TodoListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatListModule,
        MatCardModule,
        HttpClientModule,
        MatIconModule
    ],
    exports: [
        TodoComponent,
        EditTodoComponent
    ]
})
export class TodoModule {
}
