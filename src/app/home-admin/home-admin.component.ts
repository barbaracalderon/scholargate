import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class AdminHomeComponent implements OnInit {
  alunosCadastrados: number = 0;
  docentesCadastrados: number = 0;
  turmasCadastradas: number = 0;

  alunos: any[] = []; // Aqui você pode carregar os dados reais dos alunos

  ngOnInit() {
    // Mock data - Em uma aplicação real, você carregaria esses dados de um serviço
    this.alunosCadastrados = 120;
    this.docentesCadastrados = 25;
    this.turmasCadastradas = 8;

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

  verMaisAluno(aluno: any) {
    // Redireciona para a página de cadastro do aluno
    alert(`Redirecionando para a página de cadastro de ${aluno.nome}.`);
  }
}
