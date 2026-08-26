import iphone17Img from '../assets/iPhone 17.webp';
import iphone17_256Img from '../assets/Iphone 17 256_nobg.webp';
import iphone16Img from '../assets/Iphone 16_nobg.webp';
import iphone16SlimImg from '../assets/Iphone 16 slim_nobg.webp';
import iphone15ProMaxImg from '../assets/Iphone 15 pro max_nobg.webp';
import iphoneSeImg from '../assets/iphone se x.webp';
import ipadProImg from '../assets/Ipad.webp';
import ipadAirImg from '../assets/Ipad air m2.webp';
import ipadMiniImg from '../assets/Ipad mini 7_nobg.webp';
import ipad10Img from '../assets/ipad 10_nobg.webp';
import appleWatch10Img from '../assets/Apple watch serie 10_nobg.webp';
import appleWatchSeImg from '../assets/apple watch se 3_nobg.webp';
import appleWatchSerie3Img from '../assets/apple watch serie 3_nobg.webp';

export const categories = [
  { id: 'todos', name: 'Todos los Productos', icon: 'Sparkles', count: 12 },
  { id: 'celulares', name: 'Celulares', icon: 'Smartphone', count: 5 },
  { id: 'tablets', name: 'Tablets', icon: 'Tablet', count: 4 },
  { id: 'relojes', name: 'Relojes Inteligentes', icon: 'Watch', count: 3 }
];

export const services = [
  {
    id: 'trade-in',
    title: 'iStudio CR Trade In',
    subtitle: 'Entrega tu equipo actual. Ahorra en el nuevo.',
    description: 'Obtén de $200 a $800 de crédito inmediato entregando tu smartphone o tablet actual. Un proceso rápido, seguro y ecológico.',
    icon: 'Repeat',
    badge: 'Ahorro Inmediato',
    linkText: 'Calcular el valor de tu equipo'
  },
  {
    id: 'aura-care',
    title: 'iStudio CR Care+',
    subtitle: 'Protección integral y soporte de expertos 24/7.',
    description: 'Cubre reparación ilimitada por daños accidentales, reemplazo express de batería y acceso directo prioritario a nuestros ingenieros.',
    icon: 'ShieldCheck',
    badge: 'Garantía Extendida',
    linkText: 'Conocer coberturas'
  },
  {
    id: 'financing',
    title: 'Financiamiento 0% Tasa',
    subtitle: 'Paga a tu ritmo en hasta 24 cuotas sin interés.',
    description: 'Disfruta de la máxima tecnología hoy pagando cuotas fijas mensuales con tarjetas de crédito participantes sin cargos ocultos.',
    icon: 'CreditCard',
    badge: 'Flexibilidad',
    linkText: 'Ver bancos participantes'
  },
  {
    id: 'express-delivery',
    title: 'Envío Express Gratuito',
    subtitle: 'Entrega prioritaria sin costo a toda la región.',
    description: 'Recibe tu producto al día siguiente en empaque sellado ecológico y con seguimiento satelital en tiempo real.',
    icon: 'Truck',
    badge: 'Envío VIP',
    linkText: 'Consultar tiempos de entrega'
  }
];

export const aboutStats = [
  { label: 'Titanio Grado 5', value: '100%', description: 'Aleación aeroespacial de alta resistencia y peso ultraligero.' },
  { label: 'Neural Engine 3nm', value: '38 TOPS', description: 'Potencia de cálculo de Inteligencia Artificial de vanguardia.' },
  { label: 'Eficiencia Energética', value: '33 horas', description: 'Autonomía de batería sin precedentes en un dispositivo flagship.' },
  { label: 'Huella de Carbono', value: 'Net Zero', description: 'Materiales 100% reciclados y energía renovable en fabricación.' }
];

