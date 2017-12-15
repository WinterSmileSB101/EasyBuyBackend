import { Component, OnDestroy, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { AfterViewInit } from '../../../../node_modules/_@angular_core@5.1.1@@angular/core/src/metadata/lifecycle_hooks';
import { MainDirective } from '../../directive/maincompage/main.directive';
@Component({
    selector: 'app-pagecontainer',
    templateUrl: './pagecontainer.component.html',
    styleUrls: ['./pagecontainer.component.css']
})

export class PageContainerComponent implements AfterViewInit, OnDestroy {

    @ViewChild(MainDirective) mainHost: MainDirective;
    private currentComponent: ComponentRef<any>;

    components = [[]];
    interval: any;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnDestroy(): void {
        clearInterval(this.interval);
        }
    ngAfterViewInit(): void {
        this.loadComponent();
    }

    loadComponent(key: string) {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAddIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.mainHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.currentComponent = adItem.data;
    }
}