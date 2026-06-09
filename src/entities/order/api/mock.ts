import type { Order } from '../model/types';

export const mockOrderData: Order[] = [
  {
    id: 'item-1',
    category: 'Appetizer',
    name: 'Bruschetta',
    imageAlt: 'Bruschetta',
    imageUrl:
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=64&h=64&fit=crop&crop=faces', // Placeholder URLs
    price: 8.99,
    amount: 1,
    comment: '',
  },
  {
    id: 'item-2',
    category: 'Main Course',
    name: 'Grilled Chicken Caesar Salad',
    imageAlt: 'Grilled Chicken Caesar Salad',
    imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=64&h=64&fit=crop',
    price: 12.99,
    amount: 1,
    comment: '',
  },
  {
    id: 'item-3',
    category: 'Main Course',
    name: 'Classic Cheeseburger with Fries',
    imageAlt: 'Classic Cheeseburger',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=64&h=64&fit=crop',
    price: 14.99,
    amount: 1,
    comment: 'Add 1 extra cheese',
  },
  {
    id: 'item-4',
    category: 'Drinks',
    name: 'Iced Tea',
    imageAlt: 'Iced Tea',
    imageUrl: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=64&h=64&fit=crop',
    price: 2.99,
    amount: 2,
    comment: '',
  },
  {
    id: 'item-5',
    category: 'Dessert',
    name: 'New York Cheesecake',
    imageAlt: 'New York Cheesecake',
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=64&h=64&fit=crop',
    price: 6.99,
    amount: 1,
    comment: '',
  },
];
