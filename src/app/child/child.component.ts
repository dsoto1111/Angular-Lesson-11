import { OnDestroy, 
    AfterContentChecked, 
    AfterContentInit, 
    AfterViewChecked, 
    AfterViewInit, 
    Component, 
    DoCheck, 
    OnChanges, 
    OnInit, 
    Input,
    SimpleChanges } from '@angular/core';

@Component({
selector: 'app-child',
templateUrl: './child.component.html',
styleUrls: ['./child.component.css']
})
export class ChildComponent
implements OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

labelValue: string = 'Original Value';

@Input() instruments!: { instrument: string }[];
@Input() inputBoundString: string = '';

constructor() { console.log('contructor'); }

ngOnChanges(changes: SimpleChanges) {
   console.log('from child OnChanges');  
   console.log(this.instruments);   
   for(const propName in changes) {
       const to = JSON.stringify(changes[propName].currentValue);
       console.log(to);
       if (changes[propName].isFirstChange()) {
           console.log(`The starting value for ${propName} is ${to}`);
       } else {
           const from = JSON.stringify(changes[propName].previousValue);
           console.log(`The previous value for ${propName} was ${from} and is now ${to}`);
       }            
   }
   console.log(JSON.stringify(changes['inputBoundString'].currentValue));
}

ngDoCheck() {
   console.log('from child DoCheck');   
   //console.log(this.instruments);     
}

ngOnInit(): void {
   console.log('from child OnInit');                         
}

ngAfterContentInit(): void {
   console.log('from child AfterContentInit');                                     
}

ngAfterContentChecked(): void {
   console.log('from child AfterContentChecked');                              
}

ngAfterViewInit(): void {
   console.log('from child AfterViewInit');   
   setTimeout(() => {   
       this.labelValue = 'here';  
    }, 0);                    
}

ngAfterViewChecked(): void {
   console.log('from child AfterViewChecked');             
}

ngOnDestroy(): void {
   console.log('from child OnDestroy');
}
}
