"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateMarketingCopy } from '@/app/admin/marketing-copy/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  copyType: z.enum(['headline', 'subheadline', 'cta'], { required_error: 'Please select a copy type.' }),
  originalCopy: z.string().min(10, 'Please enter at least 10 characters.'),
  targetAudience: z.string().min(10, 'Please describe the audience in at least 10 characters.'),
  numVariations: z.coerce.number().int().min(1).max(5),
});

export function MarketingCopyClient() {
  const [generatedCopy, setGeneratedCopy] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      copyType: 'headline',
      originalCopy: '',
      targetAudience: '',
      numVariations: 3,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedCopy([]);
    try {
      const result = await generateMarketingCopy(values);
      setGeneratedCopy(result);
    } catch (error) {
      console.error('Error generating copy:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate marketing copy. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Generate Copy</CardTitle>
          <CardDescription>Fill in the details below to generate new marketing copy variations.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="copyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Copy Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a copy type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="headline">Headline</SelectItem>
                          <SelectItem value="subheadline">Subheadline</SelectItem>
                          <SelectItem value="cta">Call to Action (CTA)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numVariations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Variations</FormLabel>
                      <Input type="number" min="1" max="5" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="originalCopy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Original Copy</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., 'Manage your properties with ease.'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., 'Real estate developers in the GCC region.'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                {isLoading ? 'Generating...' : 'Generate Variations'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Generated Variations</CardTitle>
          <CardDescription>Here are the AI-generated copy variations. Click to copy.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isLoading && Array.from({ length: form.getValues('numVariations') }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
            {!isLoading && generatedCopy.length === 0 && (
              <p className="text-muted-foreground text-center py-8">Your generated copy will appear here.</p>
            )}
            {generatedCopy.map((copy, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(copy);
                  toast({ title: 'Copied!', description: 'Marketing copy copied to clipboard.' });
                }}
              >
                <p className="text-secondary-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
