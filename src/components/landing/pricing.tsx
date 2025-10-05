import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { XCircle, CheckCircle2 } from 'lucide-react';

export function Pricing() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            O Preço da Sua Segurança. A Decisão é Sua.
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Quanto vale uma noite sem medo? Quanto custa sua visão?
          </p>
        </div>
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2 font-bold text-lg">
                  O Custo da Ignorância
                </TableHead>
                <TableHead className="w-1/2 font-bold text-lg text-primary">
                  O Custo do Conhecimento
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Cegueira Permanente (Incalculável)
                </TableCell>
                <TableCell className="font-bold text-primary row-span-3 flex items-center justify-center text-3xl">
                  R$ 17,90
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Tratamento de Emergência/Diálise (Milhares de Reais)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Risco de Vida (O Preço Final)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <p className="text-muted-foreground">
              Acesso à Verdadeira Defesa Contra o Metanol (E-book) + Todos os
              Bônus Vitais:
            </p>
            <p className="text-2xl font-bold">
              <span className="text-muted-foreground line-through">
                De R$47,00 por
              </span>
            </p>
            <p className="text-sm text-accent-foreground bg-accent px-2 py-1 rounded-md">
              HOJE, em nossa Campanha de Alerta:
            </p>
            <p className="font-headline text-7xl font-extrabold text-primary">
              R$ 17,90
            </p>
            <p className="text-sm font-bold">
              ACESSO VITALÍCIO | ACESSO IMEDIATO
            </p>
          </div>
          <Button asChild size="lg" className="mt-4 text-xl font-bold">
            <Link href="/dashboard">💰 QUERO PROTEGER MINHA SAÚDE AGORA! 💰</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
