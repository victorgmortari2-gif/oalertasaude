import { ImageAnalyzer } from '@/components/image-analyzer';

export default function DashboardPage() {
  return (
    <div>
      <p className="mb-6 text-muted-foreground">
        Welcome to the SafeSips Visual Inspector. Take a clear photo of the
        bottle, ensuring the label, seal, and liquid are visible, then upload it
        for an AI-powered analysis.
      </p>
      <ImageAnalyzer />
    </div>
  );
}
