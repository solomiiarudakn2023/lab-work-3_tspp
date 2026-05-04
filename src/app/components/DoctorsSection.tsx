import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const doctors = [
  {
    id: 1,
    name: 'Олена Коваленко',
    specialty: 'Кардіолог',
    experience: '15 років досвіду',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces',
    tags: ['Гіпертонія', 'ІХС', 'Аритмія'],
  },
  {
    id: 2,
    name: 'Андрій Петренко',
    specialty: 'Невролог',
    experience: '12 років досвіду',
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces',
    tags: ['Головний біль', 'Остеохондроз', 'Неврит'],
  },
  {
    id: 3,
    name: 'Марія Іваненко',
    specialty: 'Педіатр',
    experience: '10 років досвіду',
    rating: 5.0,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=faces',
    tags: ['Вакцинація', 'Діагностика', 'Профілактика'],
  },
  {
    id: 4,
    name: 'Віктор Мельник',
    specialty: 'Хірург',
    experience: '18 років досвіду',
    rating: 4.9,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=faces',
    tags: ['Лапароскопія', 'Травматологія', 'Операції'],
  },
  {
    id: 5,
    name: 'Наталія Шевченко',
    specialty: 'Терапевт',
    experience: '14 років досвіду',
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=faces',
    tags: ['Загальна практика', 'Діагностика', 'Профілактика'],
  },
  {
    id: 6,
    name: 'Ігор Бондаренко',
    specialty: 'Ортопед',
    experience: '16 років досвіду',
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=400&fit=crop&crop=faces',
    tags: ['Суглоби', 'Хребет', 'Травми'],
  },
];

export function DoctorsSection() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="doctors" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наші спеціалісти
          </h2>
          <p className="text-lg text-gray-600">
            Команда досвідчених лікарів з сучасним підходом до лікування та діагностики
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600 mt-1">{doctor.experience}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{doctor.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">({doctor.reviews} відгуків)</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {doctor.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={scrollToAppointment}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Записатися на прийом
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
