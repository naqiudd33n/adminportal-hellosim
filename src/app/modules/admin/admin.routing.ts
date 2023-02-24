import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';

export const adminRoutes: Route[] = [

    // Admin routes
    {
        path: '',
        children: [
            { path: 'home', loadChildren: () => import('app/modules/admin/home/home.module').then(m => m.HomeModule) },
            { path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule) },

            // Content Management
            { path: 'promotions', loadChildren: () => import('app/modules/admin/content-management/promotions/promotions.module').then(m => m.PromotionsModule) },
        ]
    },

];
