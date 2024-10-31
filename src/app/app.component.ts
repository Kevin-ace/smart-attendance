// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  isHovered = false;
  notification = {
    show: false,
    message: ''
  }; // Moved this closing brace here

  constructor(private router: Router) { } // Constructor needs to be outside the notification object

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  features: Feature[] = [
    { icon: 'book', title: 'Smart Learning', description: 'Track progress effortlessly' },
    { icon: 'users', title: 'Class Management', description: 'Organize with ease' },
    { icon: 'calendar', title: 'Schedule', description: 'Plan ahead effectively' }
  ];

  setHovered(state: boolean): void {
    this.isHovered = state;
  }

  showNotification(message: string): void {
    this.notification.message = message;
    this.notification.show = true;
    setTimeout(() => this.hideNotification(), 3000);
  }

  hideNotification(): void {
    this.notification.show = false;
  }

  onFeatureHover(feature: Feature): void {
    // You could add additional hover effects here
  }

  onFeatureClick(feature: Feature): void {
    this.showNotification(`Exploring ${feature.title}...`);
  }
}
