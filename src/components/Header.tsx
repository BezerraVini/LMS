import React from 'react';
import { ShoppingCart, Menu, X, ChevronDown, Search } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
}

export default function Header({ cartItems, onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const dropdownTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleWhatsAppRedirect = () => {
    const url = 'https://wa.me/5511958697612?text=Olá! Gostaria de falar com a LMS Tabacaria.';
    window.open(url, '_blank');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Busca por:', searchQuery);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo e Nome */}
          <a
            href="#home"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-10 rounded-lg flex items-center justify-center">
              <img
                src="/LMSlogo-nofundo.png"
                alt="Logo LMS Tabacaria"
                className="h-15 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">LM'S Tabacaria</h1>
              <p className="text-sm text-slate-300">Sua vibe começa aqui!</p>
            </div>
          </a>

          {/* Barra de Pesquisa */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center gap-2 max-w-xl mx-auto flex-grow"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
            <button
              type="submit"
              className="p-2 text-white rounded-md hover:bg-zinc-800"
            >
              <Search size={20} />
            </button>
          </form>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8 items-center ml-auto">
            <a href="#home" className="hover:text-blue-400 transition-colors">Início</a>

            {/* Dropdown de Produtos */}
            <div
              className="relative group"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                Produtos <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-40 py-2 z-50"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a href="#pods" className="block px-4 py-2 hover:bg-slate-100">Pods</a>
                  <a href="#essencias" className="block px-4 py-2 hover:bg-slate-100">Essências</a>
                  <a href="#acessorios" className="block px-4 py-2 hover:bg-slate-100">Acessórios</a>
                </div>
              )}
            </div>

            <button
              onClick={handleWhatsAppRedirect}
              className="hover:text-blue-400 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Ícones do canto direito */}
          <div className="flex items-center space-x-4 hover:text-blue-400 transition-colors">
            {/* Carrinho com badge fixado corretamente */}
            <button
              onClick={onCartClick}
              className="relative py-2 px-3"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute top-0 right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center translate-x-1/2 -translate-y-1/2 mt-2">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Menu mobile */}
            <button
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-blue-400 transition-colors">Início</a>
              <a href="#nossos-produtos" className="hover:text-blue-400 transition-colors">Produtos</a>
             {/*  <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a> */}
              <button
                onClick={handleWhatsAppRedirect}
                className="hover:text-blue-400 transition-colors text-left"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
