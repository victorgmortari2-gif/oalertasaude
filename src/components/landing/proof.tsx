import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AlertTriangle, FlaskConical, PlayCircle, Skull } from 'lucide-react';

export function Proof() {
  const videoPlaceholder = PlaceHolderImages.find(
    (img) => img.id === 'report-video-2'
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A TRAGÉDIA É REAL: VEJA AS PROVAS!
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              O custo de um drinque barato pode ser a cegueira ou a morte. Isso
              não é alarme: é o que está acontecendo AGORA no Brasil.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Surtos em Todo o País
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Uma noite de festa transformada em pesadelo de toxicologia.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Skull className="h-6 w-6 text-primary" />
                  Falsificadores Lucram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  O metanol é mais barato que o etanol. Sua vida vale o lucro
                  deles?
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <FlaskConical className="h-6 w-6 text-primary" />O Fato
                  Científico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Metanol vira Ácido Fórmico no seu fígado. Esse ácido ataca,
                  principalmente, o Nervo Óptico.
                </p>
              </CardContent>
            </Card>
          </div>

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
                  O Depoimento Chocante de Quem Sobreviveu (ou o Alerta Máximo
                  dos Especialistas).
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
