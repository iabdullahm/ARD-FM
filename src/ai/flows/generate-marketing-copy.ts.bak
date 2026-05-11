'use server';
/**
 * @fileOverview A Genkit flow for generating multiple optimized variations of marketing copy.
 *
 * - generateMarketingCopy - A function that handles the marketing copy generation process.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  copyType: z.enum(['headline', 'subheadline', 'cta']).describe('The type of marketing copy to generate (e.g., headline, subheadline, CTA).'),
  originalCopy: z.string().describe('The original marketing copy to base variations on.'),
  targetAudience: z.string().describe('A description of the target audience for the marketing copy.'),
  numVariations: z.number().int().min(1).max(10).default(3).describe('The number of marketing copy variations to generate.'),
});

export type GenerateMarketingCopyInput = z.infer<typeof GenerateMarketingCopyInputSchema>;

const GenerateMarketingCopyOutputSchema = z.array(z.string()).describe('An array of generated marketing copy variations.');

export type GenerateMarketingCopyOutput = z.infer<typeof GenerateMarketingCopyOutputSchema>;

export async function generateMarketingCopy(input: GenerateMarketingCopyInput): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const marketingCopyGeneratorPrompt = ai.definePrompt({
  name: 'marketingCopyGeneratorPrompt',
  input: { schema: GenerateMarketingCopyInputSchema },
  output: { schema: GenerateMarketingCopyOutputSchema },
  prompt: `You are an expert marketing copywriter specializing in real estate technology for the GCC market.

Generate {{numVariations}} distinct and highly effective variations for the following {{copyType}}.

Original {{copyType}}: "{{{originalCopy}}}"
Target Audience: {{{targetAudience}}}

Ensure the variations are compelling, concise, and tailored to resonate with the specified target audience. The tone should align with premium fintech dashboards and luxury real estate branding. Focus on clarity, impact, and driving conversion.

Provide the output as a JSON array of strings.`,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async (input) => {
    const { output } = await marketingCopyGeneratorPrompt(input);
    // The prompt is designed to return a JSON array directly.
    // We assert its type based on the prompt's output schema definition.
    return output!;
  }
);
