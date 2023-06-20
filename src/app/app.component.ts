import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent 
    implements OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

    musicalInstruments!: { instrument: string }[];
    inputBoundStringValue: string = 'Input Data';
    show: boolean = true;

    constructor() {}

    ngOnChanges() {
        console.log('from parent OnChanges');
    }

    ngDoCheck(): void {
        console.log('from parent DoCheck');
    }    

    ngOnInit(): void {
        console.log('from parent OnInit');
        this.musicalInstruments = [{ instrument: 'trumpet' }];
        this.musicalInstruments.push({ instrument: 'piano' });
        this.musicalInstruments.push({ instrument: 'drums' });        
    }

    ngAfterContentInit(): void {
        console.log('from parent AfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('from parent AfterContentChecked');   
    }    

    ngAfterViewInit(): void {
        console.log('from parent AfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('from parent AfterViewChecked');
    }

    changeToInstruments() {
        this.musicalInstruments.push({ instrument: 'flute' });
        this.musicalInstruments = JSON.parse(JSON.stringify(this.musicalInstruments));
        this.inputBoundStringValue = 'new value';
    }

    destroyComponent() {
        this.show = !this.show;
    }
}
