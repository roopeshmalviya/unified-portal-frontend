import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { NotifierModule } from 'angular-notifier';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    DashboardModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule,
    RouterModule,
    NgbModule,
  ],
  providers: [
    {
      provide: JwtHelperService,
      useFactory: () => new JwtHelperService()
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
