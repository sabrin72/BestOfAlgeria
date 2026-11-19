import CategoryPage from './CategoryPage';

const HotelsPage = () => {
  const establishments = [
    {
      name: 'Le Méridien Oran',
      type: 'Hôtel 5 étoiles',
      location: 'Oran Centre',
      rating: 4.9,
      reviews: 342,
      price: '45,000 DZD',
      priceUnit: '/ nuit',
      image: 'https://images.unsplash.com/photo-1720975658810-3d82b928474d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Sheraton Oran',
      type: 'Hôtel 5 étoiles',
      location: 'Les Falaises',
      rating: 4.8,
      reviews: 289,
      price: '42,000 DZD',
      priceUnit: '/ nuit',
      image: 'https://images.unsplash.com/photo-1728953885765-33ef475d8baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Royal Hotel MGallery',
      type: 'Hôtel 5 étoiles Boutique',
      location: 'Alger Centre',
      rating: 4.9,
      reviews: 456,
      price: '52,000 DZD',
      priceUnit: '/ nuit',
      image: 'https://images.unsplash.com/photo-1651010965978-bf1235d4df46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Four Points by Sheraton',
      type: 'Hôtel 4 étoiles',
      location: 'Oran',
      rating: 4.6,
      reviews: 198,
      price: '28,000 DZD',
      priceUnit: '/ nuit',
      image: 'https://images.unsplash.com/photo-1521750465-672a0f580901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Sofitel Alger',
      type: 'Hôtel 5 étoiles',
      location: 'Alger',
      rating: 4.7,
      reviews: 312,
      price: '48,000 DZD',
      priceUnit: '/ nuit',
      image: 'https://images.unsplash.com/photo-1720975658933-a3dac8a39d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Hotel El Aurassi',
      type: 'Hôtel 5 étoiles',
      location: 'Alger',
      rating: 4.5,
      reviews: 267,
      price: '38,000 DZD',
      priceUnit: '/ nuit',
      image: 'https://images.unsplash.com/photo-1521750465-672a0f580901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  return (
    <CategoryPage
      title="Hôtels & Hébergements"
      subtitle="Les meilleures adresses d'Algérie"
      description="Des établissements de prestige soigneusement sélectionnés pour votre confort"
      heroImage="https://images.unsplash.com/photo-1720975658810-3d82b928474d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      establishments={establishments}
      filters={['5 étoiles', '4 étoiles', 'Boutique', 'Éco-lodges', 'Riads']}
    />
  );
};

export default HotelsPage;
