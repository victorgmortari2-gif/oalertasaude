import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, EyeOff, ShieldOff } from 'lucide-react';

export function Problem() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge
            variant="destructive"
            className="animate-pulse-size text-4xl"
          >
            FATAL
          </Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Você Está Vivendo na Ignorância.
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Cansado(a) de se sentir inseguro(a) toda vez que bebe fora de casa?
          </p>

          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
            <div className="grid gap-1 text-center">
              <Clock className="mx-auto h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">A Traição da Latência</h3>
              <p className="text-muted-foreground">
                Os sintomas graves (visão turva, dor abdominal) só aparecem 12 a
                48 horas depois! O veneno age enquanto você espera a "ressaca"
                passar.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <EyeOff className="mx-auto h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">O Inimigo Perfeito</h3>
              <p className="text-muted-foreground">
                Metanol não muda cor, cheiro ou sabor da bebida. Você não tem
                como saber até que seja tarde demais.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <ShieldOff className="mx-auto h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Ação Ineficaz</h3>
              <p className="text-muted-foreground">
                Tentar "curar" com água ou vômito NÃO funciona. Você precisa de
                um antídoto em um hospital IMEDIATAMENTE.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border-2 border-dashed border-primary bg-primary/10 p-8">
            <h3 className="font-headline text-2xl font-bold text-primary sm:text-3xl">
              🔥 VAGAS LIMITADAS PARA O CONHECIMENTO QUE PODE SALVAR SUA VIDA! 🔥
            </h3>
            <p className="mt-2 text-lg">
              Esta oferta SAIRÁ DO AR quando a campanha de conscientização
              terminar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
