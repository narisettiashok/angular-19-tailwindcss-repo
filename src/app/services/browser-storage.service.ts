import { inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage.token';

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  private storage = inject(BROWSER_STORAGE);

  get(key: string): string | null {
    return this.storage?.getItem(key) ?? null;
  }

  set(key: string, value: string): void {
    this.storage?.setItem(key, value);
  }

  remove(key: string): void {
    this.storage?.removeItem(key);
  }
}
