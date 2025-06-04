import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 15, 2024
            </p>
          </div>

          <Card>
            <CardContent className="p-8 prose max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p className="text-muted-foreground mb-4">
                    WhatShouldINameIt? ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you use our website and services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    <li>Name and email address when you create an account</li>
                    <li>Business descriptions and naming preferences</li>
                    <li>Payment information for premium services</li>
                    <li>Communications with our support team</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3">Usage Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We automatically collect certain information about your use of our services:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    <li>Device information and IP address</li>
                    <li>Browser type and version</li>
                    <li>Usage patterns and preferences</li>
                    <li>Search queries and generated names</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    <li>Provide and improve our naming services</li>
                    <li>Process payments and manage accounts</li>
                    <li>Personalize your experience</li>
                    <li>Communicate with you about updates and promotions</li>
                    <li>Analyze usage patterns to enhance our platform</li>
                    <li>Prevent fraud and ensure security</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground mb-4">
                    We do not sell, trade, or rent your personal information. We may share information in these circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    <li>With service providers who assist in operating our platform</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p className="text-muted-foreground mb-4">
                    We implement appropriate technical and organizational security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information</li>
                    <li>Secure payment processing through certified providers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Export your data</li>
                    <li>File a complaint with data protection authorities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
                  <p className="text-muted-foreground mb-4">
                    We use cookies and similar technologies to enhance your experience. You can control 
                    cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                  <p className="text-muted-foreground mb-4">
                    Our services are not intended for children under 13. We do not knowingly collect 
                    personal information from children under 13.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                  <p className="text-muted-foreground mb-4">
                    We may update this Privacy Policy periodically. We will notify you of significant 
                    changes via email or through our platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have questions about this Privacy Policy, please contact us at:
                    <br />
                    Email: privacy@whatshouldlnameit.com
                    <br />
                    Address: 123 Innovation Drive, San Francisco, CA 94105
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}