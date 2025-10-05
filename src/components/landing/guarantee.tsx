import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Garantia e Credibilidade Jornalística
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Não aceite riscos. Nós assumimos o seu.
          </p>
        </div>
        <Card className="mx-auto max-w-2xl bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold">30 dias de Garantia de Confiança</h3>
            <p className="mt-4 text-muted-foreground">
              Se, em 30 dias, você não se sentir totalmente seguro(a) para fazer
              suas escolhas de consumo ou achar que este guia não desvendou os
              segredos do metanol, nós devolvemos 100% do seu investimento.
              Risco Zero.
            </p>
          </CardContent>
        </Card>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-green-500 text-green-700 dark:text-green-400 py-2 px-4"
          >
            <Lock className="h-5 w-5" /> Compra Segura
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-green-500 text-green-700 dark:text-green-400 py-2 px-4"
          >
            <ShieldCheck className="h-5 w-5" /> Garantia de 30 Dias
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-green-500 text-green-700 dark:text-green-400 py-2 px-4"
          >
            <CreditCard className="h-5 w-5" /> Pagamento Seguro
          </Badge>
        </div>
      </div>
    </section>
  );
}
