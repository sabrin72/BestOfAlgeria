import { Wifi, Car, Coffee, Utensils, Dumbbell, Wind, Waves, Users } from 'lucide-react';
import EstablishmentDetails from '../components/EstablishmentDetails';

const HotelDetailPage = () => {
  const hotelData = {
    name: 'Le Méridien Oran',
    type: 'Hôtel 5 étoiles',
    location: 'Avenue du 1er Novembre, Oran Centre',
    rating: 4.9,
    totalReviews: 342,
    price: '45,000 DZD',
    priceUnit: '/ nuit',
    description: `Le Méridien Oran offre une expérience luxueuse au cœur de la ville. Situé en front de mer, l'hôtel dispose de chambres élégamment décorées avec vue sur la Méditerranée.

    Profitez de notre spa de classe mondiale, de notre piscine à débordement avec vue panoramique, et de nos restaurants gastronomiques proposant une cuisine locale et internationale raffinée.

    Notre emplacement privilégié vous permet d'accéder facilement aux principales attractions d'Oran, tout en profitant d'un havre de paix et de tranquillité. Le service impeccable de notre personnel dévoué garantit un séjour mémorable.`,

    images: [
      'https://images.unsplash.com/photo-1720975658810-3d82b928474d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1728953885765-33ef475d8baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1651010965978-bf1235d4df46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1521750465-672a0f580901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1720975658933-a3dac8a39d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    ],

    amenities: [
      { icon: Wifi, label: 'WiFi gratuit' },
      { icon: Car, label: 'Parking gratuit' },
      { icon: Coffee, label: 'Petit déjeuner inclus' },
      { icon: Utensils, label: 'Restaurant sur place' },
      { icon: Dumbbell, label: 'Salle de sport' },
      { icon: Wind, label: 'Climatisation' },
      { icon: Waves, label: 'Piscine' },
      { icon: Users, label: 'Service de conciergerie' },
    ],

    reviews: [
      {
        name: 'Sarah Benali',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 5,
        date: '15 avril 2025',
        comment: 'Séjour exceptionnel au Méridien Oran ! Les chambres sont spacieuses et offrent une vue magnifique sur la mer. Le personnel est extrêmement professionnel et attentionné. Le petit déjeuner buffet est varié et délicieux. Je recommande vivement cet hôtel pour un séjour de luxe à Oran.'
      },
      {
        name: 'Karim Alaoui',
        avatar: 'https://i.pravatar.cc/150?img=12',
        rating: 5,
        date: '10 avril 2025',
        comment: 'Hôtel magnifique avec un service irréprochable. La piscine sur le toit est spectaculaire, surtout au coucher du soleil. Les restaurants de l\'hôtel proposent une cuisine excellente. L\'emplacement est parfait pour explorer Oran. Un séjour mémorable !'
      },
      {
        name: 'Amina Hadj',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 4,
        date: '5 avril 2025',
        comment: 'Très bel hôtel avec des installations modernes. Le spa est relaxant et les massages sont excellents. Seul petit bémol : le parking peut être complet aux heures de pointe. Sinon, je recommande fortement pour un séjour confortable et luxueux.'
      },
      {
        name: 'Mehdi Touati',
        avatar: 'https://i.pravatar.cc/150?img=8',
        rating: 5,
        date: '28 mars 2025',
        comment: 'Parfait pour un voyage d\'affaires ou de loisirs. Les salles de conférence sont bien équipées, le WiFi est rapide. Le bar lounge est idéal pour se détendre après une journée de travail. Service clientèle exemplaire.'
      }
    ],

    phone: '+213 41 59 01 00',
    email: 'reservation@lemeridien-oran.com',
    hours: 'Réception 24h/24',

    relatedEstablishments: [
      {
        name: 'Sheraton Oran',
        type: 'Hôtel 5 étoiles',
        price: '42,000 DZD',
        image: 'https://images.unsplash.com/photo-1728953885765-33ef475d8baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        name: 'Royal Hotel MGallery',
        type: 'Hôtel 5 étoiles Boutique',
        price: '52,000 DZD',
        image: 'https://images.unsplash.com/photo-1651010965978-bf1235d4df46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        name: 'Four Points by Sheraton',
        type: 'Hôtel 4 étoiles',
        price: '28,000 DZD',
        image: 'https://images.unsplash.com/photo-1521750465-672a0f580901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
    ]
  };

  return <EstablishmentDetails {...hotelData} />;
};

export default HotelDetailPage;
