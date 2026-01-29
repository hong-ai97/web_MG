import { FileText, CreditCard, DollarSign, HandCoins } from 'lucide-react';
import { Product, QuickMenuItem, CategoryItem, NoticeItem } from './types';

export const DIRECT_PRODUCTS: Product[] = [
  { id: 1, title: "다이렉트 운전자보험", description: "교통사고 처리비용 든든하게 보장", tag: "인기" },
  { id: 2, title: "다이렉트 암보험", description: "진단금부터 수술비까지 한번에", tag: "추천" },
  { id: 3, title: "해외여행보험", description: "즐거운 여행의 시작과 끝", tag: "필수" },
  { id: 4, title: "주택화재보험", description: "우리집 안전을 위한 현명한 선택", tag: "필수" },
  { id: 5, title: "실손 의료보험", description: "아플 때 든든한 의료비 지원", tag: "인기" },
  { id: 6, title: "MG 연금 저축", description: "안정적인 노후를 위한 첫걸음", tag: "추천" },
];

export const CATEGORIES: CategoryItem[] = [
  { id: 0, label: "전체" },
  { id: 1, label: "종신/보장" },
  { id: 2, label: "암보험" },
  { id: 3, label: "어린이" },
  { id: 4, label: "연금" },
  { id: 5, label: "저축" },
  { id: 6, label: "건강/통합" },
  { id: 7, label: "화재" },
  { id: 8, label: "운전자" },
  { id: 9, label: "여행/레저" },
];

export const NOTICES: NoticeItem[] = [
  { id: 1, category: "[공지]", title: "보험약관 개정 안내 (2024.05.20 시행)", date: "2024.05.10" },
  { id: 2, category: "[이벤트]", title: "다이렉트 보험료 확인하고 커피 받자!", date: "2024.05.01" },
  { id: 3, category: "[보도]", title: "MG새마을금고 보험, 소비자 만족도 1위 수상", date: "2024.04.28" },
  { id: 4, category: "[공지]", title: "시스템 정기 점검 안내 (5월 15일)", date: "2024.04.20" },
  { id: 5, category: "[안내]", title: "금융소비자보호법 시행에 따른 서비스 변경 안내", date: "2024.04.15" },
];
