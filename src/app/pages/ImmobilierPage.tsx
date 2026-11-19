import CategoryPage from './CategoryPage';

const ImmobilierPage = () => {
  const establishments = [
    {
      name: 'Villa Paradis',
      type: 'Villa de Luxe',
      location: 'Les Falaises, Oran',
      rating: 4.9,
      reviews: 67,
      price: '180M DZD',
      priceUnit: '',
      image: 'https://images.unsplash.com/photo-1749636912599-4baf429f5ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Appartement Vue Mer',
      type: 'Appartement Standing',
      location: 'Ain El Turck',
      rating: 4.8,
      reviews: 89,
      price: '85M DZD',
      priceUnit: '',
      image: 'https://images.unsplash.com/photo-1628604540712-f93fc71275d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Duplex Moderne Alger',
      type: 'Duplex',
      location: 'Alger Centre',
      rating: 4.7,
      reviews: 54,
      price: '120M DZD',
      priceUnit: '',
      image: 'https://images.unsplash.com/photo-1712611408114-93578e518108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Villa Saisonnière Premium',
      type: 'Location Saisonnière',
      location: 'Oran',
      rating: 4.8,
      reviews: 123,
      price: '45,000 DZD',
      priceUnit: '/ semaine',
      image: 'https://images.unsplash.com/photo-1749636912599-4baf429f5ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Penthouse Luxe',
      type: 'Penthouse',
      location: 'Alger',
      rating: 4.9,
      reviews: 45,
      price: '250M DZD',
      priceUnit: '',
      image: 'https://images.unsplash.com/photo-1702908324995-e9a72240809a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Résidence Méditerranée',
      type: 'Appartements Neufs',
      location: 'Ain El Turck',
      rating: 4.6,
      reviews: 78,
      price: '95M DZD',
      priceUnit: '',
      image: 'https://images.unsplash.com/photo-1670183246940-1144c22ba500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  return (
    <CategoryPage
      title="Immobilier"
      subtitle="Trouvez votre bien idéal"
      description="Villas, appartements et locations saisonnières de prestige"
      heroImage="https://images.unsplash.com/photo-1749636912599-4baf429f5ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      establishments={establishments}
      filters={['Villas', 'Appartements', 'Location saisonnière', 'Luxe']}
    />
  );
};

export default ImmobilierPage;
