import {
    Directive,
    HostBinding,
    HostListener,
    Input, OnInit,

} from '@angular/core';
import {Todo} from './todo.interface';
import {TodoService} from "./todo.service";

@Directive({
    selector: '[StrikeThrough]'
})
export class StrikeThroughDirective implements OnInit {
    @Input() todo: Todo;
    @Input() StrikeThrough: boolean;

    @HostBinding('style.textDecoration') textDecoration;
    @HostBinding('style.color') color;
    @HostBinding('style.cursor') cursor = 'pointer';

    constructor(private todoService: TodoService) {
    }


    @HostListener('dblclick')
    onDblClick(): void {
        this.StrikeThrough = !this.StrikeThrough;
        let newTodo: Todo = {
            text: this.todo.text
        }
        if (this.StrikeThrough) {
            this.textDecoration = 'line-through';
            this.color = 'red';
            newTodo.strikeThrough = true;
        } else {
            this.textDecoration = 'none';
            this.color = 'white';
            newTodo.strikeThrough = false;
        }
        this.todoService.updateTodo(this.todo.id, newTodo).subscribe(res => console.log('res', res))
    }


    ngOnInit(): void {
        if (this.StrikeThrough) {
            this.textDecoration = 'line-through';
            this.color = 'red';
        } else {
            this.textDecoration = 'none';
            this.color = 'white';
        }

    }

}
