import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

export interface User {
    username: string;
    phone: string;
    address: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private platformId = inject(PLATFORM_ID);
    private router = inject(Router);

    private readonly STORAGE_KEY = 'bazaarhub_user';

    isLoggedIn = signal<boolean>(false);
    currentUser = signal<User | null>(null);

    constructor() {
        this.checkAuthStatus();
    }

    private checkAuthStatus() {
        if (isPlatformBrowser(this.platformId)) {
            const userData = localStorage.getItem(this.STORAGE_KEY);
            if (userData) {
                try {
                    const user = JSON.parse(userData);
                    this.currentUser.set(user);
                    this.isLoggedIn.set(true);
                } catch {
                    this.logout();
                }
            }
        }
    }

    login(username: string, password: string): boolean {
        // Simulate login - in real app, this would be an API call
        if (username && password.length >= 6) {
            const user: User = {
                username: username,
                phone: '',
                address: ''
            };

            if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
            }

            this.currentUser.set(user);
            this.isLoggedIn.set(true);
            return true;
        }
        return false;
    }

    register(data: { username: string; password: string; phone: string; address: string }): boolean {
        // Simulate registration - in real app, this would be an API call
        const user: User = {
            username: data.username,
            phone: data.phone,
            address: data.address
        };

        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
        }

        this.currentUser.set(user);
        this.isLoggedIn.set(true);
        return true;
    }

    logout() {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem(this.STORAGE_KEY);
        }
        this.currentUser.set(null);
        this.isLoggedIn.set(false);
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem(this.STORAGE_KEY) !== null;
        }
        return false;
    }
}
