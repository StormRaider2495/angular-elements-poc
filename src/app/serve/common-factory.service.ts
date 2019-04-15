import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonFactoryService {

  constructor() { }

  private clickCountStatus = new BehaviorSubject<number>(0);

  clickCount = this.clickCountStatus.asObservable();

  updateClickCount(status) {
    this.clickCountStatus.next(status);
  }

  isCommonFactoryAvailable(): boolean {
    return true;
  }
}
