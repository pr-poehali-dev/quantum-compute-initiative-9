const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <span className="font-display text-xl font-black text-primary neon-text tracking-widest">R2D</span>
          <span className="font-display text-xl font-black text-accent neon-cyan tracking-widest">CLUB</span>
        </div>
        <p className="text-xs text-muted-foreground text-center tracking-wider uppercase">
          Компьютерный клуб нового поколения · 24/7
        </p>
        <p className="text-xs text-muted-foreground">© 2025 R2D CLUB. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
