import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../../../core/models/models';

@Component({
  selector: 'app-listing-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing-detail.component.html',
  styleUrl: './listing-detail.component.scss'
})
export class ListingDetailComponent {
  private route = inject(ActivatedRoute);

  listingId: string | null = null;
  activeTab: string = 'info';

  // Mock Data - BMW X5 Detail with Full Specs
  listing: Listing & {
    description: string,
    sellerName: string,
    sellerPhone: string,
    sellerRating: number,
    images: string[],
    specs: { label: string, value: string }[]
  } = {
      id: '105',
      title: 'بی‌ام‌و X5 مدل ۲۰۲۲ - M Sport',
      price: 4200000,
      currency: 'افغانی',
      location: 'کابل',
      imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
      postedTime: new Date(Date.now() - 8 * 60 * 60 * 1000),
      isFavorite: true,
      category: 'vehicles',
      description: `بی‌ام‌و X5 xDrive40i با پکیج M Sport در شرایط عالی. این موتر لوکس، ترکیبی از قدرتمندی و دیزاین مقبول است.

ویژگی‌های کلیدی:
• پکیج M Sport داخلی و خارجی
• سانروف پانوراما
• سیستم صوتی عالی Harman Kardon
• چراغ‌های LED جدید
• سیستم کمک راننده حرفه‌ای
• Apple CarPlay و Android Auto
• چوکی های گرمکن و سردکن
• تیرهای ۲۲ اینچ M 

یک دست | تیر و ویل کپ | سرویس کامل | بدون تکر و شاریدگی`,
      sellerName: 'محمد احمدی',
      sellerPhone: '۰۷۹۹ ۱۲۳ ۴۵۶',
      sellerRating: 4.9,
      images: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=800'
      ],
      specs: [
        { label: 'برند', value: 'بی‌ام‌و' },
        { label: 'مدل', value: 'X5 xDrive40i' },
        { label: 'سال ساخت', value: '۲۰۲۲' },
        { label: 'نوع سوخت', value: 'پترول' },
        { label: 'گیربکس', value: 'اتومات' },
        { label: 'کارکرد', value: '۲۸,۰۰۰ کیلومتر' },
        { label: 'نوع بدنه', value: 'شاسی بلند' },
        { label: 'قدرت موتور', value: '۳۴۰ اسب بخار' },
        { label: 'حجم موتور', value: '۳.۰ لیتر توربو' },
        { label: 'سیستم محرک', value: 'چهار چرخ' },
        { label: 'رنگ', value: 'سفید صدفی' },
        { label: 'داخلی', value: 'چرم سیاه' },
        { label: 'حالت', value: 'عالی' },
        { label: 'پلیت', value: 'کابل - منفی ۶' }
      ]
    };

  // Use index for image carousel
  activeImageIndex = 0;

  constructor() {
    this.route.params.subscribe(params => {
      this.listingId = params['id'];
      // Fetch listing details
    });
  }
}
