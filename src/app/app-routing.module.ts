import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { ClientsComponent } from './clients/clients.component';


const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'requests',component: RequestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
