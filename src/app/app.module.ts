import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodoModule} from "./todo/todo.module";
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        TodoModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule
    ],
    exports: [
        TodoModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
