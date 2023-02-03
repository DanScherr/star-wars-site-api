import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { DashboardComponent, DashboardRoutingComponent } from './components';
import { DashboardService } from './service';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
