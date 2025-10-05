import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ToxicologyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Toxicology Table</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This section will clearly explain the molecular difference between
          ethanol and methanol, and the dangers of methanol consumption.
        </p>
        <p className="mt-4 font-bold">Feature coming soon.</p>
      </CardContent>
    </Card>
  );
}
