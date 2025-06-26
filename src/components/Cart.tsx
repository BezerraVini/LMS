import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import type { Product } from './ProductCard';

interface CartItem extends Product {
  quantity: number;
  flavorOptions: string[];
  flavor: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onUpdateFlavor: (id: number, newFlavor: string) => void;
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onUpdateFlavor,
}: CartProps) {
  const whatsappNumber = '5511933367780';

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const message = encodeURIComponent(
      'Olá, gostaria de finalizar o pedido:\n\n' +
        items
          .map(
            (item) =>
              `• ${item.name} (${item.flavor}) x${item.quantity} = R$ ${(item.price * item.quantity).toFixed(2)}`
          )
          .join('\n') +
        `\n\nTotal: R$ ${total.toFixed(2)}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
              <ShoppingBag className="w-6 h-6 mr-2" />
              Carrinho
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 text-lg">Seu carrinho está vazio</p>
                <p className="text-slate-400">Adicione alguns produtos para continuar</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-200"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-1">{item.name}</h3>

                        {/* Dropdown de sabores */}
                        {item.flavorOptions && item.flavorOptions.length > 1 ? (
                          <select
                            value={item.flavor}
                            onChange={(e) => onUpdateFlavor(item.id, e.target.value)}
                            className="text-sm text-slate-600 mb-2 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
                          >
                            {item.flavorOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <p className="text-sm text-slate-600 mb-2">{item.flavor}</p>
                        )}

                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </span>
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => {
                                const newQuantity = item.quantity - 1;
                                if (newQuantity <= 0) {
                                  onRemoveItem(item.id);
                                } else {
                                  onUpdateQuantity(item.id, newQuantity);
                                }
                              }}
                              className="p-1 hover:bg-slate-200 rounded transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold text-slate-800 min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-slate-200 rounded transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 hover:bg-red-100 text-red-500 rounded transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-slate-200 p-6 bg-slate-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-slate-800">Total:</span>
                <span className="text-2xl font-bold text-slate-800">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Finalizar via WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
