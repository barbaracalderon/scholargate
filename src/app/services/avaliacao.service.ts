import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  private readonly STORAGE_KEY = 'avaliacoes';

  constructor() { }

  saveavaliacao(avaliacao: any): void {
    const avaliacoes = this.getavaliacoes();
    avaliacoes.push(avaliacao);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(avaliacoes));
  }

  getavaliacoes(): any[] {
    const avaliacoes = localStorage.getItem(this.STORAGE_KEY);
    return avaliacoes ? JSON.parse(avaliacoes) : [];
  }
}
