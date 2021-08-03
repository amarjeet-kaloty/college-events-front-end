import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PersonnelManagementComponent } from './modules/personnel-management/personnel-management.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ForgetPasswordComponent } from './user_management/forget-password/forget-password.component';
import { LoginComponent } from './user_management/login/login.component';
import { RegistrationComponent } from './user_management/registration/registration.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'dashboard', component: DefaultComponent, 
    children: [
      { path: '', component: DashboardComponent},
      { path: 'posts', component: PostsComponent},
      { path: 'personnel-management', component: PersonnelManagementComponent}
    ]
  },
  {path:'register', component: RegistrationComponent},
  {path:'forget-password', component: ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
