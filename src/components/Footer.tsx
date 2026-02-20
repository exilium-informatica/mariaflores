const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg font-semibold text-foreground">
          Maria Flores
        </p>
        <p className="text-muted-foreground font-body text-sm">
          © {new Date().getFullYear()} Maria Flores. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
