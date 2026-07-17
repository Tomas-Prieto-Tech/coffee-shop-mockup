import type {
  Announcement,
  Event,
  GalleryImage,
  MenuCategory,
  MenuItem,
  PageContent,
  SeasonalDrink,
  SiteSettings,
  Testimonial,
} from "@/types/sanity";

const image = (id: string, extra: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80${extra}`;

export const demoSettings: SiteSettings = {
  businessName: "Mesa & Main Coffee Co.",
  tagline: "Coffee, conversation, and a slower start.",
  phone: "(661) 555-0148",
  email: "hello@mesaandmaincoffee.com",
  address: "1824 19th Street",
  city: "Bakersfield, CA 93301",
  mapsUrl: "https://maps.google.com/?q=1824+19th+Street+Bakersfield+CA+93301",
  instagramUrl: "https://instagram.com/mesaandmaincoffee",
  tiktokUrl: "https://tiktok.com/@mesaandmaincoffee",
  orderUrl: "#",
  footerMessage:
    "Built as a flexible coffee shop website demo for Prieto Technologies. Branding, menu content, events, and imagery can be swapped without rebuilding the structure.",
  parking:
    "Street parking is available along 19th Street, with a public lot one block west on Eye Street.",
  accessibility:
    "Step-free front entry, accessible restroom, counter assistance on request, and wide interior pathways.",
  wifi: "Fast Wi-Fi, plenty of outlets, and laptop-friendly seating until 5 PM.",
  seating: "Indoor lounge seating, communal tables, patio bistro tables, and shaded sidewalk seating.",
  holidayHours: "Open until 2 PM on July 4th. Closed Thanksgiving Day and Christmas Day.",
  faq: [
    {
      question: "Do you take reservations?",
      answer: "Not for daily cafe seating, but private evening gatherings and tasting events can be reserved through the catering page.",
    },
    {
      question: "Is your menu laptop-friendly?",
      answer: "Yes. We have strong Wi-Fi, quiet daytime seating, and several larger tables for study sessions or casual meetings.",
    },
    {
      question: "Do you offer dairy-free options?",
      answer: "Every espresso drink can be made with oat, almond, or coconut milk, and several pastries are marked as dairy-free or vegan-option.",
    },
  ],
  hours: [
    { day: "Monday", open: "6:30 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "6:30 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "6:30 AM", close: "5:00 PM" },
    { day: "Thursday", open: "6:30 AM", close: "7:00 PM" },
    { day: "Friday", open: "6:30 AM", close: "8:00 PM" },
    { day: "Saturday", open: "7:00 AM", close: "8:00 PM" },
    { day: "Sunday", open: "7:00 AM", close: "4:00 PM" },
  ],
  navLinks: [
    { title: "Menu", href: "/menu" },
    { title: "Events", href: "/events" },
    { title: "Gallery", href: "/gallery" },
    { title: "About", href: "/about" },
    { title: "Visit", href: "/visit" },
    { title: "Catering", href: "/catering" },
  ],
};

export const demoAnnouncement: Announcement = {
  _id: "announcement-summer",
  title: "Summer Drinks",
  text: "Summer drinks have arrived. Meet the Orange Cream Cold Brew.",
  linkLabel: "See the menu",
  linkUrl: "/menu#seasonal-drinks",
  enabled: true,
  dismissible: true,
  style: "seasonal",
};

export const demoCategories: MenuCategory[] = [
  { _id: "cat-espresso", name: "Espresso", slug: "espresso", description: "Short, balanced, and dialed in fresh all day.", order: 1 },
  { _id: "cat-coffee", name: "Coffee", slug: "coffee", description: "Classic pours, cold brew, and house favorites.", order: 2 },
  { _id: "cat-tea", name: "Tea & Matcha", slug: "tea-matcha", description: "Bright teas, ceremonial matcha, and calm afternoon picks.", order: 3 },
  { _id: "cat-seasonal", name: "Seasonal Drinks", slug: "seasonal-drinks", description: "Limited runs built for the current season.", order: 4 },
  { _id: "cat-cold", name: "Cold Drinks", slug: "cold-drinks", description: "Iced staples, sparkling refreshers, and signature coolers.", order: 5 },
  { _id: "cat-breakfast", name: "Breakfast", slug: "breakfast", description: "Savory morning plates and grab-and-go favorites.", order: 6 },
  { _id: "cat-pastries", name: "Pastries", slug: "pastries", description: "Fresh bakes, morning sweets, and counter classics.", order: 7 },
];

export const demoMenuItems: MenuItem[] = [
  { _id: "m1", name: "Honey Cinnamon Cortado", slug: "honey-cinnamon-cortado", shortDescription: "Espresso, warm honey, cinnamon, and textured milk.", price: "$4.75", categorySlug: "espresso", image: image("photo-1511920170033-f8396924c348", "&crop=entropy"), imageAlt: "Cortado in a ceramic cup", dietaryLabels: ["Gluten-free"], featured: true, available: true },
  { _id: "m2", name: "Brown Sugar Oat Latte", slug: "brown-sugar-oat-latte", shortDescription: "Our house latte with brown sugar syrup and oat milk.", price: "$5.95", categorySlug: "espresso", image: image("photo-1495474472287-4d71bcdd2085", "&crop=faces"), imageAlt: "Latte art in a stoneware mug", dietaryLabels: ["Dairy-free"], featured: true, available: true },
  { _id: "m3", name: "Vanilla Sea Salt Foam Cold Brew", slug: "vanilla-sea-salt-foam-cold-brew", shortDescription: "Slow-steeped cold brew topped with vanilla cream foam.", price: "$5.75", categorySlug: "coffee", image: image("photo-1461023058943-07fcbe16d735", "&crop=entropy"), imageAlt: "Iced cold brew with cream topping", dietaryLabels: [], featured: true, available: true },
  { _id: "m4", name: "Horchata Cold Brew", slug: "horchata-cold-brew", shortDescription: "Cold brew, cinnamon rice milk, and raw sugar.", price: "$6.25", categorySlug: "coffee", image: image("photo-1517701604599-bb29b565090c", "&crop=entropy"), imageAlt: "Cold brew on a café table", dietaryLabels: ["Dairy-free"], available: true },
  { _id: "m5", name: "Single Origin Pour Over", slug: "single-origin-pour-over", shortDescription: "Seasonal rotating origin with tasting notes at the bar.", price: "$5.25", categorySlug: "coffee", image: image("photo-1509042239860-f550ce710b93", "&crop=entropy"), imageAlt: "Pour over coffee being prepared", dietaryLabels: ["Vegan option"], available: true },
  { _id: "m6", name: "Strawberry Matcha", slug: "strawberry-matcha", shortDescription: "Ceremonial matcha layered over house strawberry milk.", price: "$6.50", categorySlug: "tea-matcha", image: image("photo-1495474472287-4d71bcdd2085", "&crop=center"), imageAlt: "Iced matcha drink", dietaryLabels: ["Dairy-free"], featured: true, available: true },
  { _id: "m7", name: "Chamomile Citrus Tea", slug: "chamomile-citrus-tea", shortDescription: "A mellow floral blend with orange peel and honey.", price: "$4.50", categorySlug: "tea-matcha", image: image("photo-1512568400610-62da28bc8a13", "&crop=entropy"), imageAlt: "Tea cup near a pastry", dietaryLabels: ["Gluten-free"], available: true },
  { _id: "m8", name: "Orange Cream Cold Brew", slug: "orange-cream-cold-brew", shortDescription: "Smooth cold brew layered with orange-vanilla cream and cinnamon.", price: "$6.75", categorySlug: "seasonal-drinks", image: image("photo-1517701604599-bb29b565090c", "&crop=faces"), imageAlt: "Orange cream cold brew in a glass", dietaryLabels: [], seasonal: true, featured: true, available: true },
  { _id: "m9", name: "Lavender Vanilla Latte", slug: "lavender-vanilla-latte", shortDescription: "Light floral syrup folded into a classic vanilla latte.", price: "$6.25", categorySlug: "seasonal-drinks", image: image("photo-1509042239860-f550ce710b93", "&crop=center"), imageAlt: "Lavender latte on a wooden table", dietaryLabels: ["Gluten-free"], seasonal: true, available: true },
  { _id: "m10", name: "Coconut Lime Refresher", slug: "coconut-lime-refresher", shortDescription: "Sparkling coconut water, lime, and mint over ice.", price: "$5.50", categorySlug: "cold-drinks", image: image("photo-1513558161293-cdaf765ed2fd", "&crop=entropy"), imageAlt: "Sparkling iced drink with lime", dietaryLabels: ["Vegan option", "Gluten-free"], available: true },
  { _id: "m11", name: "House Lemonade", slug: "house-lemonade", shortDescription: "Fresh lemon juice, filtered water, and a touch of cane sugar.", price: "$4.25", categorySlug: "cold-drinks", image: image("photo-1461023058943-07fcbe16d735", "&crop=faces"), imageAlt: "Iced lemonade on a table", dietaryLabels: ["Vegan option"], available: true },
  { _id: "m12", name: "Rosemary Ham Breakfast Croissant", slug: "rosemary-ham-breakfast-croissant", shortDescription: "Soft scrambled egg, rosemary ham, cheddar, and herb aioli.", price: "$9.75", categorySlug: "breakfast", image: image("photo-1484723091739-30a097e8f929", "&crop=entropy"), imageAlt: "Breakfast croissant sandwich", dietaryLabels: ["Contains nuts"], available: true },
  { _id: "m13", name: "Avocado & Chili Toast", slug: "avocado-chili-toast", shortDescription: "Smashed avocado, citrus salt, chili crisp, and herbs.", price: "$8.50", categorySlug: "breakfast", image: image("photo-1482049016688-2d3e1b311543", "&crop=entropy"), imageAlt: "Avocado toast on a plate", dietaryLabels: ["Vegan option"], available: true },
  { _id: "m14", name: "Breakfast Burrito", slug: "breakfast-burrito", shortDescription: "Eggs, roasted potatoes, cheddar, salsa verde, and sausage or veggie.", price: "$10.25", categorySlug: "breakfast", image: image("photo-1482049016688-2d3e1b311543", "&crop=center"), imageAlt: "Breakfast burrito cut in half", dietaryLabels: ["Dairy-free option"], available: true },
  { _id: "m15", name: "Almond Orange Morning Bun", slug: "almond-orange-morning-bun", shortDescription: "Laminated pastry with citrus sugar and toasted almond.", price: "$4.95", categorySlug: "pastries", image: image("photo-1509440159596-0249088772ff", "&crop=entropy"), imageAlt: "Morning bun pastry", dietaryLabels: ["Contains nuts"], available: true },
  { _id: "m16", name: "Brown Butter Chocolate Chip Cookie", slug: "brown-butter-chocolate-chip-cookie", shortDescription: "Salted brown butter dough with pools of dark chocolate.", price: "$3.95", categorySlug: "pastries", image: image("photo-1499636136210-6f4ee915583e", "&crop=entropy"), imageAlt: "Chocolate chip cookie", dietaryLabels: [], available: true },
  { _id: "m17", name: "Blueberry Cornmeal Muffin", slug: "blueberry-cornmeal-muffin", shortDescription: "A lightly sweet muffin finished with lemon sugar.", price: "$4.25", categorySlug: "pastries", image: image("photo-1464306076886-da185f6a9d05", "&crop=entropy"), imageAlt: "Blueberry muffin on a plate", dietaryLabels: [], available: true },
  { _id: "m18", name: "Flat White", slug: "flat-white", shortDescription: "Ristretto espresso and glossy milk with a velvety finish.", price: "$4.95", categorySlug: "espresso", image: image("photo-1442512595331-e89e73853f31", "&crop=entropy"), imageAlt: "Flat white coffee", dietaryLabels: ["Gluten-free"], available: true },
  { _id: "m19", name: "Cappuccino", slug: "cappuccino", shortDescription: "Balanced espresso with airy microfoam and cocoa dust.", price: "$4.75", categorySlug: "espresso", image: image("photo-1459755486867-b55449bb39ff", "&crop=entropy"), imageAlt: "Cappuccino on a saucer", dietaryLabels: ["Gluten-free"], available: true },
  { _id: "m20", name: "Batch Brew", slug: "batch-brew", shortDescription: "Our daily roast with notes of caramel, citrus, and cocoa.", price: "$3.50", categorySlug: "coffee", image: image("photo-1447933601403-0c6688de566e", "&crop=entropy"), imageAlt: "Freshly brewed coffee", dietaryLabels: ["Vegan option"], available: true },
  { _id: "m21", name: "Cardamom Maple Latte", slug: "cardamom-maple-latte", shortDescription: "Steamed milk, cardamom bitters, and a touch of maple.", price: "$6.25", categorySlug: "seasonal-drinks", image: image("photo-1511920170033-f8396924c348", "&crop=faces"), imageAlt: "Maple latte", dietaryLabels: [], seasonal: true, available: true },
  { _id: "m22", name: "Iced Americano", slug: "iced-americano", shortDescription: "Double espresso over ice with filtered water.", price: "$4.25", categorySlug: "cold-drinks", image: image("photo-1494314671902-399b18174975", "&crop=entropy"), imageAlt: "Iced americano", dietaryLabels: ["Vegan option"], available: true },
  { _id: "m23", name: "Turkey Pesto Breakfast Wrap", slug: "turkey-pesto-breakfast-wrap", shortDescription: "Turkey, egg, mozzarella, pesto, and arugula.", price: "$9.50", categorySlug: "breakfast", image: image("photo-1525351484163-7529414344d8", "&crop=entropy"), imageAlt: "Breakfast wrap", dietaryLabels: ["Contains nuts"], available: true },
  { _id: "m24", name: "Gluten-Free Banana Bread", slug: "gluten-free-banana-bread", shortDescription: "Toasted slice with whipped cinnamon butter.", price: "$4.75", categorySlug: "pastries", image: image("photo-1509440159596-0249088772ff", "&crop=center"), imageAlt: "Banana bread slice", dietaryLabels: ["Gluten-free", "Contains nuts"], available: true },
  { _id: "m25", name: "Sparkling Yuzu Tonic", slug: "sparkling-yuzu-tonic", shortDescription: "Citrus tonic with yuzu, ice, and rosemary.", price: "$5.25", categorySlug: "cold-drinks", image: image("photo-1513558161293-cdaf765ed2fd", "&crop=center"), imageAlt: "Sparkling tonic drink", dietaryLabels: ["Vegan option"], available: true },
  { _id: "m26", name: "Vanilla Bean Matcha", slug: "vanilla-bean-matcha", shortDescription: "Matcha with vanilla bean syrup and your choice of milk.", price: "$5.95", categorySlug: "tea-matcha", image: image("photo-1495474472287-4d71bcdd2085", "&crop=entropy"), imageAlt: "Vanilla matcha drink", dietaryLabels: ["Dairy-free option"], available: true },
  { _id: "m27", name: "Everything Biscuit Sandwich", slug: "everything-biscuit-sandwich", shortDescription: "Egg, cheddar, and chili jam on a flaky biscuit.", price: "$8.95", categorySlug: "breakfast", image: image("photo-1525351484163-7529414344d8", "&crop=center"), imageAlt: "Breakfast sandwich on biscuit", dietaryLabels: [], available: true },
  { _id: "m28", name: "Iced Hibiscus Tea", slug: "iced-hibiscus-tea", shortDescription: "Bright, berry-forward herbal tea with orange peel.", price: "$4.75", categorySlug: "cold-drinks", image: image("photo-1494314671902-399b18174975", "&crop=center"), imageAlt: "Iced hibiscus tea", dietaryLabels: ["Vegan option", "Gluten-free"], available: true },
];

export const demoSeasonalDrink: SeasonalDrink = {
  _id: "seasonal-1",
  name: "Orange Cream Cold Brew",
  description:
    "Smooth cold brew layered with orange-vanilla cream and finished with a hint of cinnamon. Bright at first sip, mellow on the finish.",
  price: "$6.75",
  heroImage: image("photo-1517701604599-bb29b565090c", "&crop=entropy"),
  imageAlt: "Orange cream cold brew with whipped citrus foam",
  ingredients: ["House cold brew", "Orange cream", "Vanilla", "Cinnamon"],
  customizationNote: "Available with oat cream on request.",
  buttonLabel: "View seasonal drinks",
};

export const demoEvents: Event[] = [
  { _id: "e1", title: "Friday Night Latte Flights", slug: "friday-night-latte-flights", summary: "Three mini seasonal lattes, pastry pairing, and relaxed patio seating.", description: ["Ease into the weekend with a tasting board of mini lattes inspired by the current menu.", "Each flight includes a paired pastry bite and a quick walkthrough from the bar team."], image: image("photo-1521017432531-fbd92d768814", "&crop=entropy"), imageAlt: "Friends drinking coffee together", startsAt: "2026-07-17T18:00:00-07:00", endsAt: "2026-07-17T20:00:00-07:00", locationName: "Mesa & Main Patio", address: "1824 19th Street, Bakersfield, CA", price: "$18", registrationLabel: "Reserve a spot", registrationUrl: "#", status: "upcoming", featured: true, capacity: 30 },
  { _id: "e2", title: "Local Makers Pop-Up", slug: "local-makers-pop-up", summary: "Ceramics, prints, candles, and rotating local vendors.", description: ["A Saturday market spotlighting Bakersfield makers with live music and all-day cafe specials."], image: image("photo-1517248135467-4c7edcad34c4", "&crop=entropy"), imageAlt: "Pop-up market atmosphere", startsAt: "2026-07-25T10:00:00-07:00", endsAt: "2026-07-25T14:00:00-07:00", locationName: "Inside the Cafe", address: "1824 19th Street, Bakersfield, CA", price: "Free", registrationLabel: "View details", registrationUrl: "#", status: "upcoming", capacity: 80 },
  { _id: "e3", title: "Summer Coffee Tasting", slug: "summer-coffee-tasting", summary: "Guided tasting of three bright summer coffees and one flash-chilled brew.", description: ["A tasting built for curious regulars and first-time coffee nerds alike.", "We'll cover roast profile, brew method, and how each coffee changes as it cools."], image: image("photo-1495474472287-4d71bcdd2085", "&crop=entropy"), imageAlt: "Coffee tasting setup", startsAt: "2026-08-06T18:30:00-07:00", endsAt: "2026-08-06T20:00:00-07:00", locationName: "Brew Bar", address: "1824 19th Street, Bakersfield, CA", price: "$24", registrationLabel: "Book tasting", registrationUrl: "#", status: "upcoming", featured: true, capacity: 24 },
  { _id: "e4", title: "Open Mic Night", slug: "open-mic-night", summary: "Low-key music, poetry, and first-come signups.", description: ["Bring a song, a poem, or a story. We keep the room warm, relaxed, and welcoming."], image: image("photo-1517457373958-b7bdd4587205", "&crop=entropy"), imageAlt: "Small live music performance", startsAt: "2026-08-13T18:00:00-07:00", endsAt: "2026-08-13T21:00:00-07:00", locationName: "Community Table", address: "1824 19th Street, Bakersfield, CA", price: "Free", registrationLabel: "See schedule", registrationUrl: "#", status: "upcoming", capacity: 50 },
  { _id: "e5", title: "Morning Run Club", slug: "morning-run-club", summary: "A casual 3-mile loop followed by drink specials for participants.", description: ["Meet at the shop at 6:00 AM, head out for a conversational pace loop, and return for coffee and breakfast discounts."], image: image("photo-1481833761820-0509d3217039", "&crop=entropy"), imageAlt: "Morning group walk or run", startsAt: "2026-08-20T06:00:00-07:00", endsAt: "2026-08-20T07:15:00-07:00", locationName: "Front Patio", address: "1824 19th Street, Bakersfield, CA", price: "Free", registrationLabel: "Join the run", registrationUrl: "#", status: "upcoming", capacity: 40 },
  { _id: "e6", title: "Study Night", slug: "study-night", summary: "Extended hours, quiet playlists, and late-night refills.", description: ["Ideal for finals week, project deadlines, or anyone who wants a calmer evening workspace."], image: image("photo-1495474472287-4d71bcdd2085", "&crop=center"), imageAlt: "Students studying in coffee shop", startsAt: "2026-09-03T18:00:00-07:00", endsAt: "2026-09-03T22:00:00-07:00", locationName: "Main Dining Room", address: "1824 19th Street, Bakersfield, CA", price: "Free", registrationLabel: "Save the date", registrationUrl: "#", status: "upcoming", capacity: 60 },
  { _id: "e7", title: "Matcha Workshop", slug: "matcha-workshop", summary: "Whisking basics, tasting notes, and build-your-own matcha.", description: ["A hands-on workshop covering ceremonial matcha preparation and easy at-home routines."], image: image("photo-1515823064-d6e0c04616a7", "&crop=entropy"), imageAlt: "Matcha tools and tea setup", startsAt: "2026-09-10T17:30:00-07:00", endsAt: "2026-09-10T19:00:00-07:00", locationName: "Side Bar", address: "1824 19th Street, Bakersfield, CA", price: "$28", registrationLabel: "Register", registrationUrl: "#", status: "upcoming", capacity: 18 },
  { _id: "e8", title: "Spring Bloom Market", slug: "spring-bloom-market", summary: "Archived community market with florals, ceramics, and live acoustic sets.", description: ["A past event kept live in the archive to show community momentum."], image: image("photo-1517248135467-4c7edcad34c4", "&crop=center"), imageAlt: "Archived market scene", startsAt: "2026-04-12T10:00:00-07:00", endsAt: "2026-04-12T14:00:00-07:00", locationName: "Cafe + Patio", address: "1824 19th Street, Bakersfield, CA", price: "Free", registrationLabel: "View recap", registrationUrl: "#", status: "completed" },
  { _id: "e9", title: "Golden Hour Espresso Class", slug: "golden-hour-espresso-class", summary: "Archived espresso basics class for beginners.", description: ["A sold-out class on dialing in espresso and steaming milk."], image: image("photo-1509042239860-f550ce710b93", "&crop=entropy"), imageAlt: "Barista preparing espresso", startsAt: "2026-05-28T18:30:00-07:00", endsAt: "2026-05-28T20:00:00-07:00", locationName: "Espresso Bar", address: "1824 19th Street, Bakersfield, CA", price: "$30", registrationLabel: "Join the waitlist", registrationUrl: "#", status: "completed" },
  { _id: "e10", title: "Poetry & Pour Overs", slug: "poetry-and-pour-overs", summary: "Archived reading night with rotating readers and custom coffee flights.", description: ["A softer evening event focused on local voices and slower coffee service."], image: image("photo-1517457373958-b7bdd4587205", "&crop=center"), imageAlt: "Poetry reading scene", startsAt: "2026-06-11T19:00:00-07:00", endsAt: "2026-06-11T21:00:00-07:00", locationName: "Community Table", address: "1824 19th Street, Bakersfield, CA", price: "Free", registrationLabel: "See gallery", registrationUrl: "#", status: "completed" },
];

export const demoGalleryImages: GalleryImage[] = [
  { _id: "g1", image: image("photo-1517701604599-bb29b565090c", "&crop=entropy"), imageAlt: "Seasonal iced coffee", caption: "Seasonal drinks that feel editorial, not generic.", category: "Drinks", tall: true, featured: true },
  { _id: "g2", image: image("photo-1484723091739-30a097e8f929", "&crop=entropy"), imageAlt: "Breakfast spread", caption: "Breakfast and pastry photography that sells the full visit, not just the coffee.", category: "Food" },
  { _id: "g3", image: image("photo-1521017432531-fbd92d768814", "&crop=entropy"), imageAlt: "Friends at a cafe table", caption: "Conversation-first spaces are part of the brand story.", category: "Community", tall: true },
  { _id: "g4", image: image("photo-1447933601403-0c6688de566e", "&crop=entropy"), imageAlt: "Barista pouring coffee", caption: "Craft and preparation details add credibility.", category: "Drinks" },
  { _id: "g5", image: image("photo-1517248135467-4c7edcad34c4", "&crop=entropy"), imageAlt: "Coffee shop interior", caption: "Warm lighting and layered textures keep the site grounded.", category: "Our Space" },
  { _id: "g6", image: image("photo-1515823064-d6e0c04616a7", "&crop=entropy"), imageAlt: "Matcha workshop tools", caption: "Event and workshop imagery gives the business a living rhythm.", category: "Events" },
  { _id: "g7", image: image("photo-1499636136210-6f4ee915583e", "&crop=entropy"), imageAlt: "Fresh pastry detail", caption: "Close crops help the site feel custom and tactile.", category: "Food" },
  { _id: "g8", image: image("photo-1511920170033-f8396924c348", "&crop=entropy"), imageAlt: "Coffee mug by window", caption: "Quiet moments make the brand feel lived-in.", category: "Our Space", tall: true },
];

export const demoTestimonial: Testimonial = {
  _id: "t1",
  quote:
    "It feels like the kind of place Bakersfield has been waiting for: thoughtful drinks, good light, and enough room to actually stay a while.",
  customerName: "Elena R.",
  source: "Google review",
};

export const demoPages: Record<PageContent["slug"], PageContent> = {
  home: {
    slug: "home",
    eyebrow: "Your neighborhood coffee stop",
    title: "Good coffee. Better mornings.",
    intro:
      "Handcrafted drinks, fresh pastries, and a welcoming place to settle in, right here in Bakersfield.",
    body: [
      "Mesa & Main is a neighborhood coffee shop built for unhurried mornings, afternoon catch-ups, and the days when you need a familiar place to land.",
      "We serve thoughtfully made coffee, seasonal drinks, fresh pastries, and plenty of good energy.",
    ],
  },
  about: {
    slug: "about",
    eyebrow: "About Mesa & Main",
    title: "Rooted in Bakersfield, built for slower mornings.",
    intro:
      "Mesa & Main began with a simple idea: Bakersfield deserved more spaces where people could slow down, meet a friend, and enjoy something made with care.",
    body: [
      "What started as a conversation about neighborhood rituals turned into a cafe designed around warmth, consistency, and hospitality.",
      "We source coffees with a preference for balanced, approachable profiles and work with local bakers and makers whenever possible.",
      "Our events calendar is intentionally community-minded, from run club mornings to pop-ups that give local creators a place to be seen.",
    ],
  },
  visit: {
    slug: "visit",
    eyebrow: "Plan your visit",
    title: "Your table is waiting.",
    intro:
      "Grab a drink, bring your laptop, meet a friend, or simply take the morning a little slower.",
    body: [
      "Mesa & Main is set up for easy everyday visits, with downtown access, reliable Wi-Fi, and seating that works for both quick stops and longer stays.",
      "Whether you are headed in before work or dropping by after a Saturday market, the cafe is designed to feel welcoming from the first minute.",
    ],
  },
  catering: {
    slug: "catering",
    eyebrow: "Catering & private events",
    title: "Coffee service that makes workdays and gatherings feel considered.",
    intro:
      "From pastry trays to office coffee travelers and intimate evening tastings, Mesa & Main can help shape the right setup.",
    body: [
      "This page demonstrates how the same site can support real lead generation for coffee shops that cater meetings, private events, and neighborhood gatherings.",
      "The inquiry form below is intentionally simple so a business owner can manage requests without learning a complex ordering system.",
    ],
  },
};
