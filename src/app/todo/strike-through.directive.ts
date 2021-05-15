import {AfterViewInit, Directive, HostBinding, HostListener} from '@angular/core';


@Directive({
    selector: '[StrikeThrough]'
})
export class StrikeThroughDirective  {

    StrikeThrough: boolean;

    constructor() {
    }

    @HostBinding('style.textDecoration') textDecoration = 'none';
    @HostBinding('style.color') color = 'white';
    @HostBinding('style.cursor') cursor = 'pointer';


    @HostListener('dblclick')
    onClick(): void {
        this.StrikeThrough = !this.StrikeThrough;
        if (this.StrikeThrough) {
            this.textDecoration = 'line-through';
            this.color = 'red';
        } else {
            this.textDecoration = 'none';
            this.color = 'white';
        }
    }

}
