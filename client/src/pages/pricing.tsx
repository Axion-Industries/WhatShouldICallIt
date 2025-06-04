import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your naming needs. Start free and upgrade anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Free Plan */}
            <Card className="relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Free</h3>
                  <div className="text-4xl font-bold text-foreground mb-2">$0</div>
                  <p className="text-muted-foreground">Perfect for getting started</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">5 name generations per day</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Basic domain checking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">All name styles</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Email support</span>
                  </li>
                </ul>
                
                <Button className="w-full" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-primary shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-foreground mb-2">$19</div>
                  <p className="text-muted-foreground">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Unlimited name generations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Advanced domain checking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Priority AI processing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Save favorite names</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Export name lists</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Priority support</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Business</h3>
                  <div className="text-4xl font-bold text-foreground mb-2">$49</div>
                  <p className="text-muted-foreground">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Brand guidelines integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">API access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">White-label options</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-3" />
                    <span className="text-foreground">Dedicated support</span>
                  </li>
                </ul>
                
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Can I change plans anytime?</h3>
                  <p className="text-muted-foreground">
                    Yes! You can upgrade, downgrade, or cancel your subscription at any time. 
                    Changes take effect at the next billing cycle.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Do you offer refunds?</h3>
                  <p className="text-muted-foreground">
                    We offer a 30-day money-back guarantee on all paid plans. 
                    If you're not satisfied, we'll refund your payment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">How does domain checking work?</h3>
                  <p className="text-muted-foreground">
                    We check domain availability in real-time across multiple registrars 
                    to ensure accuracy and show current pricing.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Is there a free trial?</h3>
                  <p className="text-muted-foreground">
                    Yes! Pro and Business plans come with a 7-day free trial. 
                    No credit card required to start.
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