import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Hero() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              🩸🚨 O Inimigo Invisível no Seu Copo: Metanol Cega e Mata, e Você
              Nem Percebe.🚨🩸
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              O ALERTA DE SAÚDE QUE A GRANDE MÍDIA NÃO TE EXPLICA POR COMPLETO.
            </p>
          </div>
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            METANOL: O VENENO SILENCIOSO ESTÁ NO SEU DESTILADO. A CADA GOLE, VOCÊ
            ARRISCA SUA VISÃO E SUA VIDA!
          </h2>

          <Card className="relative mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/r1c6MlDGZGw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>

          <div className="flex flex-col gap-4 pt-6">
            <Button asChild size="lg" className="font-bold text-lg">
              <Link href="#pricing">
                🚀 CLIQUE E TENHA SUA DEFESA AGORA MESMO! 🚀
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              (ACESSO IMEDIATO POR APENAS R$ 17,90)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
