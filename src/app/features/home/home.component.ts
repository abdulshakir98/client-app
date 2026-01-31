import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card.component';
import { ListingCardComponent } from '../../shared/components/listing-card/listing-card.component';
import { Category, Listing } from '../../core/models/models';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent, ListingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  layoutService = inject(LayoutService);

  categories: Category[] = [
    { id: '1', name: 'خودرو', slug: 'vehicles', icon: '🚗', adCount: 4520 },
    { id: '2', name: 'املاک', slug: 'properties', icon: '🏠', adCount: 3180 },
    { id: '3', name: 'موبایل', slug: 'mobiles', icon: '📱', adCount: 5640 },
    { id: '4', name: 'لوازم الکترونیکی', slug: 'electronics', icon: '💻', adCount: 2890 },
    { id: '5', name: 'مبلمان', slug: 'furniture', icon: '🛋️', adCount: 1450 },
    { id: '6', name: 'استخدام', slug: 'jobs', icon: '💼', adCount: 890 },
    { id: '7', name: 'خدمات', slug: 'services', icon: '🔧', adCount: 1120 },
    { id: '8', name: 'پوشاک', slug: 'fashion', icon: '👗', adCount: 2340 },
  ];

  featuredListings: Listing[] = [
    {
      id: '101',
      title: 'سمند سورن پلاس ۱۴۰۲ - فول آپشن',
      price: 850000000,
      currency: 'تومان',
      location: 'تهران، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isFavorite: false,
      category: 'vehicles'
    },
    {
      id: '102',
      title: 'آپارتمان ۱۲۰ متری - نوساز - سعادت آباد',
      price: 12500000000,
      currency: 'تومان',
      location: 'تهران، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 5 * 60 * 60 * 1000),
      isFavorite: true,
      category: 'properties'
    },
    {
      id: '103',
      title: 'آیفون ۱۵ پرو مکس ۲۵۶ گیگ - نو',
      price: 89000000,
      currency: 'تومان',
      location: 'اصفهان، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 1 * 60 * 60 * 1000),
      isFavorite: false,
      category: 'mobiles'
    },
    {
      id: '104',
      title: 'مک‌بوک پرو M3 - ۱۴ اینچ - مشکی',
      price: 145000000,
      currency: 'تومان',
      location: 'تهران، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 3 * 60 * 60 * 1000),
      isFavorite: false,
      category: 'electronics'
    },
    {
      id: '105',
      title: 'بی‌ام‌و X5 مدل ۲۰۲۲ - M Sport',
      price: 4200000000,
      currency: 'تومان',
      location: 'شیراز، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 8 * 60 * 60 * 1000),
      isFavorite: true,
      category: 'vehicles'
    },
    {
      id: '106',
      title: 'ویلا دوبلکس ۳۵۰ متری - لواسان',
      price: 85000000000,
      currency: 'تومان',
      location: 'تهران، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 12 * 60 * 60 * 1000),
      isFavorite: false,
      category: 'properties'
    },
    {
      id: '107',
      title: 'سامسونگ گلکسی S24 اولترا - تیتانیوم',
      price: 72000000,
      currency: 'تومان',
      location: 'مشهد، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 4 * 60 * 60 * 1000),
      isFavorite: false,
      category: 'mobiles'
    },
    {
      id: '108',
      title: 'مبل راحتی ۷ نفره چرم طبیعی',
      price: 45000000,
      currency: 'تومان',
      location: 'تبریز، ایران',
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600',
      postedTime: new Date(Date.now() - 6 * 60 * 60 * 1000),
      isFavorite: false,
      category: 'furniture'
    },
  ];
}
