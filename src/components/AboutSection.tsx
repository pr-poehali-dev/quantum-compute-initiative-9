const zones = [
  { icon: "🖥️", title: "Стандартная зона", desc: "30 мест с игровыми ПК Core i5/RTX 3060, мониторы 144 Гц, игровые кресла" },
  { icon: "👑", title: "VIP-зона", desc: "10 мест с топовыми ПК Core i9/RTX 4080, изогнутые мониторы 240 Гц, полная изоляция" },
  { icon: "🎮", title: "Консольная зона", desc: "PS5, Xbox Series X, большие экраны для игры с друзьями на диване" },
  { icon: "🏆", title: "Турнирная зона", desc: "Отдельный зал для соревнований, стримовое оборудование, призовой фонд" },
  { icon: "🥤", title: "Бар и снеки", desc: "Энергетики, кофе, снеки — всё для долгих игровых сессий без отрыва" },
  { icon: "🎧", title: "Акустика", desc: "Профессиональные наушники в каждом месте, никакого шума из соседних кресел" },
];

const ZonesSection = () => {
  return (
    <section id="zones" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-accent text-xs tracking-[0.5em] uppercase mb-3 neon-cyan">Наше пространство</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-6">ЗОНЫ</h2>
            <div className="w-24 h-px bg-gradient-to-r from-primary to-transparent mb-8" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              R2D CLUB — это не просто компьютерный клуб. Это арена, где каждое место
              настроено на победу. Мы обновляем железо каждые 6 месяцев.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Сюда приходят, чтобы побеждать. Ультра-быстрый интернет 1 Гбит/с,
              никаких лагов, только чистый геймплей.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden h-80 border border-border neon-border">
            <img
              src="https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/files/140029fb-18db-4b54-9388-cef64e4442dc.jpg"
              alt="R2D CLUB Setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {zones.map((z) => (
            <div
              key={z.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{z.icon}</div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors tracking-wider">
                {z.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{z.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonesSection;
