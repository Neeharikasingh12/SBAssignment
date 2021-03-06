import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { LoginComponent } from 'src/components/login/login.component';
import { LogoutComponent } from 'src/components/logout/logout.component';


const routes: Routes = [
  {path : "" , component: LoginComponent},
  {path : "home", component : HomeComponent},
  {path : "logout",component : LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
