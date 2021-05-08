import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TodoComponent} from "./todo/todo.component";
import {EditTodoComponent} from "./edit-todo/edit-todo.component";

const routes: Routes = [
    {path: '', component: TodoComponent},
    {path: 'edit/:id', component: EditTodoComponent}
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
