
import { useLocation } from "wouter";
import { ArrowLeft, ExternalLink, Server, Globe, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { NameSuggestion } from "@shared/schema";

export default function NameDetails() {
  const [, setLocation] = useLocation();
  
  // Get name data from sessionStorage
  const getNameData = (): NameSuggestion => {
    const stored = sessionStorage.getItem('selectedName');
    if (stored) {
      return JSON.parse(stored);
    }
    
    // Fallback data if no stored data
    return {
      name: "TechForge",
      description: "Perfect for innovative technology solutions",
      domains: [
        { extension: ".com", available: true, price: "$12.99/yr" },
        { extension: ".io", available: true, price: "$39.99/yr" },
        { extension: ".net", available: false },
        { extension: ".org", available: true, price: "$14.99/yr" },
        { extension: ".co", available: true, price: "$29.99/yr" },
        { extension: ".tech", available: true, price: "$49.99/yr" },
        { extension: ".dev", available: true, price: "$12.99/yr" },
        { extension: ".app", available: true, price: "$19.99/yr" }
      ],
      status: "available"
    };
  };

  const nameData = getNameData();

  const hostingServices = [
    {
      name: "Replit",
      description: "Deploy instantly with zero configuration",
      price: "Free - $20/month",
      features: ["Instant deployment", "Custom domains", "Auto-scaling", "Built-in database"],
      recommended: true,
      icon: <Zap className="h-6 w-6" />,
      url: "https://replit.com"
    },
    {
      name: "Vercel", 
      description: "Perfect for frontend applications",
      price: "Free - $20/month",
      features: ["Edge network", "Preview deployments", "Analytics", "Serverless functions"],
      icon: <Globe className="h-6 w-6" />,
      url: "https://vercel.com"
    },
    {
      name: "Netlify",
      description: "Great for static sites and JAMstack",
      price: "Free - $19/month", 
      features: ["CDN", "Form handling", "Split testing", "Edge functions"],
      icon: <Server className="h-6 w-6" />,
      url: "https://netlify.com"
    },
    {
      name: "DigitalOcean",
      description: "Flexible cloud hosting solution",
      price: "$5 - $100+/month",
      features: ["VPS hosting", "Managed databases", "Load balancers", "Monitoring"],
      icon: <Shield className="h-6 w-6" />,
      url: "https://digitalocean.com"
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => setLocation("/")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to results
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Name Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl">{nameData.name}</CardTitle>
                    <Badge className="px-3 py-1">
                      {nameData.status === "available" ? "Available" : nameData.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-lg">{nameData.description}</p>
                </CardHeader>
              </Card>

              {/* Domain Availability */}
              <Card>
                <CardHeader>
                  <CardTitle>Domain Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {nameData.domains.map((domain, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <span className="font-medium">{nameData.name}{domain.extension}</span>
                          <div className="text-sm text-muted-foreground">
                            {domain.available ? "Available" : "Unavailable"}
                          </div>
                        </div>
                        <div className="text-right">
                          {domain.available ? (
                            <div>
                              <div className="font-medium text-green-600">{domain.price}</div>
                              <Button 
                                size="sm" 
                                className="mt-1"
                                onClick={() => window.open(`https://www.namecheap.com/domains/registration/results/?domain=${nameData.name}${domain.extension}`, '_blank')}
                              >
                                Register
                              </Button>
                            </div>
                          ) : (
                            <span className="text-red-600 font-medium">Taken</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Hosting Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started with Your Domain</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Step 1: Register Your Domain</h4>
                    <p className="text-muted-foreground">
                      Choose one of the available domains above and register it through a domain registrar like Namecheap, GoDaddy, or Google Domains.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Step 2: Choose a Hosting Service</h4>
                    <p className="text-muted-foreground">
                      Select a hosting provider that fits your needs and budget from the options below.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Step 3: Connect Your Domain</h4>
                    <p className="text-muted-foreground">
                      Update your domain's DNS settings to point to your hosting provider. This usually involves updating A records or CNAME records.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Step 4: Deploy Your Website</h4>
                    <p className="text-muted-foreground">
                      Upload your website files or deploy directly from your code repository.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hosting Services */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Hosting Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hostingServices.map((service, index) => (
                    <Card key={index} className={service.recommended ? "border-primary" : ""}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">{service.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{service.name}</h4>
                              {service.recommended && (
                                <Badge variant="secondary">Recommended</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {service.description}
                            </p>
                            <div className="text-sm font-medium text-primary mb-3">
                              {service.price}
                            </div>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>• {feature}</li>
                              ))}
                            </ul>
                            <Button 
                              size="sm" 
                              className="w-full mt-3"
                              onClick={() => window.open(service.url, '_blank')}
                            >
                              <ExternalLink className="mr-2 h-3 w-3" />
                              Visit {service.name}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
