import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent {
    private fb = inject(FormBuilder);
    private router = inject(Router);
    private authService = inject(AuthService);

    registerForm: FormGroup = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern(/^09[0-9]{9}$/)]],
        address: ['', [Validators.required, Validators.minLength(10)]]
    }, { validators: this.passwordMatchValidator });

    isLoading = false;
    errorMessage = '';

    passwordMatchValidator(control: AbstractControl) {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');

        if (password && confirmPassword && password.value !== confirmPassword.value) {
            confirmPassword.setErrors({ passwordMismatch: true });
            return { passwordMismatch: true };
        }
        return null;
    }

    onSubmit() {
        if (this.registerForm.valid) {
            this.isLoading = true;
            this.errorMessage = '';

            const { username, password, phone, address } = this.registerForm.value;

            // Simulate API delay
            setTimeout(() => {
                const success = this.authService.register({ username, password, phone, address });
                this.isLoading = false;

                if (success) {
                    this.router.navigate(['/']);
                } else {
                    this.errorMessage = 'خطا در ثبت‌نام. لطفاً دوباره تلاش کنید';
                }
            }, 1000);
        }
    }
}
