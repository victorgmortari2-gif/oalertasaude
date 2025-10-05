import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AlertsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alert Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This section will provide real-time updates on health alerts and
          methanol outbreaks.
        </p>
        <p className="mt-4 font-bold">Feature coming soon.</p>
      </CardContent>
    </Card>
  );
}
