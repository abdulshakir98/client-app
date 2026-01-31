import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryStepComponent } from './steps/category-step/category-step.component';
import { VoucherStepComponent } from './steps/voucher-step/voucher-step.component';
import { DetailsStepComponent } from './steps/details-step/details-step.component';
import { SuccessStepComponent } from './steps/success-step/success-step.component';

@Component({
  selector: 'app-post-ad',
  standalone: true,
  imports: [CommonModule, CategoryStepComponent, VoucherStepComponent, DetailsStepComponent, SuccessStepComponent],
  templateUrl: './post-ad.component.html',
  styleUrl: './post-ad.component.scss'
})
export class PostAdComponent {
  currentStep = 1;
  totalSteps = 4;

  adData: any = {};

  nextStep(data: any) {
    this.adData = { ...this.adData, ...data };
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

  get progress() {
    return (this.currentStep / this.totalSteps) * 100;
  }
}
