import { Button } from './ui/button';
import { Clock, Shield, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                Сертифікована медична установа
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ваше здоров'я –<br />
              <span className="text-blue-600">наш пріоритет</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Професійна медична допомога від кваліфікованих спеціалістів. Сучасне обладнання, індивідуальний підхід та комфортні умови для кожного пацієнта.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-base"
                onClick={scrollToAppointment}
              >
                Записатися на прийом
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={() => {
                  const element = document.getElementById('doctors');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Наші лікарі
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-600">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Фахівців</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-600">
                  <Award className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Років досвіду</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Підтримка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                alt="Медичний персонал"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Страхова підтримка</div>
                  <div className="text-xs text-gray-600">Працюємо зі всіма страховими</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
