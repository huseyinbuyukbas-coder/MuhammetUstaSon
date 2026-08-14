export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phonePlaceholder: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappPlaceholder: string;
  whatsappRaw: string;
  whatsappDefaultMessage: string;
  rating: {
    score: number;
    maxScore: number;
    scoreDisplay: string;
    source: string;
  };
  workingHours: {
    summary: string;
    note: string;
  };
  location: {
    addressPlaceholder: string;
    serviceRegionPlaceholder: string;
    serviceNote: string;
  };
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Muhammet Usta Klima ve Kombi Teknik Servisi",
  shortName: "Muhammet Usta Teknik Servis",
  tagline: "Güvenilir, Titiz ve Güler Yüzlü İklimlendirme Çözümleri",
  heroHeadline: "Klima ve Kombi Sorunlarınıza Hızlı ve Güvenilir Çözüm",
  heroSubheadline: "Klima ve kombi arıza, bakım, montaj ve teknik servis hizmetleri. Müşteri yorumlarında öne çıkan titiz işçilik ve güler yüzlü usta yaklaşımı.",
  phonePlaceholder: "[TELEFON NUMARASI]",
  phoneDisplay: "[TELEFON NUMARASI]",
  phoneRaw: "+905000000000",
  whatsappPlaceholder: "[WHATSAPP NUMARASI]",
  whatsappRaw: "+905000000000",
  whatsappDefaultMessage: "Merhaba Muhammet Usta, klima / kombi servis talebinde bulunmak istiyorum. Müsaitlik durumunuz nedir?",
  rating: {
    score: 5.0,
    maxScore: 5.0,
    scoreDisplay: "5.0 / 5.0",
    source: "Google Puanı",
  },
  workingHours: {
    summary: "Randevu ve İletişim İçin Arayınız",
    note: "Servis randevusu için telefon veya WhatsApp üzerinden ulaşabilirsiniz.",
  },
  location: {
    addressPlaceholder: "[İŞLETME ADRESİ]",
    serviceRegionPlaceholder: "[HİZMET BÖLGESİ]",
    serviceNote: "Hizmet bölgesi ve servis randevusu için iletişime geçebilirsiniz.",
  },
  features: [
    {
      id: "customer-speed",
      title: "Hızlı Servis Deneyimi",
      description: "Google yorumlarımızda müşterilerimizin özellikle hızlı servis ve özenli işçilik konusundaki memnuniyeti öne çıkıyor.",
      icon: "Zap",
    },
    {
      id: "meticulous-work",
      title: "Titiz ve Özenli İşçilik",
      description: "İşi oldu bittiye getirmeyen, cihazınızı özenle ve dikkatle ele alan usta işçiliği.",
      icon: "ShieldCheck",
    },
    {
      id: "expert-masters",
      title: "İşinin Ehli & Güler Yüzlü Ustalar",
      description: "Güler yüzlü, ilgili ve alanında uzman teknik yaklaşım ile kaliteli servis deneyimi.",
      icon: "Award",
    },
    {
      id: "preventive-care",
      title: "İleride Çıkabilecek Sorunları Belirleme",
      description: "Sadece mevcut arızaya odaklanmayıp cihazınızda ileride çıkabilecek olası sorunları da önceden tespit ediyoruz.",
      icon: "Sparkles",
    },
    {
      id: "clean-work",
      title: "Özenli ve Temiz Çalışma",
      description: "Cihaz bakım ve onarımlarını çalışma alanına özen göstererek titizlikle gerçekleştiriyoruz.",
      icon: "CheckCircle2",
    },
    {
      id: "detailed-service",
      title: "Arıza Odaklı ve Detaylı Servis",
      description: "Klima ve kombi sistemlerindeki teknik arızaları kaynağında tespit eden kapsamlı ve detaylı onarım yaklaşımı.",
      icon: "Wrench",
    },
  ],
};
