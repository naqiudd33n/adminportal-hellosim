import { Route } from "@angular/router";
import { AnalyticsResolver } from "./analytics.resolvers";
import { HomeComponent } from "./home.component";

export const homeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            data: AnalyticsResolver
        }
    }
];
