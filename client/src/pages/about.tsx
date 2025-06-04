import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />

      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About WhatShouldINameIt?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A free AI-powered tool to help you find the perfect name for your business or project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  We believe that finding the perfect name for your business shouldn't be expensive or complicated. 
                  That's why we created a completely free AI-powered naming tool that generates creative, 
                  relevant suggestions in seconds.
                </p>
                <p className="text-muted-foreground">
                  Our goal is to help entrepreneurs, creators, and businesses of all sizes find names that 
                  resonate with their vision and connect with their audience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
                <p className="text-muted-foreground mb-4">
                  Simply describe your business or project, select your industry and preferred style, 
                  and our AI will generate dozens of creative name suggestions. We also check domain 
                  availability in real-time to help you secure your online presence.
                </p>
                <p className="text-muted-foreground">
                  All features are completely free with no hidden costs, registration requirements, 
                  or usage limits.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Why Free?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We built this tool as a community service for entrepreneurs and creators. 
                Starting a business is challenging enough - finding a great name shouldn't add to that burden. 
                By keeping our service free, we hope to support innovation and creativity worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}