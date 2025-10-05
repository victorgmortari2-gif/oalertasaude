import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {year} O Alerta da Saúde. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm text-muted-foreground hover:underline"
            href="#"
          >
            Termos de Serviço
          </Link>
          <Link
            className="text-sm text-muted-foreground hover:underline"
            href="#"
          >
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
