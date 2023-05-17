import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ChartModule} from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    HeaderComponent,
    RoutingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    ButtonModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
