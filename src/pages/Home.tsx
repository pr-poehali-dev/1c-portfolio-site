import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'Быстрая автоматизация',
      description: 'Внедрение готовых решений от 2 недель'
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Проверенные решения для вашего бизнеса'
    },
    {
      icon: 'Users',
      title: 'Экспертность',
      description: '10+ лет опыта в разработке на 1С'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Техническая поддержка в любое время'
    }
  ];

  const services = [
    {
      title: 'Автоматизация складского учета',
      description: 'Полный контроль над складскими операциями с помощью DataMobile',
      link: '/datamobile',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Разработка на 1С',
      description: 'Индивидуальные решения для вашего бизнеса',
      link: '/developments',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Интеграции и API',
      description: 'Связываем ваши системы воедино',
      link: '/developments',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                  Автоматизация бизнеса
                </span>
                <br />
                <span className="text-foreground">на платформе 1С</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Разрабатываем и внедряем решения, которые упрощают работу 
                и повышают эффективность вашего бизнеса
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8"
                >
                  Получить консультацию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Наши проекты
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексные решения для автоматизации бизнес-процессов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={index} to={service.link}>
                  <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon name="Package" size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                      Подробнее
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами для обсуждения вашей задачи
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
