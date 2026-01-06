
export interface PricingPackage {
  id: string;
  name: string;
  artsPerType: number;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
