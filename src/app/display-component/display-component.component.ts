import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { CommonFactoryService } from '../serve/common-factory.service';

@Component({
  selector: 'app-display-component',
  template: `
    <p>
      display-component works!
    </p>
    <p> Click count: {{countNumber}} </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class DisplayComponentComponent implements OnInit, AfterViewInit {
  @Input() countNumber = 0;
  isCommonFactoryAvailable = false;

  constructor(private _commonFactoryService: CommonFactoryService) {
    this._commonFactoryService.clickCount.subscribe(data => this.updatecountNumber(data));
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.isCommonFactoryAvailable = this._commonFactoryService.isCommonFactoryAvailable();
    console.log(`isCommonFactoryAvailable In display component: ${this.isCommonFactoryAvailable}`);
  }

  updatecountNumber(data: number): void {
    if (data) {
      this.countNumber = data;
    }
  }

}
