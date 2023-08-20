import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { DatePipe } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { DataPipe } from './datapipe/data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    HistoryComponent,
    DeleteComponent,
    DataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
