import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodoModule} from "./todo/todo.module";
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        TodoModule,
        HttpClientModule,
        AppRoutingModule
    ],
    exports: [
        TodoModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
