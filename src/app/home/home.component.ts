import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from "../home-admin/home-admin.component";
import { DocenteHomeComponent } from "../home-docente/home-docente.component";
import { AlunoHomeComponent } from '../home-aluno/home-aluno.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AdminHomeComponent, DocenteHomeComponent, AlunoHomeComponent, ToolbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userRole: string = '';

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.userRole = currentUser.role || '';

    if (this.userRole === 'ADMINISTRADOR') {
      // Conteúdo específico para administrador
    } else if (this.userRole === 'DOCENTE') {
      // Conteúdo específico para docente
    } else if (this.userRole === 'ALUNO') {
      // Conteúdo específico para aluno
    }
  }
}
