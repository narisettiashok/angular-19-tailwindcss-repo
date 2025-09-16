import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BrowserStorageService } from '../../services/browser-storage.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private storageService: BrowserStorageService
  ) {}

  setTheme(theme: string) {
    if (isPlatformBrowser(this.platformId)) {
      if (theme === 'system') {
        this.storageService.remove('theme');
        this.applySystemTheme();
      } else {
        document.documentElement.className = theme;
        this.storageService.set('theme', theme);
      }
    }

    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  applySystemTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      document.documentElement.className = prefersDark ? 'dark' : '';
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = this.storageService.get('theme');
      if (saved === 'dark' || saved === 'ocean') {
        document.documentElement.className = saved;
      } else if (saved === 'system' || !saved) {
        this.applySystemTheme();
      }
    }
  }
}
