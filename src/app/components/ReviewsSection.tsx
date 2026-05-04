import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Олександр Сидоренко',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    rating: 5,
    date: '15.04.2026',
    specialty: 'Кардіолог - Олена Коваленко',
    text: 'Чудовий лікар! Олена Петрівна дуже уважно поставилася до моєї проблеми, детально все пояснила і призначила ефективне лікування. Після курсу терапії самопочуття значно покращилося. Рекомендую!',
  },
  {
    id: 2,
    name: 'Тетяна Мороз',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    rating: 5,
    date: '12.04.2026',
    specialty: 'Педіатр - Марія Іваненко',
    text: 'Дуже вдячна Марії Іванівні за професійний підхід до лікування моєї дитини. Лікар знайшов контакт з малюком, все пройшло комфортно. Клініка обладнана всім необхідним, чисто і затишно.',
  },
  {
    id: 3,
    name: 'Василь Ковальчук',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    rating: 5,
    date: '10.04.2026',
    specialty: 'Невролог - Андрій Петренко',
    text: 'Звернувся з хронічними головними болями. Андрій Володимирович призначив комплексне обстеження, виявив причину і підібрав лікування. Через місяць біль повністю пройшов. Професіонал своєї справи!',
  },
  {
    id: 4,
    name: 'Ірина Гончаренко',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
    rating: 5,
    date: '08.04.2026',
    specialty: 'Хірург - Віктор Мельник',
    text: 'Віктор Анатолійович провів складну операцію на високому рівні. Відновлення пройшло швидко і без ускладнень. Лікар постійно на зв\'язку, контролював весь процес реабілітації. Дякую!',
  },
  {
    id: 5,
    name: 'Микола Бойко',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
    rating: 5,
    date: '05.04.2026',
    specialty: 'Терапевт - Наталія Шевченко',
    text: 'Чудова клініка! Наталія Олександрівна - справжній професіонал. Швидко поставила діагноз, все детально пояснила. Персонал ввічливий, запис зручний, без черг. Рекомендую всім!',
  },
  {
    id: 6,
    name: 'Світлана Литвиненко',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces',
    rating: 5,
    date: '02.04.2026',
    specialty: 'Ортопед - Ігор Бондаренко',
    text: 'Ігор Степанович допоміг вирішити проблему з хребтом, яка турбувала роками. Призначив курс лікування, який дійсно допоміг. Дуже вдячна за професіоналізм та уважне ставлення!',
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Відгуки наших пацієнтів
          </h2>
          <p className="text-lg text-gray-600">
            Ми цінуємо довіру наших пацієнтів і постійно працюємо над покращенням якості медичних послуг
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-blue-200" />
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-blue-600">{review.specialty}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-white rounded-lg shadow-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.9</div>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600 mt-1">Середній рейтинг</div>
            </div>

            <div className="h-12 w-px bg-gray-300" />

            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">825+</div>
              <div className="text-sm text-gray-600 mt-2">Задоволених пацієнтів</div>
            </div>

            <div className="h-12 w-px bg-gray-300" />

            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600 mt-2">Рекомендують нас</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
