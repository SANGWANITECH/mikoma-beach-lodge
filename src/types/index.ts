export interface Room {
  id: string;
  slug: string;
  name: string;
  category: "Deluxe" | "Executive" | "Family" | "Standard" | "Twin Sharing" | "C-Room";
  description: string;
  longDescription: string;
  price: number;
  size: string;
  bedType: string;
  maxGuests: number;
  features: string[];
  amenities: string[];
  images: string[];
  featured: boolean;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
  rating: number;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  specialRequests?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "rooms" | "facilities" | "dining" | "lake" | "exterior";
}