export interface Product {
  id: number;
  title: string;
  description: string;
  tag?: string;
}

export interface QuickMenuItem {
  id: number;
  label: string;
  iconName: string;
}

export interface CategoryItem {
  id: number;
  label: string;
}

export interface NoticeItem {
  id: number;
  category: string;
  title: string;
  date: string;
}