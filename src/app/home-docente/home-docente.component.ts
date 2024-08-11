import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-docente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-docente.component.html',
  styleUrls: ['./home-docente.component.css']
})
export class DocenteHomeComponent implements OnInit {
  alunos: any[] = []; // Dados dos alunos

  ngOnInit() {
    // Mock data - Em uma aplicação real, você carregaria esses dados de um serviço
    this.alunos = [
      { nome: 'João Silva', idade: 20, email: 'joao@example.com' },
      { nome: 'Maria Oliveira', idade: 22, email: 'maria@example.com' },
      { nome: 'Carlos Santos', idade: 19, email: 'carlos@example.com' },
    ];
  }

  pesquisarAluno(query: string) {
    // Função de pesquisa - aqui você pode implementar a lógica para buscar alunos
    alert('Função de pesquisa ainda não implementada.');
  }

  lancarNota(aluno: any) {
    // Redireciona para a página de cadastro de avaliação
    alert(`Redirecionando para a página de lançamento de nota para ${aluno.nome}.`);
  }
}
