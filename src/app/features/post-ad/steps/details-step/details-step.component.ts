import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../../../core/models/models';

@Component({
  selector: 'app-details-step',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details-step.component.html',
  styleUrl: './details-step.component.scss'
})
export class DetailsStepComponent {
  @Input() category!: { category: Category, subCategory: Category | null };
  @Output() next = new EventEmitter<any>();
  @Output() back = new EventEmitter<void>();

  private fb = inject(FormBuilder);

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required, Validators.min(0)]],
    condition: ['used', Validators.required],
    description: ['', [Validators.required, Validators.minLength(20)]],
    location: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
  });

  uploadedImages: string[] = [];
  isSubmitting = false;

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files) as File[];
      files.forEach((file: File) => {
        if (this.uploadedImages.length < 10) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.uploadedImages.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
      // Reset input to allow selecting same files again
      event.target.value = '';
    }
  }

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
  }

  submit() {
    if (this.form.valid) {
      this.isSubmitting = true;
      // Simulate API submission delay
      setTimeout(() => {
        this.isSubmitting = false;
        this.next.emit({
          ...this.form.value,
          images: this.uploadedImages,
          id: Math.floor(Math.random() * 10000).toString()
        });
      }, 1500);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
