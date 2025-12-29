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
      title: 'ИИ-генерация фото',
      description: 'Создание уникальных изображений для вашего бренда с помощью нейросетей'
    },
    {
      title: 'Маркетинговые кампании',
      description: 'Визуальный контент для рекламных кампаний и соцсетей'
    },
    {
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
    <div className="min-h-screen bg-white text-black font-onest">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-built font-bold">
            <span className="text-primary">RORY</span>
            <span className="text-secondary">.AI</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['home', 'portfolio', 'services', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary font-built ${
                  activeSection === section ? 'text-primary' : 'text-black/60'
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
          <Button onClick={() => scrollToSection('contact')} size="sm" className="bg-primary hover:bg-primary/90 text-white font-built">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-6 animate-fade-in">
              <div className="text-9xl md:text-[12rem] lg:text-[16rem] font-built font-bold leading-none tracking-tighter">
                <span className="text-primary">RORY</span>
                <span className="text-secondary">.AI</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-built uppercase tracking-tight text-black/80">
                НЕСТАНДАРТНАЯ ТИПОГРАФИКА!
              </h2>
              <p className="text-2xl md:text-3xl font-light text-black/60 max-w-3xl mx-auto leading-relaxed">
                Влезаем там где не надо, хаос <br /> Смешно, дерзко, креативно, фэшн
              </p>
            </div>
            <div className="flex gap-6 justify-center">
              <Button onClick={() => scrollToSection('portfolio')} size="lg" className="bg-primary hover:bg-primary/90 text-white font-built text-lg px-10 py-7">
                СМОТРЕТЬ РАБОТЫ
              </Button>
              <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-built text-lg px-10 py-7">
                ОБСУДИТЬ ПРОЕКТ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-32 px-6 bg-black text-white relative">
        <div className="absolute top-20 left-20 text-primary text-8xl">✗</div>
        <div className="absolute bottom-20 right-20 text-secondary text-8xl">✗</div>
        <div className="container mx-auto">
          <h2 className="text-7xl md:text-9xl font-built font-bold mb-20 animate-fade-in">
            ПОРТФОЛИО
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden aspect-square cursor-pointer animate-fade-in border-4 border-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-sm text-white font-built uppercase tracking-widest mb-2">{item.category}</p>
                    <h3 className="text-3xl font-built font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">✗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen py-32 px-6 bg-primary text-white">
        <div className="container mx-auto">
          <h2 className="text-7xl md:text-9xl font-built font-bold mb-20 animate-fade-in">
            УСЛУГИ
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-4 border-white p-10 hover:bg-white hover:text-primary transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">✗</div>
                <h3 className="text-3xl font-built font-bold mb-4 uppercase">{service.title}</h3>
                <p className="text-lg leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-32 px-6 bg-secondary text-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-7xl md:text-9xl font-built font-bold mb-20 animate-fade-in">
            О МНЕ
          </h2>
          <div className="space-y-12 text-2xl leading-relaxed">
            <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Я специализируюсь на создании уникального визуального контента для брендов с помощью искусственного интеллекта. 
              Мой подход сочетает креативность дизайнера и возможности современных нейросетей.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Работаю с fashion-брендами, e-commerce проектами и маркетинговыми агентствами. 
              Создаю контент для рекламных кампаний, соцсетей и брендинга.
            </p>
            <div className="grid md:grid-cols-3 gap-12 pt-16">
              <div className="animate-fade-in border-4 border-black p-8 text-center" style={{ animationDelay: '0.3s' }}>
                <div className="text-7xl font-built font-bold mb-4">150+</div>
                <p className="text-xl font-built uppercase">Проектов</p>
              </div>
              <div className="animate-fade-in border-4 border-black p-8 text-center" style={{ animationDelay: '0.4s' }}>
                <div className="text-7xl font-built font-bold mb-4">50+</div>
                <p className="text-xl font-built uppercase">Клиентов</p>
              </div>
              <div className="animate-fade-in border-4 border-black p-8 text-center" style={{ animationDelay: '0.5s' }}>
                <div className="text-7xl font-built font-bold mb-4">3+</div>
                <p className="text-xl font-built uppercase">Года опыта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-32 px-6 bg-white text-black relative">
        <div className="absolute top-20 right-20 text-primary text-9xl rotate-45">✗</div>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-7xl md:text-9xl font-built font-bold mb-20 animate-fade-in">
            КОНТАКТЫ
          </h2>
          <form className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div>
              <Input
                type="text"
                placeholder="Ваше имя"
                className="border-4 border-black text-black placeholder:text-black/40 focus:border-primary text-xl py-8 font-onest"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="border-4 border-black text-black placeholder:text-black/40 focus:border-primary text-xl py-8 font-onest"
              />
            </div>
            <div>
              <Textarea
                placeholder="Расскажите о вашем проекте"
                rows={8}
                className="border-4 border-black text-black placeholder:text-black/40 focus:border-primary resize-none text-xl font-onest"
              />
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-built text-2xl py-8">
              ОТПРАВИТЬ ЗАЯВКУ
            </Button>
          </form>
          <div className="mt-20 flex justify-center gap-8">
            <a href="#" className="text-black hover:text-primary transition-colors">
              <div className="w-16 h-16 border-4 border-black hover:border-primary flex items-center justify-center">
                <Icon name="Instagram" size={32} />
              </div>
            </a>
            <a href="#" className="text-black hover:text-primary transition-colors">
              <div className="w-16 h-16 border-4 border-black hover:border-primary flex items-center justify-center">
                <Icon name="Mail" size={32} />
              </div>
            </a>
            <a href="#" className="text-black hover:text-primary transition-colors">
              <div className="w-16 h-16 border-4 border-black hover:border-primary flex items-center justify-center">
                <Icon name="Send" size={32} />
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white border-t-4 border-white py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-xl font-built">© 2024 RORY.AI — ВСЁ ПРАВА ЗАЩИЩЕНЫ</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
