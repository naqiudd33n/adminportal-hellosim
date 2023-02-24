import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routing';

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
    ],
    bootstrap: [
    ]
})
export class AdminModule {
}