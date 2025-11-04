import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

const Developments = () => {
  const articles = [
    {
      id: 1,
      title: 'Автоматизация процесса формирования заказов поставщикам',
      description: 'Разработали механизм автоматического формирования заказов на основе анализа остатков и истории продаж. Система учитывает сезонность и минимальные партии заказа.',
      category: 'Закупки',
      date: '15 Октября 2024',
      readTime: '5 мин',
      tags: ['1С:УТ', 'Автоматизация', 'Закупки']
    },
    {
      id: 2,
      title: 'Интеграция с маркетплейсами: Wildberries и Ozon',
      description: 'Реализована двусторонняя интеграция с крупнейшими маркетплейсами. Автоматическая выгрузка остатков, загрузка заказов и синхронизация статусов.',
      category: 'Интеграции',
      date: '8 Октября 2024',
      readTime: '7 мин',
      tags: ['API', 'Интеграции', 'E-commerce']
    },
    {
      id: 3,
      title: 'Мобильное приложение для торговых представителей',
      description: 'Разработка мобильного приложения для работы торговых представителей в поле. Приложение позволяет оформлять заказы, просматривать аналитику и синхронизироваться с 1С.',
      category: 'Мобильные решения',
      date: '1 Октября 2024',
      readTime: '6 мин',
      tags: ['Mobile', '1С', 'Продажи']
    },
    {
      id: 4,
      title: 'Система управления лояльностью клиентов',
      description: 'Комплексное решение для управления программой лояльности: начисление бонусов, персональные скидки, анализ покупательского поведения.',
      category: 'CRM',
      date: '25 Сентября 2024',
      readTime: '8 мин',
      tags: ['CRM', 'Лояльность', 'Маркетинг']
    },
    {
      id: 5,
      title: 'Автоматизация расчета себестоимости продукции',
      description: 'Внедрили систему точного расчета себестоимости с учетом всех производственных затрат, накладных расходов и амортизации оборудования.',
      category: 'Производство',
      date: '18 Сентября 2024',
      readTime: '6 мин',
      tags: ['Производство', 'Учет', 'Аналитика']
    },
    {
      id: 6,
      title: 'Портал для контрагентов на 1С',
      description: 'Веб-портал для контрагентов с возможностью просмотра задолженности, истории заказов, формирования новых заказов и отслеживания статусов доставки.',
      category: 'Web',
      date: '10 Сентября 2024',
      readTime: '9 мин',
      tags: ['Web', 'Портал', 'B2B']
    }
  ];

  const categories = ['Все', 'Закупки', 'Интеграции', 'Мобильные решения', 'CRM', 'Производство', 'Web'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-medium text-sm">
                Портфолио проектов
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Наши разработки
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Реальные проекты и решения, которые мы создали для наших клиентов. 
                Делимся опытом и лучшими практиками.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 border-b bg-white sticky top-20 z-40">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'Все' ? 'default' : 'outline'}
                  className={category === 'Все' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Icon name="Clock" size={14} />
                        {article.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {article.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Calendar" size={14} />
                        {article.date}
                      </div>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Читать
                        <Icon name="ArrowRight" size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Загрузить еще
                <Icon name="ChevronDown" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-12 text-center border-2">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Lightbulb" size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Есть идея для проекта?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Расскажите нам о вашей задаче, и мы разработаем индивидуальное решение, 
                которое полностью соответствует потребностям вашего бизнеса
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Developments;
