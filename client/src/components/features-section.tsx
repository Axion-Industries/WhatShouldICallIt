import { Brain, Globe, Rocket } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose NameCraft?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Smart name generation powered by AI with real-time domain checking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Brain className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">AI-Powered Suggestions</h3>
            <p className="text-muted-foreground">
              Our advanced algorithms analyze your description to generate meaningful, creative names that fit your brand
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe className="text-secondary h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Real-time Domain Check</h3>
            <p className="text-muted-foreground">
              Instantly see which domains are available across multiple TLDs with current pricing information
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="text-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Launch Ready</h3>
            <p className="text-muted-foreground">
              Get names that are not just available, but memorable, brandable, and perfect for your business launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
