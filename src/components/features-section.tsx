import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Рост конверсии",
    description: "Профессиональная инфографика повышает конверсию карточки товара на 30–60% — покупатели лучше понимают продукт и принимают решение быстрее.",
    icon: "zap",
    badge: "+60%",
  },
  {
    title: "WB & Ozon форматы",
    description: "Создаём инфографику строго по требованиям площадок: правильные размеры, отступы, форматы файлов для Wildberries и Ozon.",
    icon: "target",
    badge: "Стандарт",
  },
  {
    title: "Подчёркиваем УТП",
    description: "Выделяем ключевые преимущества вашего товара так, чтобы покупатель за 3 секунды понял, почему выбрать именно вас.",
    icon: "brain",
    badge: "УТП",
  },
  {
    title: "Быстрые сроки",
    description: "Готовые слайды от 1 рабочего дня. Без долгих согласований — работаем по чёткому брифу и сдаём в срок.",
    icon: "globe",
    badge: "1 день",
  },
  {
    title: "Полный комплект",
    description: "Главное фото, слайды-инфографика, Rich-контент — всё для максимальной привлекательности вашей карточки товара.",
    icon: "link",
    badge: "Комплект",
  },
  {
    title: "Рост в поиске",
    description: "Карточки с качественной инфографикой получают больше кликов, что улучшает позиции в поисковой выдаче маркетплейса.",
    icon: "lock",
    badge: "SEO",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему продавцы выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Инфографика — это не просто красиво. Это инструмент продаж, который работает 24/7 за вас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}