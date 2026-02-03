import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

import { LayoutService } from '../../../core/services/layout.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    private fb = inject(FormBuilder);
    private router = inject(Router);
    private authService = inject(AuthService);
    layoutService = inject(LayoutService);

    loginForm: FormGroup = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    isLoading = false;
    errorMessage = '';

    onSubmit() {
        if (this.loginForm.valid) {
            this.isLoading = true;
            this.errorMessage = '';

            const { username, password } = this.loginForm.value;

            // Simulate API delay
            setTimeout(() => {
                const success = this.authService.login(username, password);
                this.isLoading = false;

                if (success) {
                    this.router.navigate(['/']);
                } else {
                    this.errorMessage = this.layoutService.t('auth.loginError');
                }
            }, 1000);
        }
    }
}
