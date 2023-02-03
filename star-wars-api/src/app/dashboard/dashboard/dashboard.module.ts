import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';


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
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
