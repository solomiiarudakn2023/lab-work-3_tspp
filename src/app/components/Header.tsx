import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
              <span className="text-xl font-bold text-white">M+</span>
            </div>
            <span className="text-xl font-bold text-gray-900">МедіКлінік</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Головна
            </button>
            <button
              onClick={() => scrollToSection('doctors')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Лікарі
            </button>
            <button
              onClick={() => scrollToSection('appointment')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Запис
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Відгуки
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакти
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+380441234567" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+38 (044) 123-45-67</span>
            </a>
            <Button onClick={() => scrollToSection('appointment')} className="bg-blue-600 hover:bg-blue-700">
              Записатися
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Головна
            </button>
            <button
              onClick={() => scrollToSection('doctors')}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Лікарі
            </button>
            <button
              onClick={() => scrollToSection('appointment')}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Запис
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Відгуки
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Контакти
            </button>
            <div className="flex flex-col gap-3 pt-4 border-t">
              <a href="tel:+380441234567" className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="h-4 w-4" />
                <span>+38 (044) 123-45-67</span>
              </a>
              <Button onClick={() => scrollToSection('appointment')} className="bg-blue-600 hover:bg-blue-700 w-full">
                Записатися на прийом
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
