import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';

export function Hero() {
  const videoPlaceholder = PlaceHolderImages.find(
    (img) => img.id === 'report-video-1'
  );

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

          {videoPlaceholder && (
            <Card className="group relative mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={videoPlaceholder.imageUrl}
                alt={videoPlaceholder.description}
                width={1280}
                height={720}
                className="aspect-video w-full object-cover"
                data-ai-hint={videoPlaceholder.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <PlayCircle className="h-20 w-20 text-white/80 transition-transform group-hover:scale-110 group-hover:text-white" />
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold">
                  A Reportagem Exclusiva que a Indústria Clandestina Não Quer
                  que Você Assista.
                </p>
              </div>
            </Card>
          )}

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
