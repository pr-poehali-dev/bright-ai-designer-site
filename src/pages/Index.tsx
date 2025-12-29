import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const portfolioItems = [
    {
      id: 1,
      title: 'Fashion Campaign',
      category: 'Модная съёмка',
      image: 'https://cdn.poehali.dev/projects/0566975c-d780-4447-812d-dfbbc541ad5a/files/f7835974-b7c2-4d92-b1a2-f9c17e8e2d82.jpg'
    },
    {
      id: 2,
      title: 'Product Visualization',
      category: 'Продуктовая съёмка',
      image: 'https://cdn.poehali.dev/projects/0566975c-d780-4447-812d-dfbbc541ad5a/files/5e056e6a-06c0-4d48-8e98-a4139b56eab3.jpg'
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'Брендинг',
      image: 'https://cdn.poehali.dev/projects/0566975c-d780-4447-812d-dfbbc541ad5a/files/c305b11e-9ed0-4243-beda-28678a838ab8.jpg'
    }
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'ИИ-генерация фото',
      description: 'Создание уникальных изображений для вашего бренда с помощью нейросетей'
    },
    {
      icon: 'Target',
      title: 'Маркетинговые кампании',
      description: 'Визуальный контент для рекламных кампаний и соцсетей'
    },
    {
      icon: 'Palette',
      title: 'Брендинг',
      description: 'Разработка визуального стиля и фирменной айдентики'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-oswald font-bold">
            <span className="text-primary">AI</span>
            <span className="text-secondary">PHOTO</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['home', 'portfolio', 'services', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-white/60'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'services' && 'Услуги'}
                {section === 'about' && 'О мне'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-oswald font-bold leading-none">
                <span className="text-primary">ИИ</span>
                <br />
                <span className="text-secondary">ФОТО</span>
                <br />
                <span className="text-white">БРЕНДЫ</span>
              </h1>
              <p className="text-xl text-white/70 max-w-lg">
                Создаю визуальный контент нового поколения для брендов с помощью искусственного интеллекта
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('portfolio')} size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Смотреть работы
                </Button>
                <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  Обсудить проект
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary via-black to-secondary rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-32 px-6 bg-white text-black">
        <div className="container mx-auto">
          <h2 className="text-6xl md:text-7xl font-oswald font-bold mb-16 animate-fade-in">
            ПОРТФОЛИО
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden aspect-square rounded-lg cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-primary uppercase tracking-wider mb-2">{item.category}</p>
                    <h3 className="text-2xl font-oswald font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen py-32 px-6">
        <div className="container mx-auto">
          <h2 className="text-6xl md:text-7xl font-oswald font-bold mb-16 animate-fade-in">
            УСЛУГИ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-oswald font-bold mb-4">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-32 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl md:text-7xl font-oswald font-bold mb-16 animate-fade-in">
            О МНЕ
          </h2>
          <div className="space-y-8 text-lg">
            <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Я специализируюсь на создании уникального визуального контента для брендов с помощью искусственного интеллекта. 
              Мой подход сочетает креативность дизайнера и возможности современных нейросетей.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Работаю с fashion-брендами, e-commerce проектами и маркетинговыми агентствами. 
              Создаю контент для рекламных кампаний, соцсетей и брендинга.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-5xl font-oswald font-bold mb-2">150+</div>
                <p className="text-white/80">Проектов</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-5xl font-oswald font-bold mb-2">50+</div>
                <p className="text-white/80">Клиентов</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-5xl font-oswald font-bold mb-2">3+</div>
                <p className="text-white/80">Года опыта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-32 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-6xl md:text-7xl font-oswald font-bold mb-16 animate-fade-in">
            КОНТАКТЫ
          </h2>
          <form className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div>
              <Input
                type="text"
                placeholder="Ваше имя"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
              />
            </div>
            <div>
              <Textarea
                placeholder="Расскажите о вашем проекте"
                rows={6}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white resize-none"
              />
            </div>
            <Button size="lg" className="w-full bg-white text-secondary hover:bg-white/90">
              Отправить заявку
            </Button>
          </form>
          <div className="mt-16 flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Mail" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Send" size={24} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-8 px-6">
        <div className="container mx-auto text-center text-white/50 text-sm">
          <p>© 2024 AI Photo. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
