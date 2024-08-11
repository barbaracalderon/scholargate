import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() pageTitle: string = '';  // Título da página passado por input

  userName: string = ''; // Nome do usuário logado
  userRole: string = ''; // Função do usuário logado

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.userName = currentUser.name || 'Usuário';
    this.userRole = currentUser.role || '';
  }
}
