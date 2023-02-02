import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeRoutingComponent, WelcomeComponent } from './components';

export const WelcomeRouts: Routes = [
    {
        path: 'welcome',
        component: WelcomeRoutingComponent,
        children: [
                    {
                        path: '',
                        component: WelcomeComponent
                    }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(WelcomeRouts)
    ],
    exports: [
        RouterModule
    ]
})

export class WelcomeRoutingModule{

}