import { GiScooter } from 'react-icons/gi';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative bg-black text-white py-20 overflow-hidden">
      {/* Imagem de fundo centralizada */}
      <img 
  src="/kong.PNG" 
  alt="Kong Background Left" 
  className="absolute top-1/2 left-2/2 w-full max-w-[800px] opacity-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
/>

<img 
  src="/kong.PNG" 
  alt="Kong Background Right Mirrored" 
  className="absolute top-1/2 right-0 w-full max-w-[800px] opacity-10 transform translate-x-1/2 -translate-y-1/2 scale-x-[-1] pointer-events-none select-none"
/>
      

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(255,255,255,0.15)] tracking-wide uppercase">
  As melhores marcas aqui na LM'S Tabacaria
</h2>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <FaMoneyBillWave className="w-12 h-12 text-green-500 mx-auto mb-6 animate-none" />
              <h3 className="text-xl font-semibold mb-2">Melhores Promoções</h3>
              <p className="text-slate-400 text-center">Sabores marcantes e muita fumaça para sua sessão</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <FaMedal className="w-12 h-12 text-yellow-500 mx-auto mb-6 animate-none" />
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-slate-400 text-center">Produtos originais com certificação e garantia de qualidade</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <GiScooter className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-none" />
              <h3 className="text-xl font-semibold mb-2">Entrega rápida e segura</h3>
              <p className="text-slate-400 text-center">
                Seu pod chegando até você em poucos minutos com entrega rastreada
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">  
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-zinc-800 hover:bg-zinc-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver Produtos
            </button>
            <button 
              onClick={() => window.open('https://wa.me/5511933367780?text=Olá! Gostaria de saber mais sobre os pods da LMS Tabacaria.', '_blank')}
              className="border-2 border-slate-600 hover:border-zinc-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-zinc-600/10"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
