const tariffs = [
  {
    name: "Стандарт",
    price: "80 ₽",
    per: "/ час",
    color: "border-border",
    highlight: false,
    features: [
      "ПК Core i5 / RTX 3060",
      "Монитор 144 Гц",
      "Игровая периферия",
      "Доступ к 100+ играм",
      "Высокоскоростной интернет",
    ],
  },
  {
    name: "VIP",
    price: "150 ₽",
    per: "/ час",
    color: "border-primary",
    highlight: true,
    features: [
      "ПК Core i9 / RTX 4080",
      "Монитор 240 Гц изогнутый",
      "Топовая периферия HyperX",
      "Приоритетное бронирование",
      "Отдельная VIP-зона",
    ],
  },
  {
    name: "Ночной",
    price: "500 ₽",
    per: "/ ночь",
    color: "border-accent",
    highlight: false,
    features: [
      "Любой ПК на выбор",
      "С 23:00 до 8:00",
      "Безлимитный доступ",
      "Бесплатный чай/кофе",
      "Скидка 40% vs обычного",
    ],
  },
];

const TariffsSection = () => {
  return (
    <section id="tariffs" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-[0.5em] uppercase mb-3 neon-cyan">Выбери свой уровень</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
            ТАРИФЫ
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tariffs.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-xl border-2 ${t.color} bg-card p-8 flex flex-col transition-all duration-300 hover:scale-105 ${
                t.highlight ? "neon-border" : ""
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full">
                  Популярный
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display text-lg font-black text-foreground mb-2 tracking-wider">{t.name}</h3>
                <div className="flex items-end gap-1">
                  <span className={`font-display text-4xl font-black ${t.highlight ? "text-primary neon-text" : t.color === "border-accent" ? "text-accent neon-cyan" : "text-foreground"}`}>
                    {t.price}
                  </span>
                  <span className="text-muted-foreground text-sm mb-1">{t.per}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className={`mt-0.5 text-xs ${t.highlight ? "text-primary" : t.color === "border-accent" ? "text-accent" : "text-muted-foreground"}`}>▶</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacts"
                className={`block text-center py-3 rounded font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/80"
                    : t.color === "border-accent"
                    ? "border border-accent text-accent hover:bg-accent/10"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Выбрать
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TariffsSection;
