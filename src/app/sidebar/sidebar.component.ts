import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userRole: string = '';
  isCollapsed: boolean = false;
  isMobile: boolean = false;
  isMobileSidebarOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.userRole = currentUser.role || '';
    
    this.checkIfMobile();

    window.addEventListener('resize', this.checkIfMobile.bind(this));
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
    
    if (this.isMobile) {
      this.isCollapsed = true;
      this.isMobileSidebarOpen = false;
    } else {
      this.isCollapsed = false;
    }
  }

  toggleCollapse() {
    if (this.isMobile) {
      this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  toggleMobileSidebar() {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
