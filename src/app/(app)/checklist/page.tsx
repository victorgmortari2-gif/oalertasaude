import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ChecklistPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Assessment Checklist</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This interactive checklist will help you evaluate the risk of methanol
          contamination in various drinks.
        </p>
        <p className="mt-4 font-bold">Feature coming soon.</p>
      </CardContent>
    </Card>
  );
}
