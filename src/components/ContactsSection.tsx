const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Мы ждём вас</p>
          <h2 className="font-display text-5xl font-bold text-foreground mb-6">Контакты</h2>
          <div className="ornament-line max-w-xs mx-auto">
            <span className="text-primary">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="font-display font-semibold text-foreground mb-2">Адрес</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Укажите ваш адрес<br />
              город, улица, дом
            </p>
          </div>
          <div className="text-center p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-display font-semibold text-foreground mb-2">Телефон</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              +7 (___) ___-__-__<br />
              <span className="text-xs">Ежедневно 11:00 — 23:00</span>
            </p>
          </div>
          <div className="text-center p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="font-display font-semibold text-foreground mb-2">Часы работы</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Пн — Пт: 11:00 — 23:00<br />
              Сб — Вс: 10:00 — 00:00
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto text-center p-12 rounded-2xl border border-primary/30 bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <div className="text-4xl mb-4">🌙</div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Забронируйте стол
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Позвоните нам или напишите в WhatsApp — мы подберём лучшее место для вашего вечера
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+7"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Позвонить
              </a>
              <a
                href="https://wa.me/"
                className="px-8 py-4 border border-border text-foreground font-semibold tracking-wider uppercase text-sm rounded hover:border-primary hover:text-primary transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
