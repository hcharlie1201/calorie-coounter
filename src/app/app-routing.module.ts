import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientComponent } from './components/client/client.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'client/add/', component: AddClientComponent },
  { path: '', component: DashboardComponent },
  { path: 'client', component: ClientComponent },
  { path: 'client/edit/:id', component: EditClientComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'client/info/', component: ClientInfoComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
