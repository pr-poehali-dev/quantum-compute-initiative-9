export function SafetySection() {
  const portfolio = [
    {
      url: "https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/bucket/9f286ad8-a081-4c59-863e-aa6e1e6bbcc9.jpg",
      title: "Кружка с блюдцем",
      tag: "Посуда",
    },
    {
      url: "https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/bucket/71f4f33a-38ea-4f69-b184-98e87f4ccae5.png",
      title: "Дизайн карточек WB & Ozon",
      tag: "Электроника",
    },
    {
      url: "https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/bucket/06bfb689-5fb8-4b75-b7e9-754d1c8c54bf.jpg",
      title: "Кружка розовая",
      tag: "Посуда",
    },
    {
      url: "https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/bucket/c7782c91-3896-4e60-8673-8020cd68cd69.jpg",
      title: "Чайная пара",
      tag: "Подарки",
    },
    {
      url: "https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/bucket/d0fdef51-c07d-4a2f-b7bb-9bb4c44db010.jpg",
      title: "Кружка Стич",
      tag: "Детские товары",
    },
  ]

  return (
    <section id="safety" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Примеры работ</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Реальные проекты для продавцов Wildberries и Ozon — смотрите на качество и стиль
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl border border-red-500/20 hover:border-red-500/60 transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-red-400 font-space-mono mb-1 block">{item.tag}</span>
                <p className="text-white font-semibold font-orbitron text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
