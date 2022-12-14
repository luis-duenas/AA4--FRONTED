import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';
import { ListaMatriculaComponent } from './pages/lista-matricula/lista-matricula.component';
import { ListaClaseComponent } from './pages/lista-clase/lista-clase.component';
import { HomeComponent } from './pages/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { FormEstudianteComponent } from './pages/lista-estudiante/form-estudiante.component';
import { FormClaseComponent } from './pages/lista-clase/form-clase.component';
import { FormMatriculaComponent } from './pages/lista-matricula/form-matricula.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ListaEstudianteComponent,
    ListaMatriculaComponent,
    ListaClaseComponent,
    HomeComponent,
    FormEstudianteComponent,
    FormMatriculaComponent,
    FormClaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
