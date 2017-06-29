import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { DevExtremeModule } from "devextreme-angular";


import { AppComponent }  from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import { ProductModule } from "./products/product.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component :  WelcomeComponent},
      { path : '', redirectTo : 'welcome', pathMatch : 'full'},
      { path : '**', component : WelcomeComponent}
    ]),
    ProductModule,
    DevExtremeModule,
    SharedModule
    ],
  declarations: [ 
    AppComponent, 
    WelcomeComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
