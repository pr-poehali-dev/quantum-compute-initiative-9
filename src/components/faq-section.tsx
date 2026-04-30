import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько слайдов входит в один комплект инфографики?",
      answer:
        "Стандартный комплект — 6 слайдов: главное фото, УТП бренда, состав/материалы, размерная сетка, преимущества и призыв к действию. По необходимости можем добавить или убрать слайды под ваш товар.",
    },
    {
      question: "Сколько стоит инфографика для одного товара?",
      answer:
        "Стоимость зависит от сложности товара и количества слайдов. Напишите нам — подберём оптимальный вариант и озвучим точную цену в течение часа.",
    },
    {
      question: "Как мне передать фото товара?",
      answer:
        "После оформления заказа мы отправим ссылку на Google Диск или Telegram — загружаете туда фото и заполняете короткий бриф. Принимаем фото любого качества, но лучше — белый фон.",
    },
    {
      question: "Вы работаете и с Wildberries, и с Ozon одновременно?",
      answer:
        "Да, делаем инфографику сразу для обеих площадок с учётом требований каждой. Wildberries и Ozon имеют разные требования к размерам и оформлению — мы знаем все нюансы.",
    },
    {
      question: "Что если мне не понравится результат?",
      answer:
        "Предоставляем 2 раунда правок до полного утверждения. Ваша задача — дать конкретный фидбек, наша — реализовать. Уходим в работу только когда вы довольны результатом.",
    },
    {
      question: "Есть ли у вас примеры работ?",
      answer:
        "Конечно! Напишите нам — пришлём актуальное портфолио по вашей категории товара, чтобы вы оценили стиль и качество работ именно для вашей ниши.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы об инфографике для Wildberries и Ozon.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}