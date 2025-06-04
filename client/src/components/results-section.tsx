import { RefreshCw, Check, X, Star, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import type { NameSuggestion } from "@shared/schema";

interface ResultsSectionProps {
  results: NameSuggestion[];
  onGenerateMore: () => void;
}

export default function ResultsSection({ results, onGenerateMore }: ResultsSectionProps) {
  const [, setLocation] = useLocation();

  const handleCardClick = (result: NameSuggestion, index: number) => {
    // Store the selected name data in sessionStorage for the details page
    sessionStorage.setItem('selectedName', JSON.stringify(result));
    setLocation(`/name/${index}`);
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <Check className="mr-1 h-3 w-3" />;
      case 'taken':
        return <X className="mr-1 h-3 w-3" />;
      case 'premium':
        return <Star className="mr-1 h-3 w-3" />;
      case 'hot':
        return <Flame className="mr-1 h-3 w-3" />;
      default:
        return <Check className="mr-1 h-3 w-3" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'taken':
        return 'Taken';
      case 'premium':
        return 'Premium';
      case 'hot':
        return 'Hot';
      default:
        return 'Available';
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'available':
        return 'status-badge-available';
      case 'taken':
        return 'status-badge-taken';
      case 'premium':
        return 'status-badge-premium';
      case 'hot':
        return 'status-badge-hot';
      default:
        return 'status-badge-available';
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Here are your name suggestions</h2>
          <p className="text-muted-foreground">Click on any name to check detailed domain information</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <Card 
              key={index}
              className="bg-card shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-border hover:scale-[1.02]"
              onClick={() => handleCardClick(result, index)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{result.name}</h3>
                  <Badge className={`px-3 py-1 text-sm font-medium ${getStatusBadgeClass(result.status)}`}>
                    {getStatusIcon(result.status)}
                    {getStatusText(result.status)}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4">{result.description}</p>
                
                <div className="space-y-2">
                  {result.domains.slice(0, 4).map((domain, domainIndex) => (
                    <div key={domainIndex} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{domain.extension}</span>
                      <span className="text-success font-medium">
                        {domain.price}
                      </span>
                    </div>
                  ))}
                  {result.domains.length > 4 && (
                    <div className="text-center text-sm text-muted-foreground pt-2">
                      +{result.domains.length - 4} more domains
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={onGenerateMore}
            variant="outline"
            className="bg-card border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate More Names
          </Button>
        </div>
      </div>
    </section>
  );
}
