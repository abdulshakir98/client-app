import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingCardComponent } from '../../shared/components/listing-card/listing-card.component';
import { Listing } from '../../core/models/models';

@Component({
  selector: 'app-my-ads',
  standalone: true,
  imports: [CommonModule, ListingCardComponent],
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.scss'
})
export class MyAdsComponent {
  activeTab: 'active' | 'pending' | 'sold' = 'active';

  listings: Listing[] = [
    {
      id: '101',
      title: 'تویوتا کمری ۲۰۲۳ - فول آپشن',
      price: 2100000000,
      currency: 'تومان',
      location: 'تهران، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      isFavorite: false,
      category: 'vehicles'
    },
    {
      id: '105',
      title: 'پلی‌استیشن ۵ دیجیتال',
      price: 32000000,
      currency: 'تومان',
      location: 'اصفهان، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      isFavorite: false,
      category: 'electronics'
    },
    {
      id: '106',
      title: 'مک‌بوک پرو M3 - ۱۴ اینچ',
      price: 145000000,
      currency: 'تومان',
      location: 'تهران، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      isFavorite: false,
      category: 'electronics'
    }
  ];

  get filteredListings() {
    // For mock purposes, just return same or filter
    if (this.activeTab === 'active') return this.listings;
    if (this.activeTab === 'pending') return [];
    if (this.activeTab === 'sold') return [this.listings[0]]; // Mock sold
    return [];
  }
}
