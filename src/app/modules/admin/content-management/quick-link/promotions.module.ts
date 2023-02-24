import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PromotionsComponent } from 'app/modules/admin/content-management/promotions/promotions.component';
import { SharedModule } from 'app/shared/shared.module';
import { promotionsRoutes } from './promotions.routing';

@NgModule({
    declarations: [
        PromotionsComponent
    ],
    imports: [
        RouterModule.forChild(promotionsRoutes),
        SharedModule
    ]
})
export class PromotionsModule {
}
