import { Plus } from 'lucide-react';
import { useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  flavorOptions: string[];
  flavor?: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, selectedFlavor: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<string>('Selecione um sabor');
  const [warning, setWarning] = useState<string>('');

  const handleAddToCart = () => {
    if (selectedFlavor === 'Selecione um sabor') {
      setWarning('Por favor, selecione um sabor antes de adicionar ao carrinho.');
    } else {
      setWarning('');
      onAddToCart(product, selectedFlavor);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-200">
      <div className="relative">
        <img
          src={product?.image || '/fallback.jpg'}
          alt={product?.name || 'Produto sem nome'}
          className="w-full h-48 object-contain"
        />
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Promoção
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
        <p className="text-slate-600 mb-1">Sabor: {selectedFlavor}</p>

        <select
          value={selectedFlavor}
          onChange={(e) => setSelectedFlavor(e.target.value)}
          className="border rounded-md p-2 text-gray-800 mb-4"
        >
          <option value="Selecione um sabor" disabled>Selecione um sabor</option>
          {product.flavorOptions.map((flavor, index) => (
            <option key={index} value={flavor}>{flavor}</option>
          ))}
        </select>

        {warning && <p className="text-red-500 text-sm">{warning}</p>}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-800">R$ {product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-slate-500 line-through">R$ {product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={selectedFlavor === 'Selecione um sabor'}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              selectedFlavor === 'Selecione um sabor'
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            <Plus className="w-5 h-5" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProductCatalogProps {
  onAddToCart: (product: Product, selectedFlavor: string) => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ onAddToCart }) => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Ignite V120',
      price: 90,
      image: '/ignite-120.png',
      flavorOptions: ['Strawberry raz', 'Menthol', 'Peach ice', 'Strawberry kiwi', 'Watermelon ice', 'Straw banana'],
      inStock: true,
    },
    {
      id: 2,
      name: 'Oxbar 30K',
      price: 100,
      image: '/oxbar-30k.png',
      flavorOptions: ['Grape Peach', 'Raspberry Watermelon', 'Fanta Strawberry', 'Double Apple', 'Paradise Grape', 'Blue Raspberry Lemon', 'Ox Love', 'Passion Kiwi'],
      inStock: false,
    },
    {
      id: 3,
      name: 'Eflbar GH23',
      price: 110,
      image: '/elfbar-gh23.png',
      flavorOptions: ['Green apple ice', 'Blueberry pear', 'Spring mint', 'Strawberry banana', 'Watermelon ice', 'Bubbaloo grape'],
      inStock: true,
    },
    {
      id: 4,
      name: 'Elfbar TE 30K',
      price: 115,
      image: '/elfbarte30k.png',
      flavorOptions: ['Bubbaloo Grape', 'Watermelon ice', 'Strawberry watermelon ice', 'Blueberry sour raspberry'],
      inStock: true,
    }
  ]);

  return (
    <div id="nossos-produtos" className="bg-black p-6">
      <h2 className="text-3xl font-bold text-center mb-14 text-white bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(255,255,255,0.15)] tracking-wide uppercase">
        Nossos Produtos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
