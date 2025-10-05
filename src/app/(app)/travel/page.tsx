import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TravelPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Travel Safety Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This section will offer tips for safely consuming beverages in bars
          and tourist destinations with questionable regulations.
        </p>
        <p className="mt-4 font-bold">Feature coming soon.</p>
      </CardContent>
    </Card>
  );
}
