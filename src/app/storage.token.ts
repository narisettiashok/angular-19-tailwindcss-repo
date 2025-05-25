import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage | null>(
  'Browser Storage',
  {
    providedIn: 'root',
    factory: () => {
      try {
        return typeof window !== 'undefined' ? window.localStorage : null;
      } catch {
        return null;
      }
    },
  }
);
