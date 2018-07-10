import { FieldComponent } from './form/field/field.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutorizationComponent } from './autorization/autorization.component';
import { UsersComponent } from './users/users.component';
import { VerificationComponent } from './verification/verification.component';
import { MainComponent } from './main/main.component';
import { IdentificationComponent } from './identification/identification.component';
import { HistoryVerificationComponent } from './historyVerification/historyVerification.component';
import { HistoryIdentificationComponent } from './historyIdentification/historyIdentification.component';
import { AppRoutingModule } from './app.routing';
import { ToggleComponent } from './form/toggle/toggle.component';
import { PhotoComponent } from './form/photo/photo.component';

@NgModule({
   declarations: [
      AppComponent,
      AutorizationComponent,
      UsersComponent,
      UsersComponent,
      VerificationComponent,
      MainComponent,
      IdentificationComponent,
      HistoryVerificationComponent,
      HistoryIdentificationComponent,
      FieldComponent,
      ToggleComponent,
      PhotoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
