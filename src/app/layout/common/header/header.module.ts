import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'app/shared/shared.module';
import { UserModule } from '../user/user.module';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        UserModule,
        SharedModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
}
