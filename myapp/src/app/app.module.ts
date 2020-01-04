import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './admin/user/user.component';
import { EmailComponent } from './admin/email/email.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms'
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

// 引入并配置service
import { StorageService} from './services/storage.service'
import { from } from 'rxjs';
import { DomhomeComponent } from './components/domhome/domhome.component';
import { ViewchilddomComponent } from './components/viewchilddom/viewchilddom.component';
import { TransitionComponent } from './components/transition/transition.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderComponent,
    AdminComponent,
    NotFoundComponent,
    UserComponent,
    EmailComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    DomhomeComponent,
    ViewchilddomComponent,
    TransitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
