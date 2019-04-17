import { Component, EventEmitter, Input, OnChanges, AfterViewInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonFactoryService } from '../serve/common-factory.service';

@Component({
    selector: 'app-button',
    template: `
    <button (click)="handleClick($event)">{{ label }}</button>
  `,
    styles: [],
    encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnChanges, AfterViewInit {

    @Input() label = '';
    @Output() action = new EventEmitter<number>();

    numberOfClicks = 0;
    isCommonFactoryAvailable = false;

    constructor(private _commonFactoryService: CommonFactoryService) { }

    ngAfterViewInit(): void {
      // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      // Add 'implements AfterViewInit' to the class.
      this.isCommonFactoryAvailable = this._commonFactoryService.isCommonFactoryAvailable();
      console.log(`isCommonFactoryAvailable In button component: ${this.isCommonFactoryAvailable}`);
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    handleClick(event) {
        this.numberOfClicks++;
        console.log('Number of clicks: ' + this.numberOfClicks);
        this.action.emit(this.numberOfClicks);
        this._commonFactoryService.updateClickCount(this.numberOfClicks);
    }
}



