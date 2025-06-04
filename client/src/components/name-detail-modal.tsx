
import { useState } from "react";
import { X, ExternalLink, Globe, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { NameSuggestion } from "@shared/schema";

interface NameDetailModalProps {
  name: NameSuggestion;
  isOpen: boolean;
  onClose: () => void;
}

export default function NameDetailModal({ name, isOpen, onClose }: NameDetailModalProps) {
  const [selectedDomain, setSelectedDomain] = useState(name.domains[0]);

  if (!isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'premium': return 'bg-emerald-500';
      case 'hot': return 'bg-amber-500';
      default: return 'bg-red-500';
    }
  };

  const handlePurchaseDomain = (domain: string) => {
    // Open Namecheap with the domain pre-filled
    const namecheapUrl = `https://www.namecheap.com/domains/registration/results/?domain=${domain}`;
    window.open(namecheapUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-foreground">{name.name}</h2>
            <Badge className={`px-3 py-1 text-white ${getStatusColor(name.status)}`}>
              {name.status}
            </Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">About This Name</h3>
            <p className="text-muted-foreground">{name.description}</p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4">Domain Availability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {name.domains.map((domain, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all ${
                    selectedDomain === domain ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedDomain(domain)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{name.name.toLowerCase()}{domain.extension}</span>
                      </div>
                      <div className="text-right">
                        {domain.available ? (
                          <div>
                            <div className="text-green-600 font-medium text-sm">Available</div>
                            <div className="text-muted-foreground text-xs">{domain.price}</div>
                          </div>
                        ) : (
                          <div className="text-red-600 font-medium text-sm">Taken</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {selectedDomain?.available && (
            <>
              <Separator />
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Purchase Domain</h3>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      {name.name.toLowerCase()}{selectedDomain.extension}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold text-lg">{selectedDomain.price}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button 
                        onClick={() => handlePurchaseDomain(name.name.toLowerCase() + selectedDomain.extension)}
                        className="w-full"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Buy on Namecheap
                      </Button>
                      
                      <Button 
                        variant="outline"
                        onClick={() => window.open(`https://www.godaddy.com/domainsearch/find?domainToCheck=${name.name.toLowerCase()}${selectedDomain.extension}`, '_blank')}
                        className="w-full"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Buy on GoDaddy
                      </Button>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Why this domain is great:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Star className="h-3 w-3" />
                          Short and memorable
                        </li>
                        <li className="flex items-center gap-2">
                          <TrendingUp className="h-3 w-3" />
                          Perfect for branding
                        </li>
                        <li className="flex items-center gap-2">
                          <Globe className="h-3 w-3" />
                          {selectedDomain.extension === '.com' ? 'Most trusted extension' : 'Modern and tech-forward'}
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          <Separator />

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Need more options? Generate more names or contact us for custom suggestions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={onClose}>
                Back to Results
              </Button>
              <Button onClick={() => window.location.reload()}>
                Generate More Names
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
