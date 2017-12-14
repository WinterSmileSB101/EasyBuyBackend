import { Directive, ViewContainerRef,Component } from '@angular/core';

@Directive({
    selector: '[main-host]',
})

export class MainDirective{
    constructor(public viewContainerRef: ViewContainerRef) { }
}