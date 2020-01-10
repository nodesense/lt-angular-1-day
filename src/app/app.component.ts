import {Component} from '@angular/core';

@Component({
    // meta data about components
    selector: 'app-root', // <app-root>
    // view
    templateUrl: 'app.component.html',
    // scopped style, specific to only this component
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent {
    // logics here
    // Model
    appTitle: string = 'Product App';
}