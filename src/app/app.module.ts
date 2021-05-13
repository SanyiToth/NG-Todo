import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodoModule} from "./todo/todo.module";
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        TodoModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    exports: [
        TodoModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
