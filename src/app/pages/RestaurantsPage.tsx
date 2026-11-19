import CategoryPage from './CategoryPage';

const RestaurantsPage = () => {
  const establishments = [
    {
      name: 'El Firdaous',
      type: 'Restaurant Gastronomique',
      location: 'Les Falaises, Oran',
      rating: 4.9,
      reviews: 567,
      price: '8,500 DZD',
      priceUnit: '/ personne',
      image: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Santorino',
      type: 'Cuisine Méditerranéenne',
      location: 'Oran Centre',
      rating: 4.8,
      reviews: 423,
      price: '7,500 DZD',
      priceUnit: '/ personne',
      image: 'https://images.unsplash.com/photo-1765360773028-6affda725695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'The View Restaurant',
      type: 'Fine Dining',
      location: 'Oran',
      rating: 4.7,
      reviews: 312,
      price: '9,000 DZD',
      priceUnit: '/ personne',
      image: 'https://images.unsplash.com/photo-1769981674842-2f399777eead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Les Jumelles',
      type: 'Cuisine Française',
      location: 'Alger',
      rating: 4.6,
      reviews: 289,
      price: '10,500 DZD',
      priceUnit: '/ personne',
      image: 'https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Le Tantra',
      type: 'Lounge & Restaurant',
      location: 'Alger',
      rating: 4.5,
      reviews: 234,
      price: '6,500 DZD',
      priceUnit: '/ personne',
      image: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Dar Dzaïr',
      type: 'Cuisine Algérienne Authentique',
      location: 'Alger',
      rating: 4.8,
      reviews: 456,
      price: '5,500 DZD',
      priceUnit: '/ personne',
      image: 'https://images.unsplash.com/photo-1765360773028-6affda725695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  return (
    <CategoryPage
      title="Restaurants & Gastronomie"
      subtitle="Les meilleures tables d'Algérie"
      description="Découvrez une sélection raffinée de restaurants et expériences culinaires"
      heroImage="https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      establishments={establishments}
      filters={['Gastronomie', 'Cafés', 'Brunch', 'Fruits de mer', 'Pâtisseries']}
    />
  );
};

export default RestaurantsPage;
