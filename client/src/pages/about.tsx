import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

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
              We're on a mission to help entrepreneurs and creators find the perfect name for their big ideas.
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  WhatShouldINameIt? was born from a simple frustration: spending hours brainstorming names 
                  only to find out they weren't available as domains. We've all been there - you come up 
                  with the perfect name, get excited about your idea, and then discover someone else got there first.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our founders, experienced entrepreneurs themselves, decided to solve this problem once and for all. 
                  By combining artificial intelligence with real-time domain checking, we created a tool that 
                  generates creative, available names tailored to your specific business or project.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we've helped thousands of entrepreneurs, startups, and creative professionals find 
                  names that perfectly capture their vision and are ready to use from day one.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Purpose-Driven</h3>
                    <p className="text-muted-foreground">
                      Every name we generate is crafted with your specific goals and audience in mind. 
                      We don't just create names - we help build brands.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="text-secondary h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Human-Centered</h3>
                    <p className="text-muted-foreground">
                      While we use AI for generation, every aspect of our service is designed around 
                      human creativity and the emotional connection between brands and their audiences.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Award className="text-accent h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                    <p className="text-muted-foreground">
                      We're committed to providing high-quality name suggestions that are not just 
                      available, but memorable, brandable, and legally sound.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Users className="text-green-500 h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                    <p className="text-muted-foreground">
                      We believe in supporting the entrepreneurial community by making professional 
                      naming services accessible to businesses of all sizes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                    <p className="text-primary mb-3">Co-Founder & CEO</p>
                    <p className="text-muted-foreground text-sm">
                      Former brand strategist with 10+ years helping Fortune 500 companies 
                      with naming and positioning.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-secondary/20 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold mb-2">Marcus Rodriguez</h3>
                    <p className="text-secondary mb-3">Co-Founder & CTO</p>
                    <p className="text-muted-foreground text-sm">
                      AI researcher and serial entrepreneur who previously built 
                      natural language processing systems at Google.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold mb-2">Emily Foster</h3>
                    <p className="text-accent mb-3">Head of Product</p>
                    <p className="text-muted-foreground text-sm">
                      UX designer and entrepreneur who understands the creative process 
                      from ideation to launch.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Find Your Perfect Name?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs who have found their perfect business name with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  Start Generating Names
                </a>
                <a href="/how-it-works" className="border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                  Learn How It Works
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}