import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { authGuard, guestGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard] },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
        canActivate: [guestGuard]
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent),
        canActivate: [guestGuard]
    },
    {
        path: 'category/:slug',
        loadComponent: () => import('./features/browse/category-page/category-page.component').then(m => m.CategoryPageComponent),
        canActivate: [authGuard]
    },
    {
        path: 'listing/:id',
        loadComponent: () => import('./features/browse/listing-detail/listing-detail.component').then(m => m.ListingDetailComponent),
        canActivate: [authGuard]
    },
    {
        path: 'messages',
        loadComponent: () => import('./features/messages/messages.component').then(m => m.MessagesComponent),
        canActivate: [authGuard]
    },
    {
        path: 'post-ad',
        loadComponent: () => import('./features/post-ad/post-ad.component').then(m => m.PostAdComponent),
        canActivate: [authGuard]
    },
    {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent),
        canActivate: [authGuard]
    },
    {
        path: 'my-ads',
        loadComponent: () => import('./features/my-ads/my-ads.component').then(m => m.MyAdsComponent),
        canActivate: [authGuard]
    },
    { path: '**', redirectTo: '' }
];
