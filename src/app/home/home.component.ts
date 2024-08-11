import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
