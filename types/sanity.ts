export type NavLink = {
  title: string;
  href: string;
};

export type Announcement = {
  _id: string;
  title: string;
  text: string;
  linkLabel?: string;
  linkUrl?: string;
  enabled: boolean;
  dismissible: boolean;
  style: "standard" | "seasonal" | "urgent" | "event";
};

export type BusinessHour = {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
};

export type SiteSettings = {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  mapsUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  orderUrl: string;
  footerMessage: string;
  parking: string;
  accessibility: string;
  wifi: string;
  seating: string;
  holidayHours: string;
  faq: Array<{ question: string; answer: string }>;
  hours: BusinessHour[];
  navLinks: NavLink[];
};

export type MenuCategory = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  order: number;
};

export type MenuItem = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  fullDescription?: string;
  price: string;
  secondaryPrice?: string;
  categorySlug?: string;
  image: string;
  imageAlt: string;
  dietaryLabels?: string[];
  seasonal?: boolean;
  featured?: boolean;
  available?: boolean;
};

export type SeasonalDrink = {
  _id: string;
  name: string;
  description: string;
  price: string;
  heroImage: string;
  imageAlt: string;
  ingredients: string[];
  customizationNote?: string;
  buttonLabel: string;
};

export type Event = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description: string[];
  image: string;
  imageAlt: string;
  startsAt: string;
  endsAt: string;
  locationName: string;
  address: string;
  price: string;
  registrationLabel: string;
  registrationUrl: string;
  status: "upcoming" | "sold-out" | "canceled" | "completed";
  featured?: boolean;
  capacity?: number;
};

export type GalleryImage = {
  _id: string;
  image: string;
  imageAlt: string;
  caption: string;
  category: "Drinks" | "Food" | "Our Space" | "Community" | "Events";
  tall?: boolean;
  featured?: boolean;
};

export type Testimonial = {
  _id: string;
  quote: string;
  customerName: string;
  source: string;
};

export type PageContent = {
  slug: "home" | "about" | "visit" | "catering";
  title: string;
  eyebrow?: string;
  intro: string;
  body: string[];
};

export type HomePagePayload = {
  announcement: Announcement | null;
  settings: SiteSettings;
  seasonalDrink: SeasonalDrink;
  featuredMenuItems: MenuItem[];
  upcomingEvents: Event[];
  galleryImages: GalleryImage[];
  testimonial: Testimonial;
  homePage: PageContent;
};

export type MenuPagePayload = {
  settings: SiteSettings;
  categories: MenuCategory[];
  items: MenuItem[];
  seasonalDrink: SeasonalDrink;
};

export type EventsPagePayload = {
  settings: SiteSettings;
  upcomingEvents: Event[];
  pastEvents: Event[];
};

export type GalleryPagePayload = {
  settings: SiteSettings;
  images: GalleryImage[];
};

export type AboutVisitPayload = {
  settings: SiteSettings;
  page: PageContent;
};

export type EventDetailPayload = {
  settings: SiteSettings;
  event: Event | null;
  relatedEvents: Event[];
};
