const AboutSection = () => {
  const features = [
    { emoji: "🫕", title: "Живой огонь", desc: "Казан на живом огне — единственный способ приготовить настоящий плов" },
    { emoji: "🌿", title: "Свежие специи", desc: "Специи привозим прямо из Ферганской долины и горных рынков" },
    { emoji: "🤝", title: "Гостеприимство", desc: "На Востоке гость — священен. Мы чтим эту традицию каждый день" },
    { emoji: "🏺", title: "Рецепты предков", desc: "Блюда по семейным рецептам, переданным через несколько поколений" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">История</p>
            <h2 className="font-display text-5xl font-bold text-foreground mb-6">О нас</h2>
            <div className="ornament-line mb-8">
              <span className="text-primary">✦</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              ХАНМАН — это место, где Восток встречает вас с распростёртыми объятиями. 
              Наши повара выросли на этих блюдах, помнят запах маминого плова и знают, 
              каким должен быть настоящий шашлык.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Мы создали это место для тех, кто хочет не просто поесть, 
              а почувствовать тепло восточного гостеприимства, неспешную атмосферу 
              и подлинный вкус традиционной кухни.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{f.emoji}</div>
                <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
