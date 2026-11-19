import CategoryPage from './CategoryPage';

const SpaBeautePage = () => {
  const establishments = [
    {
      name: 'Spa Royal',
      type: 'Spa de Luxe',
      location: 'Alger',
      rating: 4.9,
      reviews: 289,
      price: '18,000 DZD',
      priceUnit: '/ soin',
      image: 'https://images.unsplash.com/photo-1730367019975-4ad8d9e14ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Hammam Tradition',
      type: 'Hammam Authentique',
      location: 'Oran',
      rating: 4.8,
      reviews: 456,
      price: '5,500 DZD',
      priceUnit: '/ entrée',
      image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Institut Belle Époque',
      type: 'Institut de Beauté',
      location: 'Alger',
      rating: 4.7,
      reviews: 334,
      price: '8,500 DZD',
      priceUnit: '/ soin',
      image: 'https://images.unsplash.com/photo-1665824249476-a7951ab0aaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      featured: true,
    },
    {
      name: 'Salon Prestige',
      type: 'Salon de Coiffure',
      location: 'Oran Centre',
      rating: 4.6,
      reviews: 267,
      price: '4,500 DZD',
      priceUnit: '/ coupe',
      image: 'https://images.unsplash.com/photo-1767350510090-137a6ce252c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Barbershop Gentleman',
      type: 'Barbier Premium',
      location: 'Oran',
      rating: 4.8,
      reviews: 389,
      price: '3,000 DZD',
      priceUnit: '/ coupe',
      image: 'https://images.unsplash.com/photo-1589443994465-6e59e5a2aed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Wellness Center',
      type: 'Centre de Bien-être',
      location: 'Alger',
      rating: 4.7,
      reviews: 312,
      price: '25,000 DZD',
      priceUnit: '/ forfait',
      image: 'https://images.unsplash.com/photo-1730367019975-4ad8d9e14ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  return (
    <CategoryPage
      title="Spa & Beauté"
      subtitle="Bien-être et détente"
      description="Les meilleurs instituts et centres de bien-être d'Algérie"
      heroImage="https://images.unsplash.com/photo-1730367019975-4ad8d9e14ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      establishments={establishments}
      filters={['Spas', 'Hammams', 'Salons', 'Instituts', 'Barbershops']}
    />
  );
};

export default SpaBeautePage;
