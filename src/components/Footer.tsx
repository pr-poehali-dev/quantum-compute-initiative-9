const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl font-bold text-primary tracking-widest">ХАНМАН</div>
        <p className="text-sm text-muted-foreground text-center">
          Восточная кухня · Тепло и гостеприимство
        </p>
        <p className="text-xs text-muted-foreground">© 2024 ХАНМАН. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
