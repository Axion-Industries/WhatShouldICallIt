import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />

      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Completely Free Forever
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All features are free! Generate unlimited names with our AI-powered tool.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <Card className="relative border-primary shadow-lg max-w-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full flex items-center">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Always Free
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Free Forever</h3>
                  <div className="text-4xl font-bold text-foreground mb-2">$0</div>
                  <p className="text-muted-foreground">No limits, no catches</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Unlimited name generations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">All name styles available</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Domain availability checking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">AI-powered suggestions</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">No registration required</span>
                  </li>
                </ul>

                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="/">Start Generating Names</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Free?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    We believe great naming tools should be accessible to everyone, 
                    from startup founders to creative professionals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">No Hidden Costs</h3>
                  <p className="text-muted-foreground">
                    Everything you see is free to use. No premium features, 
                    no subscription traps, no payment required.
                  </p>
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