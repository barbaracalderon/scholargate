import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  private readonly STORAGE_KEY = 'turmas';

  constructor() { }

  saveAluno(aluno: any): void {
    const turmas = this.getTurmas();
    turmas.push(aluno);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(turmas));
  }

  getTurmas(): any[] {
    const turmas = localStorage.getItem(this.STORAGE_KEY);
    return turmas ? JSON.parse(turmas) : [];
  }
}
