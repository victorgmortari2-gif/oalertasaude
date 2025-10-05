import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const includedItems = [
  {
    title: 'PROTOCOLO DE AÇÃO IMEDIATA (BÔNUS VITAL)',
    description:
      'O que fazer no primeiro minuto crucial. A informação VITAL que você DEVE dar ao médico para acionar o tratamento anti-metanol em tempo recorde.',
  },
  {
    title: 'O Checklist Definitivo de Risco',
    description:
      'Saiba exatamente quais bebidas (caseiras, de rua, falsificadas) carregam a maior carga de metanol.',
  },
  {
    title: 'O Guia do Olho Clínico',
    description:
      'Aprenda os 4 Sinais FURA-FALSÁRIOS para inspecionar rótulos, lacres e o conteúdo da garrafa antes de abrir.',
  },
  {
    title: 'BÔNUS 2 - A Tabela da Toxicologia',
    description:
      'Entenda a diferença molecular entre etanol e metanol, e por que 10ml de um te cega enquanto o outro só te deixa bêbado.',
  },
  {
    title: 'BÔNUS 3 - Ação Preventiva em Viagens',
    description:
      'Dicas para consumir bebidas com segurança em bares e destinos turísticos, onde a regulamentação é duvidosa.',
  },
  {
    title: 'ACESSO VITALÍCIO',
    description:
      'Receba atualizações sempre que houver novos alertas de saúde ou surtos de metanol no país.',
  },
];

export function Offer() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O Que Está Incluso? 🎁
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              O "Checklist de Bebidas Contaminadas com Metanol" é seu guia de
              defesa prático, criado com base em revisões médicas e alertas
              sanitários (WHO, FDA, NCBI). Com este guia, você ganha a
              capacidade de se blindar contra o risco.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <ul className="grid gap-6">
            {includedItems.map((item) => (
              <li key={item.title}>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center">
            <Image
              src="https://i.imgur.com/qKld1Gc.png"
              alt="E-book cover"
              width={400}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
