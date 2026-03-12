import shirtTapaButtondown from '../assets/images/products/shirt-tapa-buttondown.png';
import shirtIslandWarrior from '../assets/images/products/shirt-island-warrior.png';
import shirtSunsetPolo from '../assets/images/products/shirt-sunset-polo.png';
import shirtSiapo from '../assets/images/products/shirt-siapo.png';
import shirtPacificWave from '../assets/images/products/shirt-pacific-wave.png';
import jacketBomber from '../assets/images/products/jacket-bomber.png';
import jacketWindbreaker from '../assets/images/products/jacket-windbreaker.png';
import jacketDenimTribal from '../assets/images/products/jacket-denim-tribal.png';
import jacketVarsity from '../assets/images/products/jacket-varsity.png';
import jacketCoach from '../assets/images/products/jacket-coach.png';
import hoodieHeritage from '../assets/images/products/hoodie-heritage.png';
import hoodieZipup from '../assets/images/products/hoodie-zipup.png';
import hoodieOversized from '../assets/images/products/hoodie-oversized.png';
import hoodieTapaPattern from '../assets/images/products/hoodie-tapa-pattern.png';
import hoodieHeavyweight from '../assets/images/products/hoodie-heavyweight.png';

const products = [
  // ── Shirts ──
  {
    id: 'shirt-001',
    name: 'Tapa Print Button-Down',
    category: 'shirts',
    price: 65.00,
    originalPrice: null,
    description: 'A refined button-down featuring an authentic tapa cloth print in warm earth tones. Hand-drawn Polynesian patterns on premium cotton — perfect for both casual and dressy occasions.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Terracotta', 'Cream'],
    image: shirtTapaButtondown,
    badge: 'Best Seller',
    inStock: true,
  },
  {
    id: 'shirt-002',
    name: 'Island Warrior Tee',
    category: 'shirts',
    price: 45.00,
    originalPrice: null,
    description: 'Bold tribal warrior motifs on a soft cotton tee. Inspired by the strength and courage of Samoan warriors. A statement piece that celebrates your roots.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Charcoal', 'Black'],
    image: shirtIslandWarrior,
    badge: null,
    inStock: true,
  },
  {
    id: 'shirt-003',
    name: 'Samoan Sunset Polo',
    category: 'shirts',
    price: 55.00,
    originalPrice: null,
    description: 'A premium polo in warm sunset coral with subtle Samoan motif embroidery on the chest. Breathable piqué fabric for island comfort with a modern edge.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Sunset Coral', 'Ocean Blue'],
    image: shirtSunsetPolo,
    badge: null,
    inStock: true,
  },
  {
    id: 'shirt-004',
    name: 'Traditional Siapo Shirt',
    category: 'shirts',
    price: 70.00,
    originalPrice: null,
    description: 'Directly inspired by traditional siapo bark cloth art. Each geometric pattern tells a story of Samoan heritage. Made from breathable linen for all-day comfort.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Brown/Cream', 'Black/Gold'],
    image: shirtSiapo,
    badge: 'New Drop',
    inStock: true,
  },
  {
    id: 'shirt-005',
    name: 'Pacific Wave Linen Shirt',
    category: 'shirts',
    price: 60.00,
    originalPrice: null,
    description: 'Relaxed-fit linen with ocean wave patterns blended with Polynesian motifs. The teal and white colorway brings the Pacific Ocean to your wardrobe.',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Teal/White', 'Navy/Cream'],
    image: shirtPacificWave,
    badge: null,
    inStock: true,
  },

  // ── Jackets ──
  {
    id: 'jacket-001',
    name: 'Polynesian Bomber Jacket',
    category: 'jackets',
    price: 120.00,
    originalPrice: null,
    description: 'A premium bomber in deep terracotta with hand-embroidered Polynesian tribal art on the chest and back. Satin lining, ribbed cuffs — a culture piece you can wear daily.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Terracotta', 'Black'],
    image: jacketBomber,
    badge: 'Best Seller',
    inStock: true,
  },
  {
    id: 'jacket-002',
    name: 'Island Breeze Windbreaker',
    category: 'jackets',
    price: 95.00,
    originalPrice: null,
    description: 'Lightweight and water-resistant with Polynesian wave patterns along the sleeves. Packable hood, zip pockets — engineered for island weather and city life.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Cream/Teal', 'Black/Gold'],
    image: jacketWindbreaker,
    badge: null,
    inStock: true,
  },
  {
    id: 'jacket-003',
    name: 'Tribal Denim Jacket',
    category: 'jackets',
    price: 110.00,
    originalPrice: null,
    description: 'Classic indigo denim meets Polynesian artistry. The back panel features a large tribal pattern in terracotta and gold — a statement jacket that bridges two worlds.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Indigo', 'Black Wash'],
    image: jacketDenimTribal,
    badge: 'New Drop',
    inStock: true,
  },
  {
    id: 'jacket-004',
    name: 'Tapa Varsity Jacket',
    category: 'jackets',
    price: 130.00,
    originalPrice: null,
    description: 'A premium varsity jacket with dark brown wool body and cream leather sleeves. Polynesian tapa cloth patches add cultural heritage to this American classic silhouette.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Brown/Cream'],
    image: jacketVarsity,
    badge: 'Limited Edition',
    inStock: true,
  },
  {
    id: 'jacket-005',
    name: 'Pacific Heritage Coach Jacket',
    category: 'jackets',
    price: 105.00,
    originalPrice: null,
    description: 'A clean-lined coach jacket in forest green with gold heritage pattern screen-printed on the back. Snap-button front, lightweight nylon — everyday Pacific Islander style.',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Forest Green', 'Navy'],
    image: jacketCoach,
    badge: null,
    inStock: true,
  },

  // ── Hoodies ──
  {
    id: 'hoodie-001',
    name: 'Heritage Pullover Hoodie',
    category: 'hoodies',
    price: 85.00,
    originalPrice: null,
    description: 'A heavyweight pullover in warm terracotta with an embroidered tapa motif on the chest. Fleece-lined, kangaroo pocket — cozy enough for chilly island mornings.',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Terracotta', 'Cream'],
    image: hoodieHeritage,
    badge: 'Best Seller',
    inStock: true,
  },
  {
    id: 'hoodie-002',
    name: 'Samoan Pride Zip-Up',
    category: 'hoodies',
    price: 90.00,
    originalPrice: null,
    description: 'Full-zip hoodie in charcoal gray with Samoan tribal patterns running down the sleeves and across the hood. YKK zipper, split kangaroo pockets — built to last.',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Charcoal/Gold', 'Black/White'],
    image: hoodieZipup,
    badge: null,
    inStock: true,
  },
  {
    id: 'hoodie-003',
    name: 'Island Roots Oversized Hoodie',
    category: 'hoodies',
    price: 80.00,
    originalPrice: null,
    description: 'Relaxed, oversized fit in cream with a large Polynesian island roots artwork on the front. Drop shoulders, ribbed cuffs — streetwear meets island culture.',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    colors: ['Cream/Brown', 'Black/Teal'],
    image: hoodieOversized,
    badge: 'New Drop',
    inStock: true,
  },
  {
    id: 'hoodie-004',
    name: 'Tapa Pattern Hoodie',
    category: 'hoodies',
    price: 95.00,
    originalPrice: null,
    description: 'All-over tapa cloth print in rich earth tones. A walking art piece inspired by generations of Samoan bark cloth craftsmanship. Heavyweight 400gsm cotton.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Earth Tones'],
    image: hoodieTapaPattern,
    badge: 'Limited Edition',
    inStock: true,
  },
  {
    id: 'hoodie-005',
    name: 'Pacific Culture Heavyweight',
    category: 'hoodies',
    price: 100.00,
    originalPrice: null,
    description: 'Premium heavyweight hoodie in deep navy with a gold-thread embroidered Polynesian cultural motif. Thick ribbed cuffs and waistband. Built for the cold, worn with pride.',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Navy/Gold', 'Black/Silver'],
    image: hoodieHeavyweight,
    badge: null,
    inStock: true,
  },
];

export default products;

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'shirts', label: 'Shirts' },
  { id: 'jackets', label: 'Jackets' },
  { id: 'hoodies', label: 'Hoodies' },
];

export const getFeaturedProducts = () =>
  products.filter((p) => p.badge === 'Best Seller' || p.badge === 'New Drop').slice(0, 4);

export const getProductsByCategory = (category) =>
  category === 'all' ? products : products.filter((p) => p.category === category);
