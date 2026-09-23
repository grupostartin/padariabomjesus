import artisanBreadImg from '../assets/images/artisan_bread_selection_1790180435201.jpg';
import cakesPastryImg from '../assets/images/bakery_pastry_cakes_1790180446129.jpg';
import savorySnacksImg from '../assets/images/savory_snacks_minas_1790180459746.jpg';
import specialtyCoffeeImg from '../assets/images/specialty_coffee_barista_1790180470120.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'paes' | 'confeitaria' | 'salgados' | 'cafes';
  description: string;
  highlights?: string;
  image: string;
  estimatedPriceNote?: string;
}

export interface DaySchedule {
  day: string;
  shortDay: string;
  dayIndex: number; // 0: Sunday, 1: Monday, ... 6: Saturday
  openTime: string;
  closeTime: string;
  openHour: number;
  openMinute: number;
  closeHour: number;
  closeMinute: number;
}

export const BAKERY_INFO = {
  name: 'Padaria Bom Jesus',
  tagline: 'A tradição do pão artesanal no coração do Bom Jesus',
  shortAddress: 'Rua Paranaíba, 291 — Bairro Bom Jesus',
  cityState: 'Belo Horizonte / MG',
  cep: '31230-150',
  fullAddress: 'Rua Paranaíba, 291, Bairro Bom Jesus, Belo Horizonte - MG, 31230-150',
  phone: '(31) 1111-1111',
  phoneClean: '553111111111',
  whatsapp: '(31) 11111-1111',
  whatsappClean: '5531111111111',
  instagram: '@padariabomjesusbh',
  instagramUrl: 'https://instagram.com/padariabomjesusbh',
  email: 'contato@padariabomjesusbh.com.br',
  googleMapsLink: 'https://maps.google.com/?q=Rua+Paranaiba+291+Bom+Jesus+Belo+Horizonte+MG',
  wazeLink: 'https://waze.com/ul?q=Rua+Paranaiba+291+Bom+Jesus+Belo+Horizonte+MG',
};

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  { day: 'Segunda-feira', shortDay: 'Seg', dayIndex: 1, openTime: '06:00', closeTime: '20:30', openHour: 6, openMinute: 0, closeHour: 20, closeMinute: 30 },
  { day: 'Terça-feira', shortDay: 'Ter', dayIndex: 2, openTime: '06:00', closeTime: '20:30', openHour: 6, openMinute: 0, closeHour: 20, closeMinute: 30 },
  { day: 'Quarta-feira', shortDay: 'Qua', dayIndex: 3, openTime: '06:00', closeTime: '20:30', openHour: 6, openMinute: 0, closeHour: 20, closeMinute: 30 },
  { day: 'Quinta-feira', shortDay: 'Qui', dayIndex: 4, openTime: '06:00', closeTime: '20:30', openHour: 6, openMinute: 0, closeHour: 20, closeMinute: 30 },
  { day: 'Sexta-feira', shortDay: 'Sex', dayIndex: 5, openTime: '06:00', closeTime: '20:30', openHour: 6, openMinute: 0, closeHour: 20, closeMinute: 30 },
  { day: 'Sábado', shortDay: 'Sáb', dayIndex: 6, openTime: '06:00', closeTime: '20:00', openHour: 6, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { day: 'Domingo e Feriados', shortDay: 'Dom', dayIndex: 0, openTime: '06:30', closeTime: '13:30', openHour: 6, openMinute: 30, closeHour: 13, closeMinute: 30 },
];

