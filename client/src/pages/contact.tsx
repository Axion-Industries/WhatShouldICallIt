import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Github, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />

      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About This Project
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              WhatShouldINameIt? is a free, open-source tool for generating creative business names using AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Open Source Project</h2>
                <p className="text-muted-foreground mb-6">
                  This is a demonstration project showcasing AI-powered name generation. 
                  The tool uses advanced algorithms to create meaningful, creative names 
                  based on your business description.
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Features:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AI-powered name generation</li>
                    <li>• Multiple naming styles</li>
                    <li>• Domain availability checking</li>
                    <li>• Industry-specific suggestions</li>
                    <li>• Completely free to use</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Github className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Source Code</h3>
                      <p className="text-muted-foreground">View on GitHub</p>
                    </div>
                  </div>
                  <p className="text-foreground font-medium">github.com/username/project</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <MessageSquare className="text-secondary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Feedback</h3>
                      <p className="text-muted-foreground">Share your thoughts</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Found a bug or have a suggestion? Open an issue on GitHub!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <Twitter className="text-accent h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Follow Updates</h3>
                      <p className="text-muted-foreground">Stay updated on new features</p>
                    </div>
                  </div>
                  <p className="text-foreground font-medium">@whatshouldlnameit</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <Card>
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How does the AI work?</h3>
                    <p className="text-muted-foreground text-sm">
                      Our AI analyzes your business description and generates names using various linguistic patterns and creative techniques.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Is this really free?</h3>
                    <p className="text-muted-foreground text-sm">
                      Yes! This is a demonstration project and completely free to use with no limitations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Can I use the generated names?</h3>
                    <p className="text-muted-foreground text-sm">
                      Absolutely! All generated names are free to use. Just make sure to check trademark availability.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How accurate is domain checking?</h3>
                    <p className="text-muted-foreground text-sm">
                      Domain availability is checked in real-time, but always verify with your preferred registrar before purchasing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}