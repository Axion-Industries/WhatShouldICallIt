import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, MessageSquare, Book, Video, Download } from "lucide-react";

export default function Support() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I generate my first business name?",
          a: "Simply describe your business idea in the main form, select your industry and naming style, then click 'Generate Names'. Our AI will create suggestions instantly."
        },
        {
          q: "What makes a good business description for name generation?",
          a: "Be specific about what you do, who you serve, and what makes you unique. Include key services, target audience, and brand personality traits."
        },
        {
          q: "How many names will I get per generation?",
          a: "Free users get up to 12 suggestions per generation. Pro users can generate unlimited names with more diverse options."
        }
      ]
    },
    {
      category: "Domain Availability",
      questions: [
        {
          q: "How accurate is the domain availability checking?",
          a: "We check availability in real-time across multiple registrars. However, domains can be registered quickly, so we recommend securing your choice promptly."
        },
        {
          q: "What domain extensions do you check?",
          a: "We check .com, .io, .net, .org, .co, .tech, .design, .dev, and other popular extensions. Pro users get access to additional TLDs."
        },
        {
          q: "Can you help me register a domain?",
          a: "We show availability and pricing, but you'll need to register through a domain registrar. We can recommend trusted partners."
        }
      ]
    },
    {
      category: "Account & Billing",
      questions: [
        {
          q: "Can I upgrade or downgrade my plan anytime?",
          a: "Yes, you can change your subscription at any time. Changes take effect at your next billing cycle."
        },
        {
          q: "Do you offer refunds?",
          a: "We offer a 30-day money-back guarantee on all paid plans. Contact support for assistance with refunds."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
        }
      ]
    }
  ];

  const resources = [
    {
      title: "Naming Best Practices Guide",
      description: "Comprehensive guide to creating memorable business names",
      icon: Book,
      type: "PDF Guide"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step tutorials for using our platform",
      icon: Video,
      type: "Video Series"
    },
    {
      title: "Trademark Research Checklist",
      description: "Essential steps for protecting your chosen name",
      icon: Download,
      type: "Checklist"
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Help & Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions and get the help you need to succeed with naming your business.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help topics..."
                className="w-full pl-12 pr-4 py-4 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">Get instant help from our support team</p>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="text-secondary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Submit Ticket</h3>
                <p className="text-muted-foreground mb-4">Send us a detailed support request</p>
                <Button variant="outline" className="w-full">Create Ticket</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Book className="text-accent h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">Browse our comprehensive guides</p>
                <Button variant="outline" className="w-full">View Docs</Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <Badge variant="secondary" className="mr-3">{category.category}</Badge>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {category.questions.map((faq, faqIndex) => (
                      <Card key={faqIndex}>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                          <p className="text-muted-foreground">{faq.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <resource.icon className="text-primary h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{resource.title}</h3>
                          <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">Still Need Help?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Choose the best way to reach us based on your needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Response within 24 hours
                  </p>
                  <p className="text-primary font-medium">support@whatshouldlnameit.com</p>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Priority Support</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Available for Pro and Business plans
                  </p>
                  <Button variant="outline" size="sm">Upgrade Plan</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}