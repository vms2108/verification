import { UserService } from './_services/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { ButtonComponent } from './form/button/button.component';
import { FieldComponent } from './form/field/field.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerificationComponent } from './verification/verification.component';
import { MainComponent } from './main/main.component';
import { IdentificationComponent } from './identification/identification.component';
import { HistoryVerificationComponent } from './historyVerification/historyVerification.component';
import { HistoryIdentificationComponent } from './historyIdentification/historyIdentification.component';
import { AppRoutingModule } from './app.routing';
import { ToggleComponent } from './form/toggle/toggle.component';
import { PhotoComponent } from './form/photo/photo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './_directives';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertService } from './_services';
import { JwtInterceptor, fakeBackendProvider } from './_helpers';

@NgModule({
   declarations: [
      AppComponent,
      VerificationComponent,
      MainComponent,
      IdentificationComponent,
      HistoryVerificationComponent,
      HistoryIdentificationComponent,
      FieldComponent,
      ToggleComponent,
      PhotoComponent,
      ButtonComponent,
      AlertComponent,
      LoginComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
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
      AppComponent
   ]
})
export class AppModule { }
