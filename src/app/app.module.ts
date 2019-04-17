import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DisplayComponentComponent } from './display-component/display-component.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        DisplayComponentComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        ButtonComponent,
        DisplayComponentComponent
    ],
    entryComponents: [
        // ButtonComponent
        DisplayComponentComponent
    ],
    providers: []
})
export class AppModule {
    constructor(private injector: Injector) { }

    ngDoBootstrap() {
      const elementName = 'app-display-component';
      if (!customElements.get(elementName)) {
        console.log('bootstraping display');
        // const customButtonElement = createCustomElement(ButtonComponent, {injector: this.injector});
        // customElements.define('app-button', customButtonElement);
        const customDisplayElement = createCustomElement(DisplayComponentComponent, { injector: this.injector });
        customElements.define('app-display-component', customDisplayElement);
      }
    }
}




