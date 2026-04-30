const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-[0.5em] uppercase mb-3 neon-cyan">Найди нас</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">КОНТАКТЫ</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors tracking-wider">Адрес</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Укажите адрес клуба<br />
              <span className="text-xs">город, улица, дом</span>
            </p>
          </div>
          <div className="text-center p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors tracking-wider">Телефон</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              +7 (___) ___-__-__<br />
              <span className="text-xs text-accent">Работаем 24/7</span>
            </p>
          </div>
          <div className="text-center p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors tracking-wider">Соцсети</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Telegram / VK / Instagram<br />
              <span className="text-xs">@r2dclub</span>
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto text-center p-12 rounded-2xl border border-primary/40 bg-card relative overflow-hidden neon-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative z-10">
            <div className="font-display text-4xl font-black text-primary neon-text mb-2">READY?</div>
            <h3 className="font-display text-xl font-black text-foreground mb-4 tracking-wider">
              Забронируй место прямо сейчас
            </h3>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Позвони нам или напиши в Telegram — забронируем лучшее место под тебя
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+7"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm rounded hover:bg-primary/80 transition-all duration-300 hover:scale-105"
              >
                Позвонить
              </a>
              <a
                href="https://t.me/"
                className="px-8 py-4 border border-accent/50 text-accent font-bold tracking-widest uppercase text-sm rounded hover:bg-accent/10 transition-all duration-300"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
