import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Ольга Семёнова",
    role: "Продавец на Wildberries, категория «Красота»",
    avatar: "/professional-woman-scientist.png",
    content:
      "После обновления карточек конверсия выросла с 2% до 5,8% за две недели. Инфографика буквально объяснила покупателям, за что они платят.",
  },
  {
    name: "Дмитрий Захаров",
    role: "Поставщик на Ozon, категория «Дом и сад»",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Сделали инфографику для 12 SKU — продажи выросли в среднем на 43%. Особенно доволен скоростью: всё готово было за 3 дня.",
  },
  {
    name: "Наталья Крылова",
    role: "Бренд детских товаров, WB + Ozon",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Работаем уже полгода. Каждый новый товар сразу идёт на инфографику. Возврат инвестиций ощущается с первой же недели после публикации.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят наши клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Продавцы Wildberries и Ozon уже увеличили свои продажи с нашей инфографикой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}