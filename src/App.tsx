import { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import WhatsAppButton from './components/WhatsAppButton';
import type { Product } from './components/ProductTypes';

type CartItem = Product & {
  quantity: number;
  flavor: string;
};

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateFlavor = (id: number, newFlavor: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, flavor: newFlavor } : item
      )
    );
  };

  return (
    <>
      <Header
        cartItems={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />

      <ProductCatalog onAddToCart={handleAddToCart} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onUpdateFlavor={handleUpdateFlavor}
      />

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
