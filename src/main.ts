import { AppModule } from './app/app.module';
// bootstrap angular app into browser

import {platformBrowserDynamic} 
    from '@angular/platform-browser-dynamic';

console.log('start angular app..');
platformBrowserDynamic()
    .bootstrapModule(AppModule);