export const FORNADAS_SCHEDULE = [
  { time: '06:30', title: 'Primeira Fornada da Manhã', detail: 'Pão francês estaladiço, pão de queijo quentinho e baguetes recém-saídas do forno.' },
  { time: '09:00', title: 'Fornada do Meio da Manhã', detail: 'Pães artesanais especiais, ciabattas rústicas e folhados.' },
  { time: '15:30', title: 'Café da Tarde Especial', detail: 'Bolos quentinhos caseiros, broas de milho com erva-doce e pão de queijo assado na hora.' },
  { time: '17:30', title: 'Fornada Volta para Casa', detail: 'Pão francês quentinho e salgados assados para o jantar e o café da noite da família.' },
];

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: 'pao-campanha',
    name: 'Pão de Campanha Artesanal',
    category: 'paes',
    description: 'Receita artesanal tradicional, casca dourada e crocante, miolo macio e aroma rústico inconfundível.',
    highlights: 'Artesanal Tradicional',
    image: artisanBreadImg,
    estimatedPriceNote: 'Produção diária limitada',
  },
  {
    id: 'pao-frances',
    name: 'Pão Francês Tradicional',
    category: 'paes',
    description: 'O clássico mineiro que não pode faltar: casquinha fina estalando a cada mordida e miolo incrivelmente macio e leve.',
    highlights: 'Fornadas Constantes',
    image: artisanBreadImg,
    estimatedPriceNote: 'Quentinho o dia todo',
  },
  {
    id: 'pao-de-queijo',
    name: 'Pão de Queijo Mineiro Artesanal',
    category: 'paes',
    description: 'Receita legítima de família mineira com queijo artesanal curado e polvilho doce de engenho.',
    highlights: 'Assado na Hora',
    image: artisanBreadImg,
    estimatedPriceNote: 'Assado na hora',
  },
  {
    id: 'ciabatta-alecrim',
    name: 'Ciabatta Rústica de Alecrim e Flor de Sal',
    category: 'paes',
    description: 'Alta hidratação, azeite extravirgem prensado a frio e alecrim fresco do canteiro. Perfeita para sanduíches gourmet.',
    highlights: 'Azeite Extravirgem',
    image: artisanBreadImg,
    estimatedPriceNote: 'Artesanal',
  },
  {
    id: 'bolo-cenoura',
    name: 'Bolo Caseiro de Cenoura com Brigadeiro',
    category: 'confeitaria',
    description: 'Massa aveludada e úmida de cenouras frescas, coberta com camada farta de brigadeiro cremoso de panela.',
    highlights: 'Brigadeiro Belga Quente',
    image: cakesPastryImg,
    estimatedPriceNote: 'Inteiro ou em fatias',
  },
  {
    id: 'torta-frutas-vermelhas',
    name: 'Torta Rústica de Frutas Vermelhas',
    category: 'confeitaria',
    description: 'Base de massa sablée amanteigada crocante, creme patissière aveludado e geleia artesanal de mirtilos, amoras e morangos.',
    highlights: 'Frutas Frescas Selecionadas',
    image: cakesPastryImg,
    estimatedPriceNote: 'Sob encomenda ou balcão',
  },
  {
    id: 'broa-milho',
    name: 'Broa de Milho Aerada com Erva-Doce',
    category: 'confeitaria',
    description: 'Tradicional receita do interior de Minas Gerais, fofinha por dentro com casquinha dourada salpicada de açúcar cristal.',
    highlights: 'Receita Centenária',
    image: cakesPastryImg,
    estimatedPriceNote: 'Ideal com café coado',
  },
  {
    id: 'sonho-doce-de-leite',
    name: 'Sonho Artesanal com Doce de Leite Viçosa',
    category: 'confeitaria',
    description: 'Massa leve frita na hora em gordura limpa, polvilhada com açúcar de confeiteiro e recheio generoso do melhor doce de leite de Minas.',
    highlights: 'Doce de Leite Premiado',
    image: cakesPastryImg,
    estimatedPriceNote: 'Fornadas às 15:30',
  },
  {
    id: 'coxinha-cremosa',
    name: 'Coxinha de Frango com Catupiry Legítimo',
    category: 'salgados',
    description: 'Frango caipira desfiado lentamente em caldo aromático, Catupiry original cremoso e casca dourada crocante com massa leve de mandioca.',
    highlights: 'Massa de Mandioca Leve',
    image: savorySnacksImg,
    estimatedPriceNote: 'Sempre frita na hora',
  },
  {
    id: 'quiche-alho-poro',
    name: 'Quiche Artesanal de Alho-Poró & Gorgonzola',
    category: 'salgados',
    description: 'Massa quebradiça clássica francesa que derrete no paladar, recheio aveludado de alho-poró salteado na manteiga e queijo mineiro.',
    highlights: 'Gratinada no Forno de Pedra',
    image: savorySnacksImg,
    estimatedPriceNote: 'Porção individual ou inteira',
  },
  {
    id: 'cafe-coado-minas',
    name: 'Café Coado Especial das Montanhas de Minas',
    category: 'cafes',
    description: 'Grãos 100% arábica de agricultura familiar do sul de Minas Gerais, moídos na hora e coados no filtro de pano tradicional na sua mesa.',
    highlights: 'Grão Arábica Especial',
    image: specialtyCoffeeImg,
    estimatedPriceNote: 'Coadinho na mesa',
  },
  {
    id: 'cappuccino-canela',
    name: 'Cappuccino Mineiro com Canela e Chocolate',
    category: 'cafes',
    description: 'Espresso encorpado, leite fresco vaporizado com microespuma densa, toque suave de chocolate meio amargo e canela em pau ralada.',
    highlights: 'Espresso Artesanal',
    image: specialtyCoffeeImg,
    estimatedPriceNote: 'Quente ou gelado',
  },
];

export const DIFFERENTIALS = [
  {
    title: 'Fornadas Constantes & Quentinhas',
    description: 'Nossa produção não para: do amanhecer ao final da tarde, temos fornadas constantes para você encontrar pão francês quentinho e estaladiço na sua mesa.',
    label: 'Ritmo & Frescor',
  },
  {
    title: 'Produção Artesanal Diária',
    description: 'Nossos mestres padeiros preparam pães e quitutes frescos todos os dias desde a madrugada, garantindo textura perfeita, sabor incomparável e respeito à tradição.',
    label: 'Cuidado & Qualidade',
  },
  {
    title: 'Ingredientes Puros & Produtores Mineiros',
    description: 'Queijos artesanais mineiros selecionados, farinhas de alta qualidade sem aditivos químicos, manteiga pura e café especial das montanhas de Minas.',
    label: 'Origem Local',
  },
  {
    title: 'O Acolhimento do Bairro Bom Jesus',
    description: 'O calor da boa vizinhança mineira: um espaço aconchegante para tomar o primeiro café do dia, reencontrar amigos ou levar o pão da família.',
    label: 'Comunidade & Afeto',
  },
];
