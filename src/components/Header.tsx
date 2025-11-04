import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import Icon from './ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <Icon name="Code2" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              1С Разработка
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Главная
            </Link>
            <Link 
              to="/datamobile" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              DataMobile
            </Link>
            <Link 
              to="/developments" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Разработки
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Связаться
            </Button>
          </nav>

          <button className="md:hidden p-2">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
