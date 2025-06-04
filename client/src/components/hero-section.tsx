import { useState } from "react";
import NameGeneratorForm from "./name-generator-form";
import ResultsSection from "./results-section";
import type { NameSuggestion } from "@shared/schema";

export default function HeroSection() {
  const [results, setResults] = useState<NameSuggestion[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleResults = (suggestions: NameSuggestion[]) => {
    setResults(suggestions);
    setShowResults(true);
  };

  return (
    <main className="min-h-screen">
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300" 
              alt="Creative workspace with notebooks and design tools" 
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg opacity-10 absolute inset-0" 
            />
            <div className="relative z-10 py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Find the Perfect Name for Your
                <span className="text-primary"> Big Idea</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Describe what you're building and discover creative, available domain names powered by AI
              </p>
            </div>
          </div>

          <NameGeneratorForm onResults={handleResults} />
        </div>
      </section>

      {showResults && <ResultsSection results={results} onGenerateMore={() => setShowResults(false)} />}
    </main>
  );
}