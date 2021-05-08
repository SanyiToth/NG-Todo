import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodoModule} from "./todo/todo.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        TodoModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
