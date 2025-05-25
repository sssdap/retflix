export interface Plan {
  id: string;
  title: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline';
}
