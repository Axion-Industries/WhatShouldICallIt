import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <button className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                WhatShouldINameIt
              </button>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works">
              <a className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            </Link>
            <Link href="/about">
              <a className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            </Link>
            <Link href="/privacy">
              <a className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            </Link>
            <Link href="/terms">
              <a className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            </Link>
            <ThemeToggle />
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/how-it-works">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
                </Link>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}