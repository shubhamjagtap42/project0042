import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'chart',component:ChartComponent
  },
  {
    path:'', pathMatch:'full', component:HeaderComponent
  },
  {
    path:'home',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  ChartComponent,
  HeaderComponent,
  HomeComponent,
]
