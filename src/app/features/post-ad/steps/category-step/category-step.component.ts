import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../../../core/models/models';

@Component({
  selector: 'app-category-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-step.component.html',
  styleUrl: './category-step.component.scss'
})
export class CategoryStepComponent {
  @Output() next = new EventEmitter<any>();

  categories: Category[] = [
    { id: '1', name: 'خودرو', slug: 'vehicles', icon: '🚗' },
    { id: '2', name: 'املاک', slug: 'properties', icon: '🏠' },
    { id: '3', name: 'موبایل', slug: 'mobiles', icon: '📱' },
    { id: '4', name: 'لوازم الکترونیکی', slug: 'electronics', icon: '💻' },
    { id: '5', name: 'مبلمان', slug: 'furniture', icon: '🛋️' },
    { id: '6', name: 'استخدام', slug: 'jobs', icon: '💼' }
  ];

  subCategories: Record<string, Category[]> = {
    '1': [
      { id: '1-1', name: 'سواری', slug: 'cars', icon: '' },
      { id: '1-2', name: 'موتورسیکلت', slug: 'motorbikes', icon: '' },
      { id: '1-3', name: 'کامیون', slug: 'trucks', icon: '' }
    ],
    '2': [
      { id: '2-1', name: 'آپارتمان', slug: 'apartments', icon: '' },
      { id: '2-2', name: 'ویلا', slug: 'houses', icon: '' },
      { id: '2-3', name: 'زمین', slug: 'land', icon: '' }
    ]
  };


  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    if (this.subCategories[category.id]) {
      this.selectedCategory = category;
    } else {
      // No subcategories, proceed
      this.emitCategory(category, null);
    }
  }

  selectSubCategory(sub: Category) {
    this.emitCategory(this.selectedCategory!, sub);
  }

  emitCategory(category: Category, subCategory: Category | null) {
    this.next.emit({
      category: category,
      subCategory: subCategory
    });
  }

  resetSelection() {
    this.selectedCategory = null;
  }
}
