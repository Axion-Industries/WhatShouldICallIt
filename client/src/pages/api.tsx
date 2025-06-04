import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Key, Globe, Zap } from "lucide-react";

export default function API() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Integrate WhatShouldINameIt? into your applications with our powerful RESTful API.
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
                  <Key className="text-secondary h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">API Keys</h3>
                <p className="text-muted-foreground text-sm">Secure authentication with API tokens</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">CORS Enabled</h3>
                <p className="text-muted-foreground text-sm">Use from any domain or application</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-green-500 h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Rate Limits</h3>
                <p className="text-muted-foreground text-sm">Generous limits for all use cases</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">Getting Started</h2>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Base URL</h3>
                  <div className="bg-muted-foreground/10 rounded-lg p-4 mb-6">
                    <code className="text-foreground">https://api.whatshouldlnameit.com/v1</code>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">Authentication</h3>
                  <p className="text-muted-foreground mb-4">
                    All API requests require authentication using an API key. Include your API key in the request headers:
                  </p>
                  <div className="bg-muted-foreground/10 rounded-lg p-4 mb-6">
                    <code className="text-foreground">Authorization: Bearer YOUR_API_KEY</code>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button>Get API Key</Button>
                    <Badge variant="secondary">Business Plan Required</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">Endpoints</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-green-500 text-white">POST</Badge>
                      <code className="text-lg font-mono">/generate-names</code>
                    </div>
                    <p className="text-muted-foreground mb-6">Generate business name suggestions based on a description.</p>
                    
                    <h4 className="text-lg font-semibold mb-3">Request Body</h4>
                    <div className="bg-muted-foreground/10 rounded-lg p-4 mb-6">
                      <pre className="text-sm overflow-x-auto">
{`{
  "description": "A platform for freelance graphic designers",
  "industry": "tech",
  "nameStyle": "creative",
  "count": 10
}`}
                      </pre>
                    </div>

                    <h4 className="text-lg font-semibold mb-3">Response</h4>
                    <div className="bg-muted-foreground/10 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "suggestions": [
    {
      "name": "DesignForge",
      "description": "Perfect for creative design services",
      "domains": [
        {
          "extension": ".com",
          "available": true,
          "price": "$12.99/yr"
        }
      ],
      "status": "available"
    }
  ],
  "requestId": "req_123456"
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-blue-500 text-white">GET</Badge>
                      <code className="text-lg font-mono">/check-domain</code>
                    </div>
                    <p className="text-muted-foreground mb-6">Check domain availability for a specific name.</p>
                    
                    <h4 className="text-lg font-semibold mb-3">Query Parameters</h4>
                    <div className="bg-muted-foreground/10 rounded-lg p-4 mb-6">
                      <pre className="text-sm overflow-x-auto">
{`?domain=designforge&extensions=com,io,net`}
                      </pre>
                    </div>

                    <h4 className="text-lg font-semibold mb-3">Response</h4>
                    <div className="bg-muted-foreground/10 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "domain": "designforge",
  "availability": [
    {
      "extension": ".com",
      "available": false
    },
    {
      "extension": ".io",
      "available": true,
      "price": "$39.99/yr"
    }
  ]
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">Rate Limits</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary mb-2">1,000</h3>
                      <p className="text-muted-foreground">Requests per hour</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-secondary mb-2">10,000</h3>
                      <p className="text-muted-foreground">Requests per day</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-accent mb-2">100,000</h3>
                      <p className="text-muted-foreground">Requests per month</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-6 text-center">
                    Rate limits are per API key. Contact us for higher limits if needed.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">Error Handling</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6">
                    The API uses standard HTTP status codes and returns JSON error responses:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="destructive">400</Badge>
                      <span className="text-foreground">Bad Request - Invalid parameters</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="destructive">401</Badge>
                      <span className="text-foreground">Unauthorized - Invalid API key</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="destructive">429</Badge>
                      <span className="text-foreground">Too Many Requests - Rate limit exceeded</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="destructive">500</Badge>
                      <span className="text-foreground">Internal Server Error</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">SDKs & Libraries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">JavaScript/Node.js</h3>
                    <div className="bg-muted-foreground/10 rounded-lg p-3 mb-4">
                      <code className="text-sm">npm install @whatshouldlnameit/sdk</code>
                    </div>
                    <Button variant="outline" size="sm">View Docs</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Python</h3>
                    <div className="bg-muted-foreground/10 rounded-lg p-3 mb-4">
                      <code className="text-sm">pip install whatshouldlnameit</code>
                    </div>
                    <Button variant="outline" size="sm">View Docs</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">PHP</h3>
                    <div className="bg-muted-foreground/10 rounded-lg p-3 mb-4">
                      <code className="text-sm">composer require whatshouldlnameit/sdk</code>
                    </div>
                    <Button variant="outline" size="sm">View Docs</Button>
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