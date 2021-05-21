import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {TodoComponent} from "./todo-container/todo.component";
import {EditTodoComponent} from "./edit-todo/edit-todo.component";
import {MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { TodoListComponent } from './todo-list/todo-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button'
import { MatInputModule} from "@angular/material/input";
import { StrikeThroughDirective } from './strike-through.directive';

@NgModule({
    declarations: [
        TodoComponent,
        EditTodoComponent,
        TodoListComponent,
        StrikeThroughDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatListModule,
        MatCardModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
    ],
    exports: [
        TodoComponent,
        EditTodoComponent
    ]
})
export class TodoModule {
}
