import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voucher-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voucher-step.component.html',
  styleUrl: './voucher-step.component.scss'
})
export class VoucherStepComponent {
  @Output() next = new EventEmitter<any>();
  @Output() back = new EventEmitter<void>();

  voucherCode: string = '';
  isValidating: boolean = false;
  error: string | null = null;

  formatCode() {
    // Basic formatting XXXX XXXX XXXX
    let val = this.voucherCode.replace(/\D/g, '');
    if (val.length > 12) val = val.substring(0, 12);

    // Add spaces
    const parts = [];
    for (let i = 0; i < val.length; i += 4) {
      parts.push(val.substring(i, i + 4));
    }
    this.voucherCode = parts.join(' ');
  }

  verifyVoucher() {
    const cleanCode = this.voucherCode.replace(/\s/g, '');
    if (cleanCode.length !== 12) {
      this.error = 'Voucher code must be 12 digits.';
      return;
    }

    this.isValidating = true;
    this.error = null;

    // Simulate API call
    setTimeout(() => {
      this.isValidating = false;
      if (cleanCode === '123412341234') {
        this.next.emit({ voucher: cleanCode });
      } else {
        this.error = 'Invalid voucher code. Try 1234 1234 1234';
      }
    }, 1500);
  }
}
