import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-aluno',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-aluno.component.html',
  styleUrls: ['./home-aluno.component.css']
})
export class AlunoHomeComponent implements OnInit {
  avaliacoes: any[] = []; // Dados das avaliações
  materias: string[] = []; // Matérias inscritas
  cursosExtras: string[] = ['Artesanato', 'Informática', 'Artes Cênicas']; // Cursos extras

  ngOnInit() {
    // Mock data - Em uma aplicação real, você carregaria esses dados de um serviço
    this.avaliacoes = [
      { nome: 'Prova de Matemática', materia: 'Matemática', data: '2024-08-15' },
      { nome: 'Redação', materia: 'Português', data: '2024-08-20' },
      { nome: 'Exame de Física', materia: 'Física', data: '2024-08-25' },
    ];

    this.materias = ['Matemática', 'Português', 'Física'];
  }

  verMaisAvaliacao(avaliacao: any) {
    // Redireciona para a página de notas de aluno
    alert(`Redirecionando para a página de notas de aluno para a avaliação: ${avaliacao.nome}.`);
  }
}
