import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <span className="text-xl font-bold">M+</span>
              </div>
              <span className="text-xl font-bold">МедіКлінік</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Професійна медична допомога для всієї родини. Сучасне обладнання та кваліфіковані спеціалісти.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Навігація</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Головна
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('doctors');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Наші лікарі
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('appointment');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Запис на прийом
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('reviews');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Відгуки пацієнтів
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Послуги</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Загальна терапія</li>
              <li>Кардіологія</li>
              <li>Неврологія</li>
              <li>Педіатрія</li>
              <li>Хірургія</li>
              <li>Ортопедія</li>
              <li>Діагностика</li>
              <li>Лабораторні дослідження</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  м. Київ, вул. Медична, 123
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+380441234567" className="text-sm text-gray-400 hover:text-white transition-colors block">
                    +38 (044) 123-45-67
                  </a>
                  <a href="tel:+380501234567" className="text-sm text-gray-400 hover:text-white transition-colors block">
                    +38 (050) 123-45-67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@mediclinic.ua" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@mediclinic.ua
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <div>Пн-Пт: 08:00 - 20:00</div>
                  <div>Сб: 09:00 - 18:00</div>
                  <div>Нд: 10:00 - 16:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 МедіКлінік. Всі права захищено.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Політика конфіденційності
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Умови використання
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
