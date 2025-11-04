import { Link } from 'react-router-dom';
import Icon from './ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">1С Разработка</span>
            </div>
            <p className="text-sm text-white/70">
              Профессиональная автоматизация бизнеса на платформе 1С
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-white/70 hover:text-white transition-colors">
                Главная
              </Link>
              <Link to="/datamobile" className="block text-sm text-white/70 hover:text-white transition-colors">
                DataMobile
              </Link>
              <Link to="/developments" className="block text-sm text-white/70 hover:text-white transition-colors">
                Разработки
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@example.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Icon name="Mail" size={16} />
                info@example.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Социальные сети</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          © 2024 1С Разработка. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
