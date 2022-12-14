import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';
import { ListaMatriculaComponent } from './pages/lista-matricula/lista-matricula.component';
import { ListaClaseComponent } from './pages/lista-clase/lista-clase.component';
import { FormEstudianteComponent } from './pages/lista-estudiante/form-estudiante.component';
import { FormClaseComponent } from './pages/lista-clase/form-clase.component';
import { FormMatriculaComponent } from './pages/lista-matricula/form-matricula.component';


const routes: Routes = [
  {
    path:'',component: HomeComponent, pathMatch:'full'
  },
  {
    path:'login',component: LoginComponent, pathMatch:'full'
  },
  {
    path:'signup',component: SignupComponent, pathMatch:'full'
  },
  {
    path:'listaestudiante',component: ListaEstudianteComponent, pathMatch:'full'
  },
  {
    path:'listamatricula',component: ListaMatriculaComponent, pathMatch:'full'
  },
  {
    path:'listaclase',component: ListaClaseComponent, pathMatch:'full'
  },

  {
    path:'formestudiante',component: FormEstudianteComponent, pathMatch:'full'
  },
  {
    path:'formclase',component: FormClaseComponent, pathMatch:'full'
  },
  {
    path:'formmatricula',component: FormMatriculaComponent, pathMatch:'full'
  },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }