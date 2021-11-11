import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth_gaurd/auth.guard';
import { DashboardContentsComponent } from './dashboard/dashboard-contents/dashboard-contents.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes =[
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: SignupComponent 
  },
  {
    path: "dashboard",
    component: DashboardContentsComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
