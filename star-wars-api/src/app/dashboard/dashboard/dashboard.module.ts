import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent, DashboardRoutingComponent } from './components';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
