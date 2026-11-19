import { Waves, Users, Shield, Camera, Coffee, Car, Heart, Award } from 'lucide-react';
import EstablishmentDetails from '../components/EstablishmentDetails';

const ActivityDetailPage = () => {
  const activityData = {
    name: 'Jet Ski Oran Bay',
    type: 'Sports Nautiques & Aventure',
    location: 'Plage Ain El Turck, Oran',
    rating: 4.8,
    totalReviews: 234,
    price: '8,000 DZD',
    priceUnit: '/ 30 minutes',
    description: `Vivez une expérience inoubliable de jet ski dans les eaux cristallines d'Ain El Turck ! Notre centre de sports nautiques vous propose des sensations fortes en toute sécurité.

    Que vous soyez débutant ou expérimenté, nos moniteurs certifiés vous accompagnent pour une session de jet ski adaptée à votre niveau. Découvrez les magnifiques côtes d'Oran sous un nouvel angle, explorez des criques cachées et profitez de la Méditerranée en toute liberté.

    Nous fournissons tout l'équipement nécessaire : gilets de sauvetage certifiés, combinaisons néoprène, et jet-skis dernière génération parfaitement entretenus. La sécurité est notre priorité absolue.

    Formules disponibles : Balade découverte (30 min), Session sport (1h), Excursion panoramique (2h). Possibilité de réserver des sessions privées ou des événements de groupe.`,

    images: [
      'https://images.unsplash.com/photo-1761418741187-c21e38180ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1764056230965-570f10082acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1769234549179-f761882f7f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1656176892356-68bfc9cd9f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1628604540712-f93fc71275d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1633149668746-2891c0ff7334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    ],

    amenities: [
      { icon: Waves, label: 'Jet-skis récents' },
      { icon: Shield, label: 'Gilets de sauvetage' },
      { icon: Users, label: 'Moniteurs certifiés' },
      { icon: Camera, label: 'Photos incluses' },
      { icon: Coffee, label: 'Espace détente' },
      { icon: Car, label: 'Parking gratuit' },
      { icon: Heart, label: 'Assurance incluse' },
      { icon: Award, label: 'Certifié sécurité' },
    ],

    reviews: [
      {
        name: 'Sofiane Lounis',
        avatar: 'https://i.pravatar.cc/150?img=11',
        rating: 5,
        date: '20 avril 2025',
        comment: 'Expérience incroyable ! C\'était ma première fois en jet ski et le moniteur a été très patient et rassurant. Les machines sont en excellent état et les paysages sont à couper le souffle. J\'ai adoré longer la côte et découvrir des endroits inaccessibles autrement. Je reviendrai sans hésiter pour une session plus longue !'
      },
      {
        name: 'Nadia Messaoudi',
        avatar: 'https://i.pravatar.cc/150?img=6',
        rating: 5,
        date: '15 avril 2025',
        comment: 'On a réservé pour l\'anniversaire de mon mari et c\'était parfait ! Le personnel est super sympa et professionnel. Ils ont pris le temps de bien nous expliquer les consignes de sécurité. L\'excursion de 2h nous a permis d\'aller jusqu\'aux falaises, c\'était magique. Les photos qu\'ils ont prises sont magnifiques !'
      },
      {
        name: 'Amine Kadri',
        avatar: 'https://i.pravatar.cc/150?img=14',
        rating: 5,
        date: '10 avril 2025',
        comment: 'Super activité pour une journée entre amis ! On a réservé 4 jet-skis et on a passé un moment génial. Les tarifs sont corrects pour la qualité du service. L\'eau était claire, le soleil au rendez-vous, bref une journée parfaite. Le parking juste à côté est très pratique.'
      },
      {
        name: 'Fatima Boukhemis',
        avatar: 'https://i.pravatar.cc/150?img=4',
        rating: 4,
        date: '5 avril 2025',
        comment: 'Très bonne expérience globalement. Les jet-skis sont puissants et bien entretenus. Le moniteur connaît très bien la région et nous a fait découvrir de beaux spots. Seul petit bémol : il y avait un peu d\'attente car ils étaient complets ce jour-là. Je recommande de réserver en avance, surtout le weekend.'
      }
    ],

    phone: '+213 555 12 34 56',
    email: 'contact@jetskioranbay.dz',
    hours: '9h - 18h (tous les jours)',

    relatedEstablishments: [
      {
        name: 'Plongée Les Aiguades',
        type: 'Plongée Sous-Marine',
        price: '12,000 DZD',
        image: 'https://images.unsplash.com/photo-1764056230965-570f10082acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        name: 'Karting International',
        type: 'Karting',
        price: '3,500 DZD',
        image: 'https://images.unsplash.com/photo-1596199235118-7afdc7da1bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
      {
        name: 'Quad Adventures Sahara',
        type: 'Quad & 4x4',
        price: '15,000 DZD',
        image: 'https://images.unsplash.com/photo-1690942566395-f80f79320f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      },
    ]
  };

  return <EstablishmentDetails {...activityData} />;
};

export default ActivityDetailPage;
