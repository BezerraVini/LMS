import { Plus } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  flavorOptions: string[];
  flavor: string;  // Garantindo que flavor seja obrigatório
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  console.log('Produto recebido no ProductCard:', product);

  // Verificação para garantir que product e suas propriedades essenciais existem
  if (!product || !product.image || !product.name) {
    return <div>Produto inválido ou incompleto</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-200">
      <div className="relative">
        <img 
          src={product?.image || '/fallback.jpg'} 
          alt={product?.name || 'Produto sem nome'}
          className="w-full h-64 object-cover"
        />
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Promoção
          </div>
        )}

        {/* Indicador de estoque */}
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Fora de Estoque
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
        <p className="text-slate-600 mb-1">Sabor: {product.flavor}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-800">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-slate-500 line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Desabilitar botão se o produto não estiver em estoque */}
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${product.inStock ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-500 cursor-not-allowed'} text-white transform hover:scale-105 shadow-lg hover:shadow-xl`}
          >
            <Plus className="w-5 h-5" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
