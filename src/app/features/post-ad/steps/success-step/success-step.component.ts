import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success-step',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './success-step.component.html',
  styleUrl: './success-step.component.scss'
})
export class SuccessStepComponent {
  @Input() adId: string = '';

  reload() {
    window.location.reload();
  }
}