export const products = [
  {
    id: 'iphone-17',
    name: 'iPhone 17 Pro',
    category: 'celulares',
    price: 1399,
    originalPrice: 1499,
    isNew: true,
    isPopular: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 342,
    tagline: 'Titanio Grado 5. Chip A18 Pro.',
    description: 'Diseñado con una estructura de titanio aeroespacial y vidrio cerámico esmerilado. Incorpora el revolucionario chip A18 Pro.',
    images: {
      hero: iphone17_256Img,
      webp: iphone17_256Img,
      fallback: iphone17_256Img,
      gallery: [iphone17_256Img, iphone17Img]
    },
    colors: [
      { name: 'Naranja Titanio', hex: '#d97706', code: 'orange' },
      { name: 'Titanio Natural', hex: '#b3b0a7', code: 'natural' }
    ],
    storageOptions: ['256 GB', '512 GB', '1 TB'],
    specs: [
      { label: 'Procesador', value: 'Apple A18 Pro (3nm)' },
      { label: 'Pantalla', value: '6.9" Super Retina XDR 120Hz' },
      { label: 'Cámara Principal', value: '48 MP Fusion + Telefoto 5x' }
    ]
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    category: 'celulares',
    price: 1199,
    originalPrice: null,
    isNew: true,
    isPopular: false,
    inStock: true,
    rating: 4.8,
    reviewsCount: 198,
    tagline: 'Superpotencia compacta de titanio.',
    description: 'El equilibrio perfecto entre ergonomía y máxima potencia con cámara periscópica.',
    images: {
      hero: iphone16Img,
      webp: iphone16Img,
      fallback: iphone16Img,
      gallery: [iphone16Img]
    },
    colors: [
      { name: 'Titanio Natural', hex: '#b3b0a7', code: 'natural' },
      { name: 'Titanio Negro', hex: '#1e293b', code: 'black' }
    ],
    storageOptions: ['128 GB', '256 GB', '512 GB'],
    specs: [
      { label: 'Procesador', value: 'Apple A18 Pro' },
      { label: 'Pantalla', value: '6.3" Super Retina XDR OLED' }
    ]
  },
  {
    id: 'iphone-16-slim',
    name: 'iPhone 16 Slim',
    category: 'celulares',
    price: 899,
    originalPrice: 999,
    isNew: true,
    isPopular: true,
    inStock: true,
    rating: 4.7,
    reviewsCount: 156,
    tagline: 'Diseño ultradelgado y ligero.',
    description: 'Una silueta estilizada de solo 6.1 mm de grosor con pantalla OLED vibrante.',
    images: {
      hero: iphone16SlimImg,
      webp: iphone16SlimImg,
      fallback: iphone16SlimImg,
      gallery: [iphone16SlimImg]
    },
    colors: [
      { name: 'Verde Menta', hex: '#10b981', code: 'mint' }
    ],
    storageOptions: ['128 GB', '256 GB'],
    specs: [
      { label: 'Procesador', value: 'Apple A18 Bionic' },
      { label: 'Grosor', value: '6.1 mm' }
    ]
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    category: 'celulares',
    price: 1049,
    originalPrice: 1199,
    isNew: false,
    isPopular: false,
    inStock: true,
    rating: 4.8,
    reviewsCount: 489,
    tagline: 'Titanio con GPU de 6 núcleos.',
    description: 'Rendimiento gráfico extraordinario impulsado por el chip A17 Pro y cámara con zoom 5x.',
    images: {
      hero: iphone15ProMaxImg,
      webp: iphone15ProMaxImg,
      fallback: iphone15ProMaxImg,
      gallery: [iphone15ProMaxImg]
    },
    colors: [
      { name: 'Titanio Oscuro', hex: '#1f2937', code: 'dark' }
    ],
    storageOptions: ['256 GB', '512 GB'],
    specs: [
      { label: 'Procesador', value: 'Apple A17 Pro' },
      { label: 'Pantalla', value: '6.7" Super Retina XDR' }
    ]
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE',
    category: 'celulares',
    price: 549,
    originalPrice: 599,
    isNew: true,
    isPopular: false,
    inStock: true,
    rating: 4.6,
    reviewsCount: 84,
    tagline: 'Compacto y superpotente.',
    description: 'La puerta de entrada ideal al ecosistema de alta gama con chip A17 Bionic.',
    images: {
      hero: iphoneSeImg,
      webp: iphoneSeImg,
      fallback: iphoneSeImg,
      gallery: [iphoneSeImg]
    },
    colors: [
      { name: 'Negro Azabache', hex: '#000000', code: 'black' }
    ],
    specs: [
      { label: 'Procesador', value: 'Apple A17 Bionic' }
    ]
  },

  // TABLETS
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro 13" M4',
    category: 'tablets',
    price: 1299,
    originalPrice: 1399,
    isNew: true,
    isPopular: true,
    inStock: true,
    rating: 4.95,
    reviewsCount: 275,
    tagline: 'Pantalla Tandem OLED. Chip M4. 5.1 mm.',
    description: 'La tablet definitiva con panel Tandem OLED de brillo pico de 1600 nits.',
    images: {
      hero: ipadProImg,
      webp: ipadProImg,
      fallback: ipadProImg,
      gallery: [ipadProImg]
    },
    colors: [
      { name: 'Negro Espacial', hex: '#1e2022', code: 'space-black' },
      { name: 'Plata Estelar', hex: '#e2e8f0', code: 'silver' }
    ],
    storageOptions: ['256 GB', '512 GB', '1 TB'],
    specs: [
      { label: 'Procesador', value: 'Apple M4' },
      { label: 'Pantalla', value: '13" Tandem OLED' }
    ]
  },
  {
    id: 'ipad-air-m2',
    name: 'iPad Air 11" M2',
    category: 'tablets',
    price: 699,
    originalPrice: null,
    isNew: true,
    isPopular: false,
    inStock: true,
    rating: 4.7,
    reviewsCount: 164,
    tagline: 'Potencia M2 en un diseño liviano.',
    description: 'Diseñada para creadores en movimiento con pantalla Liquid Retina.',
    images: {
      hero: ipadAirImg,
      webp: ipadAirImg,
      fallback: ipadAirImg,
      gallery: [ipadAirImg]
    },
    colors: [
      { name: 'Gris Espacial', hex: '#475569', code: 'space-gray' }
    ],
    storageOptions: ['128 GB', '256 GB'],
    specs: [
      { label: 'Procesador', value: 'Apple M2' }
    ]
  },
  {
    id: 'ipad-mini-7',
    name: 'iPad mini 7',
    category: 'tablets',
    price: 499,
    originalPrice: 549,
    isNew: false,
    isPopular: true,
    inStock: true,
    rating: 4.8,
    reviewsCount: 310,
    tagline: 'Mega potencia que cabe en una mano.',
    description: 'La tablet ultracompacta favorita con pantalla Liquid Retina de 8.3 pulgadas.',
    images: {
      hero: ipadMiniImg,
      webp: ipadMiniImg,
      fallback: ipadMiniImg,
      gallery: [ipadMiniImg]
    },
    colors: [
      { name: 'Gris Sombra', hex: '#334155', code: 'shadow' }
    ],
    storageOptions: ['128 GB', '256 GB'],
    specs: [
      { label: 'Procesador', value: 'Apple A17 Pro' }
    ]
  },
  {
    id: 'ipad-10',
    name: 'iPad 10ª Gen',
    category: 'tablets',
    price: 349,
    originalPrice: 449,
    isNew: false,
    isPopular: false,
    inStock: true,
    rating: 4.6,
    reviewsCount: 140,
    tagline: 'Versatilidad para el día a día.',
    description: 'Con diseño dinámico de borde a borde y colores vibrantes.',
    images: {
      hero: ipad10Img,
      webp: ipad10Img,
      fallback: ipad10Img,
      gallery: [ipad10Img]
    },
    colors: [
      { name: 'Azul Marino', hex: '#0284c7', code: 'blue' }
    ],
    storageOptions: ['64 GB', '256 GB'],
    specs: [
      { label: 'Procesador', value: 'Apple A14 Bionic' }
    ]
  },

  // RELOJES
  {
    id: 'apple-watch-ultra-3',
    name: 'Apple Watch Ultra 3',
    category: 'relojes',
    price: 799,
    originalPrice: 849,
    isNew: true,
    isPopular: true,
    inStock: true,
    rating: 4.95,
    reviewsCount: 420,
    tagline: 'Caja de titanio de 49mm.',
    description: 'El reloj multideporte de resistencia extrema con GPS de doble frecuencia.',
    images: {
      hero: appleWatchSerie3Img,
      webp: appleWatchSerie3Img,
      fallback: appleWatchSerie3Img,
      gallery: [appleWatchSerie3Img]
    },
    colors: [
      { name: 'Titanio Satinado', hex: '#94a3b8', code: 'titanium' }
    ],
    storageOptions: ['49 mm Cellular + GPS'],
    specs: [
      { label: 'Caja', value: 'Titanio Grado 5' }
    ]
  },
  {
    id: 'apple-watch-series-10',
    name: 'Apple Watch Series 10',
    category: 'relojes',
    price: 399,
    originalPrice: 429,
    isNew: true,
    isPopular: true,
    inStock: true,
    rating: 4.8,
    reviewsCount: 231,
    tagline: 'El diseño más delgado jamás creado.',
    description: 'Cristal de pantalla ultra angular OLED con ángulo de visión mejorado.',
    images: {
      hero: appleWatch10Img,
      webp: appleWatch10Img,
      fallback: appleWatch10Img,
      gallery: [appleWatch10Img]
    },
    colors: [
      { name: 'Negro Azabache', hex: '#09090b', code: 'jet-black' }
    ],
    storageOptions: ['42 mm', '46 mm'],
    specs: [
      { label: 'Caja', value: 'Aluminio anodizado' }
    ]
  },
  {
    id: 'apple-watch-se-3',
    name: 'Apple Watch SE 3',
    category: 'relojes',
    price: 249,
    originalPrice: 279,
    isNew: false,
    isPopular: false,
    inStock: true,
    rating: 4.7,
    reviewsCount: 190,
    tagline: 'Funciones esenciales de salud.',
    description: 'Diseño elegante con cristal Ion-X reforzado y sensores de actividad.',
    images: {
      hero: appleWatchSeImg,
      webp: appleWatchSeImg,
      fallback: appleWatchSeImg,
      gallery: [appleWatchSeImg]
    },
    colors: [
      { name: 'Medianoche', hex: '#1e293b', code: 'midnight' }
    ],
    storageOptions: ['40 mm', '44 mm'],
    specs: [
      { label: 'Procesador', value: 'Apple S9 SiP' }
    ]
  }
];
