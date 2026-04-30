const tournaments = [
  {
    game: "CS2",
    title: "R2D Open #12",
    date: "15 мая 2025",
    prize: "10 000 ₽",
    status: "Открыта регистрация",
    statusColor: "text-accent",
  },
  {
    game: "Dota 2",
    title: "Майский кубок",
    date: "22 мая 2025",
    prize: "7 500 ₽",
    status: "Открыта регистрация",
    statusColor: "text-accent",
  },
  {
    game: "Valorant",
    title: "R2D Champions",
    date: "1 июня 2025",
    prize: "15 000 ₽",
    status: "Скоро",
    statusColor: "text-primary",
  },
];

const TournamentsSection = () => {
  return (
    <section id="tournaments" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-[0.5em] uppercase mb-3 neon-cyan">Соревнования</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">ТУРНИРЫ</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Регулярные турниры с призовым фондом. Докажи, что ты лучший в клубе.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {tournaments.map((t) => (
            <div
              key={t.title}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center font-display text-xs font-black text-primary">
                  {t.game}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors tracking-wider text-sm">
                    {t.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{t.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-sm font-bold text-foreground">Призовой фонд</div>
                  <div className="font-display text-lg font-black text-primary neon-text">{t.prize}</div>
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest ${t.statusColor}`}>
                  {t.status}
                </div>
                <a
                  href="#contacts"
                  className="px-4 py-2 rounded border border-primary text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Участвовать
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden h-72 border border-border relative">
          <img
            src="https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/files/566269f5-f09d-4f9e-9b9d-5522c58acd54.jpg"
            alt="Турнир R2D CLUB"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-2xl font-black text-white neon-text">Стань чемпионом R2D CLUB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
