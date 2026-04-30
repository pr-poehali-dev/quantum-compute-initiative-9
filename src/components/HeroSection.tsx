const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/files/5c78c6f9-df2d-4ebb-a019-59e4ea99e061.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-accent text-xs tracking-[0.5em] uppercase mb-6 fade-in neon-cyan" style={{ animationDelay: "0.2s" }}>
          Компьютерный клуб нового поколения
        </p>

        <h1 className="font-display mb-4 fade-in" style={{ animationDelay: "0.4s" }}>
          <span className="block text-7xl md:text-9xl font-black text-primary neon-text tracking-widest">R2D</span>
          <span className="block text-4xl md:text-6xl font-black text-accent neon-cyan tracking-[0.5em]">CLUB</span>
        </h1>

        <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8 fade-in" style={{ animationDelay: "0.6s" }} />

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 fade-in" style={{ animationDelay: "0.8s" }}>
          Топовые ПК, молниеносный интернет, RGB-атмосфера.<br />
          Играй на максимуме. Побеждай по-настоящему.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: "1s" }}>
          <a
            href="#tariffs"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm rounded hover:bg-primary/80 transition-all duration-300 hover:scale-105"
          >
            Смотреть тарифы
          </a>
          <a
            href="#contacts"
            className="px-8 py-4 border border-accent/50 text-accent font-bold tracking-widest uppercase text-sm rounded hover:bg-accent/10 transition-all duration-300"
          >
            Забронировать место
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto fade-in" style={{ animationDelay: "1.2s" }}>
          {[
            { num: "50+", label: "Мест" },
            { num: "240", label: "Гц мониторы" },
            { num: "24/7", label: "Работаем" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-black text-primary neon-text">{s.num}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
