import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientInfoComponent } from './components/client-info/client-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientComponent } from './components/client/client.component';
import { RegisterComponent } from './components/register/register.component';
import { AddFoodComponent } from './components/add-food/add-food.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'client', component: ClientComponent },
  { path: 'client/edit/:id', component: EditClientComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'client/:id', component: ClientInfoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'client/add', component: AddFoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
