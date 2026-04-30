const AtmosphereSection = () => {
  return (
    <section id="atmosphere" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Почувствуйте</p>
          <h2 className="font-display text-5xl font-bold text-foreground mb-6">Атмосфера</h2>
          <div className="ornament-line max-w-xs mx-auto">
            <span className="text-primary">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden h-80 md:h-[500px]">
            <img
              src="https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/files/fe2e0ed4-b6f7-4f57-950b-63c199304fc1.jpg"
              alt="Интерьер ХАНМАН"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden h-56">
              <img
                src="https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/files/a1d26099-b502-4efa-b533-2bf263cb7ead.jpg"
                alt="Блюда ХАНМАН"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-56">
              <img
                src="https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/files/36e12041-eed9-4788-a623-0e53c4974e50.jpg"
                alt="Супы ХАНМАН"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { num: "50+", label: "Блюд в меню", sub: "свежих каждый день" },
            { num: "12", label: "Лет традиций", sub: "восточного гостеприимства" },
            { num: "4.9★", label: "Рейтинг гостей", sub: "тысячи довольных отзывов" },
          ].map((stat) => (
            <div key={stat.num} className="text-center p-8 rounded-xl border border-border bg-card">
              <div className="font-display text-4xl font-bold text-primary mb-2">{stat.num}</div>
              <div className="text-foreground font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtmosphereSection;
