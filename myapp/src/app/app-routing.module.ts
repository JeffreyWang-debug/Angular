import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './admin/user/user.component';
import { EmailComponent } from './admin/email/email.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'order', component: OrderComponent},
  { path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'user', component: UserComponent},
      { path: 'email', component: EmailComponent}
    ]
},
{ path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
