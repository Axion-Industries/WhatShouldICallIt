import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Search, Check, Sparkles } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate the perfect name for your business in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Describe</h3>
                <p className="text-muted-foreground text-sm">
                  Tell us about your business, project, or idea in your own words
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-secondary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Generate</h3>
                <p className="text-muted-foreground text-sm">
                  Our AI analyzes your description and creates unique name suggestions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Search className="text-accent h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Check</h3>
                <p className="text-muted-foreground text-sm">
                  We instantly check domain availability across multiple extensions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-500 h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">4. Choose</h3>
                <p className="text-muted-foreground text-sm">
                  Pick your favorite name and register your domain
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">What Makes Our Names Special?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">AI-Powered Intelligence</h3>
                    <p className="text-muted-foreground">
                      Our advanced algorithms understand context, industry terminology, and branding principles 
                      to generate names that truly reflect your business vision.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Multiple Name Styles</h3>
                    <p className="text-muted-foreground">
                      Choose from creative, professional, playful, modern, or classic styles to match 
                      your brand personality and target audience.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Real-Time Availability</h3>
                    <p className="text-muted-foreground">
                      No more disappointment - we check domain availability as we generate names, 
                      so you only see options you can actually register.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Industry-Specific</h3>
                    <p className="text-muted-foreground">
                      Our system considers industry best practices and naming conventions 
                      to ensure your name fits perfectly in your market.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}