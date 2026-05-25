export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number; // in PKR
  description: string;
  imageUrl: string;
  rating: number;
  spiceLevel: 0 | 1 | 2 | 3;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  isVeg?: boolean;
  allergens?: string[];
  prepTime: string; // e.g. "12 mins"
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  customNote?: string;
}

export interface AreaInfo {
  name: string;
  estimateMin: string; // e.g. "25-30"
  deliveryFee: number; // in PKR
  minOrder: number; // in PKR
}

export interface TableZone {
  id: string;
  name: string;
  description: string;
  capacityText: string;
  baseFee: number;
  icon: string;
}

export interface TableReservation {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  zoneId: string;
  specialRequests?: string;
}

export interface AISommelierRecommendation {
  name: string;
  price: string;
  rationale: string;
}

export interface AISommelierResponse {
  sommelierGreeting: string;
  recommendations: AISommelierRecommendation[];
  partingToast: string;
  isFallback?: boolean;
  message?: string;
}
