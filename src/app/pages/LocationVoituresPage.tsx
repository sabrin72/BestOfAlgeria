import CategoryPage from './CategoryPage';

const LocationVoituresPage = () => {
  const establishments = [
    {
      name: 'Elite Car Rental',
      type: 'Location Premium',
      location: 'Aéroport Oran',
      rating: 4.8,
      reviews: 312,
      price: '12,000 DZD',
      priceUnit: '/ jour',
      image: 'https://images.unsplash.com/photo-1728953885765-33ef475d8baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Sahara 4x4 Adventures',
      type: 'Location 4x4 avec Chauffeur',
      location: 'Sahara',
      rating: 4.9,
      reviews: 234,
      price: '25,000 DZD',
      priceUnit: '/ jour',
      image: 'https://images.unsplash.com/photo-1690942566395-f80f79320f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Luxury Drive Alger',
      type: 'Berlines de Luxe',
      location: 'Alger',
      rating: 4.7,
      reviews: 289,
      price: '18,000 DZD',
      priceUnit: '/ jour',
      image: 'https://images.unsplash.com/photo-1720975658810-3d82b928474d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'SUV Location Pro',
      type: 'Location SUV',
      location: 'Oran',
      rating: 4.6,
      reviews: 267,
      price: '15,000 DZD',
      priceUnit: '/ jour',
      image: 'https://images.unsplash.com/photo-1728953885765-33ef475d8baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Minibus & Van Services',
      type: 'Location Groupe',
      location: 'Alger & Oran',
      rating: 4.5,
      reviews: 198,
      price: '20,000 DZD',
      priceUnit: '/ jour',
      image: 'https://images.unsplash.com/photo-1720975658933-a3dac8a39d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Chauffeur Privé VIP',
      type: 'Chauffeur Privé',
      location: 'Alger',
      rating: 4.9,
      reviews: 423,
      price: '30,000 DZD',
      priceUnit: '/ jour',
      image: 'https://images.unsplash.com/photo-1728953885765-33ef475d8baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  return (
    <CategoryPage
      title="Location de Véhicules"
      subtitle="Voyagez en toute liberté"
      description="Louez le véhicule parfait pour votre séjour en Algérie"
      heroImage="https://images.unsplash.com/photo-1728953885765-33ef475d8baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      establishments={establishments}
      filters={['Berlines', 'SUV', '4x4 Sahara', 'Minibus', 'Avec chauffeur']}
    />
  );
};

export default LocationVoituresPage;
