import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import {ensureOriginalSegmentLinks} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/source_file";

@Directive({
    selector: '[StrikeThrough]'
})
export class StrikeThroughDirective {

    StrikeThrough: boolean;

    constructor() {
    }

    @HostBinding('style.textDecoration') textDecoration: string;
    @HostBinding('style.color') color: string;

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
