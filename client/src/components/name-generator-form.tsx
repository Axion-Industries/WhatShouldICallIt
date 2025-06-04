import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { nameGenerationFormSchema, type NameGenerationForm, type NameSuggestion } from "@shared/schema";

interface NameGeneratorFormProps {
  onResults: (suggestions: NameSuggestion[]) => void;
}

export default function NameGeneratorForm({ onResults }: NameGeneratorFormProps) {
  const { toast } = useToast();
  
  const form = useForm<NameGenerationForm>({
    resolver: zodResolver(nameGenerationFormSchema),
    defaultValues: {
      description: "",
      industry: "",
      nameStyle: "creative",
    },
  });

  const generateNamesMutation = useMutation({
    mutationFn: async (data: NameGenerationForm) => {
      const response = await apiRequest("POST", "/api/generate-names", data);
      return response.json();
    },
    onSuccess: (data) => {
      onResults(data.suggestions);
      toast({
        title: "Names Generated!",
        description: `Found ${data.suggestions.length} creative suggestions for you. Click any name for detailed info and domain purchasing options.`,
      });
    },
    onError: (error) => {
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate names. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: NameGenerationForm) => {
    generateNamesMutation.mutate(data);
  };

  return (
    <Card className="bg-card shadow-lg border border-border">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel className="text-sm font-medium text-foreground">
                    What are you building?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder="Describe your project, business idea, or startup. Be specific about what you do, who you serve, or what makes you unique..."
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-sm font-medium text-foreground">
                      Industry
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-3 border border-input rounded-xl">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="health">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="nameStyle"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-sm font-medium text-foreground">
                      Name Style
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-3 border border-input rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="creative">Creative</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="playful">Playful</SelectItem>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="classic">Classic</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              disabled={generateNamesMutation.isPending}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-xl transition-colors duration-200 text-lg"
            >
              {generateNamesMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Names
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
