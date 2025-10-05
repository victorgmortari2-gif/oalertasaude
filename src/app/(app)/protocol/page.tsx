import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProtocolPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Immediate Action Protocol</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This section will provide a step-by-step guide on what to do in the
          first crucial minutes after suspected methanol poisoning.
        </p>
        <p className="mt-4 font-bold">Feature coming soon.</p>
      </CardContent>
    </Card>
  );
}
