import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListingCardComponent } from '../../../shared/components/listing-card/listing-card.component';
import { Listing } from '../../../core/models/models';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule, ListingCardComponent, ReactiveFormsModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  categorySlug: string = '';

  // Filters Form
  filtersForm = this.fb.group({
    minPrice: [''],
    maxPrice: [''],
    location: [''],
    sort: ['newest']
  });

  // Mock Data - Vehicles Category
  listings: Listing[] = [
    { id: '1', title: 'تویوتا کمری ۲۰۲۳ - فول آپشن', price: 2100000000, currency: 'تومان', location: 'تهران، ایران', imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=600', postedTime: new Date(Date.now() - 2 * 60 * 60 * 1000), isFavorite: false, category: 'vehicles' },
    { id: '2', title: 'بی‌ام‌و X5 مدل ۲۰۲۲ - M Sport', price: 4200000000, currency: 'تومان', location: 'اصفهان، ایران', imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600', postedTime: new Date(Date.now() - 8 * 60 * 60 * 1000), isFavorite: true, category: 'vehicles' },
    { id: '3', title: 'مرسدس بنز C300 مدل ۲۰۲۱', price: 2900000000, currency: 'تومان', location: 'شیراز، ایران', imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600', postedTime: new Date(Date.now() - 5 * 60 * 60 * 1000), isFavorite: false, category: 'vehicles' },
    { id: '4', title: 'هوندا آکورد ۲۰۲۳ اسپرت', price: 2300000000, currency: 'تومان', location: 'مشهد، ایران', imageUrl: 'https://images.unsplash.com/photo-1606611013016-96518296a0a4?auto=format&fit=crop&q=80&w=600', postedTime: new Date(Date.now() - 12 * 60 * 60 * 1000), isFavorite: false, category: 'vehicles' },
    { id: '5', title: 'آئودی A6 مدل ۲۰۲۲ پریمیوم', price: 3600000000, currency: 'تومان', location: 'تبریز، ایران', imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=600', postedTime: new Date(Date.now() - 3 * 60 * 60 * 1000), isFavorite: false, category: 'vehicles' },
    { id: '6', title: 'تسلا مدل ۳ لانگ رنج', price: 3100000000, currency: 'تومان', location: 'تهران، ایران', imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=600', postedTime: new Date(Date.now() - 6 * 60 * 60 * 1000), isFavorite: true, category: 'vehicles' },
  ];

  constructor() {
    this.route.params.subscribe(params => {
      this.categorySlug = params['slug'];
      // Ideally fetch data based on slug
    });
  }

  getCategoryName(slug: string): string {
    const categories: Record<string, string> = {
      'vehicles': 'خودرو',
      'properties': 'املاک',
      'electronics': 'الکترونیک',
      'services': 'خدمات',
      'home': 'خانه و آشپزخانه',
      'personal': 'وسایل شخصی'
    };
    return categories[slug.toLowerCase()] || slug;
  }
}
