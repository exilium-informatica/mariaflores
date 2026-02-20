const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-semibold text-foreground">
          Maria Flores
        </a>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#categorias" className="text-muted-foreground hover:text-foreground font-body text-sm tracking-wide transition-colors">
              Produtos
            </a>
          </li>
          <li>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground font-body text-sm tracking-wide transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contato" className="text-muted-foreground hover:text-foreground font-body text-sm tracking-wide transition-colors">
              Contato
            </a>
          </li>
        </ul>
        <a
          href="#contato"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-body text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Encomende
        </a>
      </nav>
    </header>
  );
};

export default Header;
