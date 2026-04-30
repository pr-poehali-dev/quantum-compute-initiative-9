import { useState } from "react";

const categories = ["Все"];

const dishes = [
  {
    name: "Шаурма",
    description: "Сочное мясо с овощами и соусом в тонком лаваше",
    price: "—",
    category: "Все",
    emoji: "🌯",
    tag: "Хит",
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все"
    ? dishes
    : dishes.filter((d) => d.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Наше</p>
          <h2 className="font-display text-5xl font-bold text-foreground mb-6">Меню</h2>
          <div className="ornament-line max-w-xs mx-auto">
            <span className="text-primary">✦</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((dish, i) => (
            <div
              key={dish.name}
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-secondary">
                {dish.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  {dish.tag && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 flex-shrink-0">
                      {dish.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{dish.description}</p>
              </div>
              <div className="text-primary font-semibold text-lg flex-shrink-0">{dish.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;