import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {TodoComponent} from "./todo.component";
import {EditTodoComponent} from "../edit-todo/edit-todo.component";



@NgModule({
    declarations: [
        TodoComponent,
        EditTodoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        TodoComponent,
        EditTodoComponent
    ]
})
export class TodoModule {
}
