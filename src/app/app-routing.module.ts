import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/component/login.component';
import { ObjectsComponent } from './objects/component/objects.component';

const routes: Routes = [
  { path: '', redirectTo: 'objects', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'objects', component: ObjectsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
