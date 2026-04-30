const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(https://cdn.poehali.dev/projects/56e2fe67-7910-481c-94d9-c27d6a7dfd59/files/fe2e0ed4-b6f7-4f57-950b-63c199304fc1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 fade-in" style={{ animationDelay: "0.2s" }}>
          Восточная кухня
        </p>

        <h1
          className="font-display text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-widest fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          ХАНМАН
        </h1>

        <div className="ornament-line mb-8 fade-in" style={{ animationDelay: "0.6s" }}>
          <span className="text-primary text-xl">✦</span>
        </div>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10 fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Путешествие вкусов Востока — от ароматного плова до сочного шашлыка. 
          Приходите за настоящим гостеприимством.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: "1s" }}>
          <a
            href="#menu"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Смотреть меню
          </a>
          <a
            href="#contacts"
            className="px-8 py-4 border border-foreground/30 text-foreground font-semibold tracking-wider uppercase text-sm rounded hover:border-primary hover:text-primary transition-all duration-300"
          >
            Забронировать стол
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
