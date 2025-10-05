'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing a bottle image for anomalies or signs of counterfeiting.
 *
 * - analyzeBottleImage - A function that handles the analysis of a bottle image.
 * - AnalyzeBottleImageInput - The input type for the analyzeBottleImage function.
 * - AnalyzeBottleImageOutput - The return type for the analyzeBottleImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeBottleImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a drink's label, seal, and bottle contents, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AnalyzeBottleImageInput = z.infer<typeof AnalyzeBottleImageInputSchema>;

const AnalyzeBottleImageOutputSchema = z.object({
  anomaliesDetected: z
    .boolean()
    .describe('Whether or not anomalies or signs of counterfeiting were detected.'),
  analysisResult: z
    .string()
    .describe('A detailed analysis of the bottle image, including any anomalies detected.'),
});
export type AnalyzeBottleImageOutput = z.infer<typeof AnalyzeBottleImageOutputSchema>;

export async function analyzeBottleImage(
  input: AnalyzeBottleImageInput
): Promise<AnalyzeBottleImageOutput> {
  return analyzeBottleImageFlow(input);
}

const analyzeBottleImagePrompt = ai.definePrompt({
  name: 'analyzeBottleImagePrompt',
  input: {schema: AnalyzeBottleImageInputSchema},
  output: {schema: AnalyzeBottleImageOutputSchema},
  prompt: `You are an expert in identifying counterfeit alcoholic beverages. Analyze the provided image of a bottle's label, seal, and contents for any anomalies or signs of counterfeiting.

    Consider inconsistencies in the label design, font, and printing quality. Examine the seal for tampering or damage. Assess the bottle contents for unusual color, clarity, or sediment.

    Based on your analysis, determine if there are any indications of counterfeiting.

    Photo: {{media url=photoDataUri}}

    Respond with a detailed analysis and indicate whether anomalies were detected.

    The analysisResult should describe ALL the factors that lead you to your conclusion.

    Ensure your final response matches the JSON schema exactly.

    If there is nothing obviously wrong with the bottle, then say that no anomalies were detected in the analysisResult field.  Don't make up anomalies if none exist.
    `,
});

const analyzeBottleImageFlow = ai.defineFlow(
  {
    name: 'analyzeBottleImageFlow',
    inputSchema: AnalyzeBottleImageInputSchema,
    outputSchema: AnalyzeBottleImageOutputSchema,
  },
  async input => {
    const {output} = await analyzeBottleImagePrompt(input);
    return output!;
  }
);
