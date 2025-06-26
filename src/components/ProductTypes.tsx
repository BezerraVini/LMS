// Tipo base para um produto
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  flavorOptions: string[];
  flavor?: string; // opcional no catálogo, obrigatório no carrinho
  inStock: boolean;
}

// Tipo para item do carrinho (produto + sabor definido + quantidade)
export interface CartItem extends Product {
  quantity: number;
  flavor: string; // obrigatório no carrinho
}
