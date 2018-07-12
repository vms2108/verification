import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService } from './services';
import { JwtInterceptor, fakeBackendProvider } from './helpers';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { AlertComponent } from './directives';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
       AlertComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [
        AuthGuard,
        AlertService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        fakeBackendProvider
    ],
    bootstrap: [
    ],
    exports: [
        AlertComponent
    ]
 })
 export class CoreModule { }
