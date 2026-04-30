// Shared product dataset used by Home and Products pages.
export const products = [
  {
    id: 'avalanche',
    name: 'Avalanche',
    gender: 'female',
    badge: 'Floral',
    image: '/Assets/images/Avalanche.jpeg',
    topNotes: 'Freesia, Gardenia and Cardamom',
    heartNotes: 'Jasmine, Rose and Peach',
    baseNotes: 'Patchouli, Vetiver, Musks and Vanilla',
    mood: 'Floral'
  },
  {
    id: 'taboo',
    name: 'Taboo',
    gender: 'female',
    badge: 'Bold',
    image: '/Assets/images/taboo.jpg',
    topNotes: 'Jasmine',
    heartNotes: 'Caramel and Salt',
    baseNotes: 'Vanilla',
    mood: 'Naughty'
  },
  {
    id: 'fuego',
    name: 'Fuego',
    gender: 'male',
    badge: 'Smoky',
    image: '/Assets/images/Fuego.jpg',
    topNotes: 'Nutmeg, Elderflower, Lavender and Lemon',
    heartNotes: 'Violet, Cedar and Valley Lily',
    baseNotes: 'Leather, Vetiver, Musk and Tonka Bean',
    mood: 'Seductive'
  },
  {
    id: 'mahogany',
    name: 'Mahogany',
    gender: 'male',
    badge: 'Warm woods',
    image: '/Assets/images/Mahogany.jpg',
    topNotes: 'Exotic Rosewood',
    heartNotes: 'Cardamom, Sandalwood and Vetiver',
    baseNotes: 'Tonka Bean and Amber',
    mood: 'Decadent'
  },
  {
    id: 'azure',
    name: 'Azure',
    gender: 'unisex',
    badge: 'Fresh',
    image: '/Assets/images/Azure.jpg',
    topNotes: 'Sicilian Lemon, Apple, Cedar and Bellflower',
    heartNotes: 'Bamboo, Jasmine and White Rose',
    baseNotes: 'Cedar, Musk and Amber',
    mood: 'Invigorating'
  },
  {
    id: 'kairos',
    name: 'Kairos',
    gender: 'male',
    badge: 'Leather',
    image: '/Assets/images/Kairos.jpg',
    topNotes: 'Tuscan Iris and Italian Orange',
    heartNotes: 'Leather and Rose',
    baseNotes: 'Sandalwood, Ambrette, Agarwood and Cedarwood',
    mood: 'Sophisticated'
  },
  {
    id: 'cinque',
    name: 'Cinque',
    gender: 'female',
    badge: 'Classic',
    image: '/Assets/images/Cinque.jpg',
    topNotes: 'Aldehydes, Ylang-Ylang, Bergamot and Lemon',
    heartNotes: 'Iris, Jasmine, Rose and Valley Lily',
    baseNotes: 'Civet, Sandalwood, Amber, Musk, Vanilla and Patchouli',
    mood: 'Luxurious'
  },
  {
    id: 'elusive',
    name: 'Elusive',
    gender: 'male',
    badge: 'Amber',
    image: '/Assets/images/elusive.jpg',
    topNotes: 'Warm Spicy and Cardamom',
    heartNotes: 'Oriental Citrus and Caramel',
    baseNotes: 'Woody and Amber',
    mood: 'Addictive'
  }
];

export const featuredProducts = [
  {
    ...products.find((product) => product.id === 'avalanche'),
    badge: "Editor's pick"
  },
  {
    ...products.find((product) => product.id === 'mahogany'),
    badge: 'Evening icon'
  },
  {
    ...products.find((product) => product.id === 'elusive'),
    badge: 'Modern trail',
    imageWrapClass: 'bg-2'
  }
];
