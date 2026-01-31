import { Injectable, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export type Language = 'fa' | 'en';
export type Direction = 'rtl' | 'ltr';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  currentLang = signal<Language>('fa'); // Default to Farsi
  currentDir = signal<Direction>('rtl'); // Default RTL for Farsi

  // Translations object
  translations: Record<string, any> = {};
  translationsLoaded = signal(false);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {
    // Effect to update document attributes whenever signals change
    effect(() => {
      const lang = this.currentLang();

      if (isPlatformBrowser(this.platformId)) {
        this.document.documentElement.lang = lang;
        // Note: We don't set dir attribute - CSS handles text RTL while keeping layout LTR
      }
    });


    // Load saved language or default to Farsi
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang') as Language;
      if (savedLang && (savedLang === 'fa' || savedLang === 'en')) {
        this.setLanguage(savedLang);
      } else {
        this.loadTranslations('fa');
      }
    }
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    this.currentDir.set(lang === 'fa' ? 'rtl' : 'ltr');

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }

    this.loadTranslations(lang);
  }

  private loadTranslations(lang: Language) {
    this.translationsLoaded.set(false);
    this.http.get<Record<string, any>>(`/assets/i18n/${lang}.json`).subscribe({
      next: (data) => {
        this.translations = data;
        this.translationsLoaded.set(true);
      },
      error: (err) => {
        console.error('Failed to load translations:', err);
        this.translationsLoaded.set(true); // Continue even if failed
      }
    });
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'fa' ? 'en' : 'fa');
  }

  // Translation helper method
  t(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  }
}
