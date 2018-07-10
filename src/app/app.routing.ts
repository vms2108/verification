import { HistoryIdentificationComponent } from './historyIdentification/historyIdentification.component';
import { HistoryVerificationComponent } from './historyVerification/historyVerification.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificationComponent } from './verification/verification.component';
import { IdentificationComponent } from './identification/identification.component';
import { AutorizationComponent } from './autorization/autorization.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'users', component: UsersComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'identification', component: IdentificationComponent},
  { path: 'login', component: AutorizationComponent },
  { path: 'history/verification', component: HistoryVerificationComponent },
  { path: 'history/identification', component: HistoryIdentificationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
