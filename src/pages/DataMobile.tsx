import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DataMobile = () => {
  const benefits = [
    {
      icon: 'Smartphone',
      title: 'Мобильность',
      description: 'Работа со складом прямо с мобильного устройства'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Полный контроль движения товаров в режиме реального времени'
    },
    {
      icon: 'Zap',
      title: 'Скорость',
      description: 'Быстрая инвентаризация и приемка товаров'
    },
    {
      icon: 'CheckCircle2',
      title: 'Точность',
      description: 'Минимизация ошибок учета благодаря сканированию штрихкодов'
    },
    {
      icon: 'Link',
      title: 'Интеграция',
      description: 'Бесшовная работа с 1С:Управление торговлей'
    },
    {
      icon: 'TrendingUp',
      title: 'Эффективность',
      description: 'Увеличение производительности складских операций до 40%'
    }
  ];

  const features = [
    'Приемка товаров с контролем качества',
    'Быстрая инвентаризация склада',
    'Перемещение товаров между складами',
    'Сборка заказов и отгрузка',
    'Печать этикеток и ценников',
    'Работа в офлайн-режиме'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                  Решение для склада
                </div>
                <h1 className="text-5xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    DataMobile
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Профессиональная система автоматизации складского учета на базе 1С. 
                  Превратите мобильные устройства в мощный инструмент управления складом.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Получить демо
                    <Icon name="Play" size={20} className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Связаться
                  </Button>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <Card className="relative p-8 border-2">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name="Package" size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">DataMobile</h3>
                        <p className="text-sm text-muted-foreground">Версия 3.0</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={20} className="text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Преимущества DataMobile</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Современное решение для эффективного управления складскими операциями
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Функциональность</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Полный спектр операций для управления складом в одном приложении
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-8 border-2">
                <h3 className="text-2xl font-bold mb-6">Технические характеристики</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b">
                    <div className="text-sm text-muted-foreground mb-1">Платформа</div>
                    <div className="font-medium">1С:Управление торговлей 11</div>
                  </div>
                  <div className="pb-4 border-b">
                    <div className="text-sm text-muted-foreground mb-1">Устройства</div>
                    <div className="font-medium">Android, iOS, Windows Mobile</div>
                  </div>
                  <div className="pb-4 border-b">
                    <div className="text-sm text-muted-foreground mb-1">Подключение</div>
                    <div className="font-medium">Online / Offline режим</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Оборудование</div>
                    <div className="font-medium">ТСД, планшеты, смартфоны</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Внедрим DataMobile за 2 недели</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите работающую систему автоматизации склада в кратчайшие сроки
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать внедрение
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DataMobile;
