import { Card, CardContent } from './ui/card';
import {
  Stethoscope,
  Clock,
  Shield,
  Heart,
  Users,
  Award,
  PhoneCall,
  CalendarCheck
} from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Сучасне обладнання',
    description: 'Новітнє діагностичне та лікувальне обладнання від провідних світових виробників',
  },
  {
    icon: Users,
    title: 'Досвідчені лікарі',
    description: 'Команда кваліфікованих спеціалістів з багаторічним досвідом роботи',
  },
  {
    icon: Clock,
    title: 'Зручний графік',
    description: 'Працюємо 7 днів на тиждень, включаючи вихідні та святкові дні',
  },
  {
    icon: Shield,
    title: 'Страхова підтримка',
    description: 'Співпрацюємо з усіма основними страховими компаніями України',
  },
  {
    icon: Heart,
    title: 'Індивідуальний підхід',
    description: 'Персоналізоване лікування з урахуванням особливостей кожного пацієнта',
  },
  {
    icon: Award,
    title: 'Високі стандарти',
    description: 'Міжнародні стандарти якості медичних послуг та безпеки',
  },
  {
    icon: CalendarCheck,
    title: 'Онлайн-запис',
    description: 'Зручна система онлайн-запису на прийом у будь-який час доби',
  },
  {
    icon: PhoneCall,
    title: 'Підтримка 24/7',
    description: 'Цілодобова телефонна консультація та екстрена медична допомога',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Чому обирають нас
          </h2>
          <p className="text-lg text-gray-600">
            Ми створили комфортні умови для якісного медичного обслуговування
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
