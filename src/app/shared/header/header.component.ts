import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BrowserStorageService } from '../../services/browser-storage.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
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
    } // SSR-safe
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
