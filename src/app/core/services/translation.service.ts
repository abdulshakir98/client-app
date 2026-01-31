import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Language = 'fa' | 'en';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private translations: Record<string, any> = {};
    currentLang = signal<Language>('fa'); // Default to Farsi
    isRtl = signal<boolean>(true);

    constructor(private http: HttpClient) {
        // Load saved language preference
        const savedLang = localStorage.getItem('lang') as Language;
        if (savedLang) {
            this.setLanguage(savedLang);
        } else {
            this.loadTranslations('fa');
        }
    }

    setLanguage(lang: Language): void {
        this.currentLang.set(lang);
        this.isRtl.set(lang === 'fa');
        localStorage.setItem('lang', lang);
        this.loadTranslations(lang);

        // Update document direction and lang
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }

    private loadTranslations(lang: Language): void {
        this.http.get<Record<string, any>>(`/assets/i18n/${lang}.json`).subscribe({
            next: (data) => {
                this.translations = data;
            },
            error: (err) => {
                console.error('Failed to load translations:', err);
            }
        });
    }

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

    toggleLanguage(): void {
        const newLang = this.currentLang() === 'fa' ? 'en' : 'fa';
        this.setLanguage(newLang);
    }
}
