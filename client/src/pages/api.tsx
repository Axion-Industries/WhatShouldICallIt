import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Globe, Zap, Github } from "lucide-react";

export default function API() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />

      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Open Source & Free
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This is a demonstration project. The code is open source and available for learning and experimentation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">RESTful API</h3>
                <p className="text-muted-foreground text-sm">Simple HTTP requests with JSON responses</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-secondary h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
                <p className="text-muted-foreground text-sm">Optimized for quick name generation</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Domain Check</h3>
                <p className="text-muted-foreground text-sm">Real-time domain availability</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Github className="text-green-500 h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Open Source</h3>
                <p className="text-muted-foreground text-sm">Free to use and modify</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">Technical Overview</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Generate Names</h3>
                    <Badge variant="secondary" className="mb-4">POST /api/generate-names</Badge>

                    <h4 className="text-lg font-semibold mb-3">Request Body</h4>
                    <div className="bg-muted-foreground/10 rounded-lg p-4 mb-4">
                      <pre className="text-sm overflow-x-auto">
{`{
  "description": "A modern coffee shop",
  "industry": "food",
  "nameStyle": "creative"
}`}
                      </pre>
                    </div>

                    <h4 className="text-lg font-semibold mb-3">Response</h4>
                    <div className="bg-muted-foreground/10 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
{`{
  "requestId": 123,
  "suggestions": [
    {
      "name": "BrewForge",
      "description": "Perfect for modern coffee solutions",
      "domains": [...],
      "status": "available"
    }
  ]
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Check Domain</h3>
                    <Badge variant="secondary" className="mb-4">POST /api/check-domain</Badge>

                    <h4 className="text-lg font-semibold mb-3">Request Body</h4>
                    <div className="bg-muted-foreground/10 rounded-lg p-4 mb-4">
                      <pre className="text-sm overflow-x-auto">
{`{
  "domain": "brewforge"
}`}
                      </pre>
                    </div>

                    <h4 className="text-lg font-semibold mb-3">Response</h4>
                    <div className="bg-muted-foreground/10 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
{`[
  {
    "extension": ".com",
    "available": true,
    "price": "$12.99/yr"
  },
  {
    "extension": ".io",
    "available": false
  }
]`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">Example Usage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">JavaScript</h3>
                    <div className="bg-muted-foreground/10 rounded-lg p-3 mb-4">
                      <code className="text-sm">fetch('/api/generate-names', {...})</code>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/username/project" target="_blank" rel="noopener noreferrer">
                        View Example
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Python</h3>
                    <div className="bg-muted-foreground/10 rounded-lg p-3 mb-4">
                      <code className="text-sm">requests.post('/api/generate-names')</code>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/username/project" target="_blank" rel="noopener noreferrer">
                        View Example
                      </a>
                    </Button>
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