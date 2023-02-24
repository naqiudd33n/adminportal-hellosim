import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { PromotionsComponent } from 'app/modules/admin/content-management/promotions/promotions.component';
import { SharedModule } from 'app/shared/shared.module';
import { promotionsRoutes } from './promotions.routing';

@NgModule({
    declarations: [
        PromotionsComponent
    ],
    imports: [
        RouterModule.forChild(promotionsRoutes),
        MatIconModule,
        MatButtonModule,
        NgxGalleryModule,
        SharedModule
    ]
})
export class PromotionsModule {
}
