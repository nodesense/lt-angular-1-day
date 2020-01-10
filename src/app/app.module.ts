import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {RouterModule, Route} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {HttpClientModule} from '@angular/common/http';

const config: Route[] = [
    {
        path: '', // localhost:4200
        component: HomeComponent
    },
    {
        path: 'about', // localhost:4200/about
        component: AboutComponent
    },
    {
        path: 'contact', // localhost:4200/about
        component: ContactComponent
    },
    {
        path: 'cart',
        // filePath#ModuleClassName
        loadChildren: './cart/cart.module#CartModule'
    },
    {
        path: 'products',
        // filePath#ModuleClassName
        loadChildren: './product/product.module#ProductModule'
    },
    {
        path: '**', // localhost:4200/something-not-there
        component: NotFoundComponent
    },
    
]

@NgModule({
    imports: [
        // dependencies to other modules
        BrowserModule,
        SharedModule,
        // apply routes to angular
        RouterModule.forRoot(config),
        HttpClientModule
        // InventoryModule
    ],
    declarations: [
        // components, pipe, directives
        AppComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent,
        //HomeComponent,
        
        //....
    ],

    bootstrap: [
        // angular starts with app component
        AppComponent
    ]
})
export class AppModule {

}