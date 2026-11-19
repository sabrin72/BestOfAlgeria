import { Wifi, Car, Coffee, Utensils, Music, Wine, Users, CreditCard } from 'lucide-react';
import EstablishmentDetails from '../components/EstablishmentDetails';

const RestaurantDetailPage = () => {
  const restaurantData = {
    name: 'El Firdaous',
    type: 'Restaurant Gastronomique',
    location: 'Les Falaises, Oran',
    rating: 4.9,
    totalReviews: 567,
    price: '8,500 DZD',
    priceUnit: '/ personne',
    description: `El Firdaous est une destination culinaire incontournable à Oran, offrant une expérience gastronomique raffinée dans un cadre élégant surplombant la Méditerranée.

    Notre chef étoilé propose une cuisine fusion unique, mêlant traditions algériennes et techniques françaises modernes. Chaque plat est une œuvre d'art, préparé avec des ingrédients locaux de première qualité et une attention méticuleuse aux détails.

    La salle à manger baignée de lumière naturelle offre une vue panoramique sur la mer, créant une atmosphère romantique et sophistiquée. Notre cave à vin soigneusement sélectionnée complète parfaitement chaque menu.

    Que ce soit pour un dîner romantique, une célébration spéciale ou un repas d'affaires, El Firdaous garantit une expérience culinaire mémorable qui éveillera tous vos sens.`,

    images: [
      'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1765360773028-6affda725695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1769981674842-2f399777eead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1764358868789-400fb3d39fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1628604540712-f93fc71275d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    ],

    amenities: [
      { icon: Utensils, label: 'Cuisine gastronomique' },
      { icon: Wine, label: 'Cave à vin' },
      { icon: Wifi, label: 'WiFi gratuit' },
      { icon: Car, label: 'Service voiturier' },
      { icon: Music, label: 'Musique live le soir' },
      { icon: Users, label: 'Salons privés' },
      { icon: CreditCard, label: 'Cartes acceptées' },
      { icon: Coffee, label: 'Terrasse panoramique' },
    ],

    reviews: [
      {
        name: 'Yasmine Mansour',
        avatar: 'https://i.pravatar.cc/150?img=3',
        rating: 5,
        date: '18 avril 2025',
        comment: 'Une expérience culinaire absolument exceptionnelle ! Le menu dégustation était sublime, chaque plat était une explosion de saveurs. L\'ambiance est raffinée sans être guindée, et le service est impeccable. La vue sur la mer au coucher du soleil est à couper le souffle. Je recommande vivement de réserver à l\'avance car le restaurant est très prisé.'
      },
      {
        name: 'Omar Brahim',
        avatar: 'https://i.pravatar.cc/150?img=15',
        rating: 5,
        date: '12 avril 2025',
        comment: 'El Firdaous mérite sa réputation ! Les fruits de mer sont d\'une fraîcheur exceptionnelle et la présentation des assiettes est digne d\'un restaurant étoilé. Le sommelier nous a parfaitement conseillés sur l\'accord mets-vins. Un peu cher mais la qualité justifie amplement le prix.'
      },
      {
        name: 'Leila Zerrouki',
        avatar: 'https://i.pravatar.cc/150?img=9',
        rating: 5,
        date: '8 avril 2025',
        comment: 'Nous y sommes allés pour notre anniversaire de mariage et ce fut magique. Le chef a préparé un menu personnalisé en tenant compte de nos préférences. Le personnel est aux petits soins sans être envahissant. La décoration est élégante et la vue mer ajoute une touche romantique parfaite.'
      },
      {
        name: 'Rachid Hamdi',
        avatar: 'https://i.pravatar.cc/150?img=13',
        rating: 4,
        date: '2 avril 2025',
        comment: 'Excellente cuisine et cadre magnifique. Les portions sont généreuses contrairement à certains restaurants gastronomiques. J\'ai particulièrement apprécié le tajine de lotte revisité. Petit conseil : demandez une table près de la fenêtre pour profiter de la vue. Le seul bémol est le parking qui peut être difficile à trouver.'
      }
    ],

    phone: '+213 41 45 67 89',
    email: 'reservation@elfirdaous.dz',
    hours: '12h - 15h & 19h - 23h (fermé dimanche)',

    relatedEstablishments: [
      {
        name: 'Santorino',
        type: 'Cuisine Méditerranéenne',
        price: '7,500 DZD',
        image: 'https://images.unsplash.com/photo-1765360773028-6affda725695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        name: 'The View Restaurant',
        type: 'Fine Dining',
        price: '9,000 DZD',
        image: 'https://images.unsplash.com/photo-1769981674842-2f399777eead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        name: 'Les Jumelles',
        type: 'Cuisine Française',
        price: '10,500 DZD',
        image: 'https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
    ]
  };

  return <EstablishmentDetails {...restaurantData} />;
};

export default RestaurantDetailPage;
