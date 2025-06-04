import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-primary text-2xl">✨</div>
            <span className="text-xl font-bold text-foreground">WhatShouldINameIt?</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How it works
            </a>
            <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How it works
                </a>
                <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
