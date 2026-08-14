export interface ServiceItem {
  id: string;
  category: 'klima' | 'kombi' | 'genel';
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  features: string[];
  commonIssues: string[];
  imageUrl: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  serviceType: string;
  verified: boolean;
  highlight?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'klima' | 'kombi' | 'genel';
}

export interface BrandItem {
  name: string;
  category: 'klima' | 'kombi' | 'hepsi';
  logoText: string;
}

export interface QuickDiagnosis {
  id: string;
  device: 'klima' | 'kombi';
  symptom: string;
  likelyReason: string;
  recommendedAction: string;
  urgency: 'Yüksek' | 'Orta' | 'Periyodik';
}
