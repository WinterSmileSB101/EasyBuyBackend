import { Component, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AfterViewInit } from '../../../../node_modules/_@angular_core@5.1.1@@angular/core/src/metadata/lifecycle_hooks';
import { MainDirective } from '../../directive/maincompage/main.directive';
@Component({
    selector: 'app-pagecontainer',
    templateUrl: './pagecontainer.component.html',
    styleUrls: ['./pagecontainer.component.css']
})

export class PageContainerComponent implements AfterViewInit, OnDestroy {

    @ViewChild(MainDirective) mainHost: MainDirective;

    interval: any;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnDestroy(): void {
        clearInterval(this.interval);
        }
    ngAfterViewInit(): void {
        throw new Error("Method not implemented.");
    }
}