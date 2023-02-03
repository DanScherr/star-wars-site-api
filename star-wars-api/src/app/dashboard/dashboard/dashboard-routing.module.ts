import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { DashboardRoutingComponent, DashboardComponent } from './components';

export const DashboardRouts: Routes = [
    {
        path: 'dashboard',
        component: DashboardRoutingComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(DashboardRouts)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {
}
