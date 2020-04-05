import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { LoginComponent } from './components/login/login.component';
import { FormsComponent } from './components/forms/forms.component';
import { TickpageComponent } from './components/tickpage/tickpage.component';
import { UserGuard } from './service/userguard.guard';


const routes: Routes = [
  {
    path: 'create', component: CreateaccountComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forms', component: FormsComponent, canActivate: [UserGuard]
  },
  {
    path: 'tickpage', component: TickpageComponent, canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
