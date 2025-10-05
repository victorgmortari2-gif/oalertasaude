'use client';

import { useState, useRef, type ChangeEvent } from 'react';
import {
  analyzeBottleImage,
  type AnalyzeBottleImageOutput,
} from '@/ai/flows/analyze-bottle-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle, Loader2, Upload } from 'lucide-react';
import Image from 'next/image';

export function ImageAnalyzer() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] =
    useState<AnalyzeBottleImageOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset states
    setImagePreview(null);
    setAnalysisResult(null);
    setError(null);
    setIsLoading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUri = reader.result as string;
      setImagePreview(dataUri);
      handleAnalysis(dataUri);
    };
    reader.onerror = () => {
      setError('Failed to read the image file.');
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalysis = async (photoDataUri: string) => {
    try {
      const result = await analyzeBottleImage({ photoDataUri });
      setAnalysisResult(result);
    } catch (e) {
      console.error(e);
      setError(
        'An error occurred during the analysis. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const triggerFileSelect = () => fileInputRef.current?.click();

  return (
    <div className="w-full max-w-4xl mx-auto grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Visual Inspection</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-muted-foreground">
            Upload a photo of a drink's label, seal, and contents. Our AI will
            analyze it for signs of counterfeiting.
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
            disabled={isLoading}
          />
          <Button
            onClick={triggerFileSelect}
            disabled={isLoading}
            size="lg"
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Bottle Image
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Analysis Failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {imagePreview && (
          <Card>
            <CardHeader>
              <CardTitle>Your Image</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={imagePreview}
                alt="Uploaded bottle"
                width={500}
                height={500}
                className="rounded-lg object-contain w-full h-auto"
              />
            </CardContent>
          </Card>
        )}

        {analysisResult && (
          <Card
            className={
              analysisResult.anomaliesDetected
                ? 'border-red-500 bg-red-500/10'
                : 'border-green-500 bg-green-500/10'
            }
          >
            <CardHeader>
              <CardTitle
                className={`flex items-center gap-2 ${
                  analysisResult.anomaliesDetected
                    ? 'text-red-700 dark:text-red-400'
                    : 'text-green-700 dark:text-green-400'
                }`}
              >
                {analysisResult.anomaliesDetected ? (
                  <AlertTriangle />
                ) : (
                  <CheckCircle />
                )}
                Analysis Result
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-lg mb-2">
                {analysisResult.anomaliesDetected
                  ? 'Anomalies Detected!'
                  : 'No Obvious Anomalies Detected.'}
              </h3>
              <p className="text-muted-foreground">
                {analysisResult.analysisResult}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
