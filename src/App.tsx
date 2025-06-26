import { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import WhatsAppButton from './components/WhatsAppButton';
import type { Product } from './components/ProductCard';

// Definindo o tipo CartItem que inclui a quantidade e o sabor
type CartItem = Product & {
  quantity: number;
  flavor: string;  // Garantindo que 'flavor' seja obrigatória para os itens no carrinho
};

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Função para adicionar um produto ao carrinho, agora recebe o sabor selecionado
  const handleAddToCart = (product: Product, selectedFlavor: string) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id && item.flavor === selectedFlavor);
      if (exists) {
        return prev.map(item =>
          item.id === product.id && item.flavor === selectedFlavor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, flavor: selectedFlavor, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <Header
        cartItems={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />

      {/* Passando a função handleAddToCart para o ProductCatalog */}
      <ProductCatalog onAddToCart={handleAddToCart} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={(id, qty) =>
          setCartItems(prev =>
            prev.map(item =>
              item.id === id ? { ...item, quantity: qty } : item
            )
          )
        }
        onRemoveItem={(id) =>
          setCartItems(prev => prev.filter(item => item.id !== id))
        }
        onCheckout={() => {
          const message = encodeURIComponent(
            'Olá, gostaria de finalizar o pedido:\n\n' +
              cartItems.map(item =>
                `• ${item.name} (${item.flavor}) x${item.quantity} = R$ ${(item.price * item.quantity).toFixed(2)}`
              ).join('\n') +
              `\n\nTotal: R$ ${cartItems.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2)}`
          );
          window.open(`https://wa.me/55SEUNUMEROAQUI?text=${message}`, '_blank');
        }}
      />

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
