import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-slate-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-15 h-10 flex items-center justify-center">
                <img
                    src="/LMSlogo-nofundo.png"
                    alt="Logo LMS Tabacaria"
                    className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">LM'S Tabacaria</h3>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Sua loja especializada em pods e acessórios para vaping, com produtos de alta qualidade e atendimento personalizado.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Pods</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dispositivos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acessórios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Promoções</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Seg-Sex: 9h às 18h</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Sáb: 9h às 15h</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 93336-7780</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>lmstabacaria@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Localização</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <div>
                  <p>São Cernardo do Campo - SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-400">
          <h4 className="text-sm font-semibold mb-4">
            Envio feito por MotoUber, enviamos rastreio das entregas, como são muitas entregas se responsabilize por olhar a sua!
          </h4>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 LMS Tabacaria. Todos os direitos reservados.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Venda proibida para menores de 18 anos. Produto sujeito à regulamentação da Anvisa.
          </p>
        </div>
      </div>
    </footer>
  );
}
