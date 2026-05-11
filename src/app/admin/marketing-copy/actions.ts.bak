'use server';

import { generateMarketingCopy as generate } from "@/ai/flows/generate-marketing-copy";
import type { GenerateMarketingCopyInput } from "@/ai/flows/generate-marketing-copy";

export async function generateMarketingCopy(input: GenerateMarketingCopyInput) {
  // Add any necessary server-side validation or processing here
  try {
    const result = await generate(input);
    return result;
  } catch (error) {
    console.error("Error in server action:", error);
    // In a real app, you might want to log this to a monitoring service
    throw new Error("Failed to generate marketing copy due to a server error.");
  }
}
