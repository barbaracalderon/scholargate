import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroDocenteComponent } from './cadastro-docente/cadastro-docente.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-docente', component: CadastroDocenteComponent}
  
];
