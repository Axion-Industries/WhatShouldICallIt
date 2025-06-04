import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Choosing a Memorable Business Name",
      excerpt: "Learn the essential principles of creating a name that sticks in your customers' minds and builds lasting brand recognition.",
      author: "Sarah Chen",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Naming Tips",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 2,
      title: "The Psychology Behind Successful Brand Names",
      excerpt: "Discover how cognitive science and psychology influence customer perception and decision-making when it comes to brand names.",
      author: "Marcus Rodriguez",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Brand Psychology",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 3,
      title: "Domain Strategy: Beyond .com",
      excerpt: "Explore alternative domain extensions and learn when they might be the perfect choice for your business or project.",
      author: "Emily Foster",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Domain Strategy",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 4,
      title: "AI in Creative Naming: The Future is Here",
      excerpt: "How artificial intelligence is revolutionizing the naming process and helping entrepreneurs find perfect names faster than ever.",
      author: "Sarah Chen",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 5,
      title: "Trademark Basics Every Entrepreneur Should Know",
      excerpt: "Navigate the legal landscape of business naming with this essential guide to trademarks, copyrights, and intellectual property.",
      author: "Legal Team",
      date: "November 20, 2024",
      readTime: "10 min read",
      category: "Legal",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 6,
      title: "Industry-Specific Naming Trends for 2024",
      excerpt: "Analyze the latest naming conventions and trends across different industries, from tech startups to traditional businesses.",
      author: "Marcus Rodriguez",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Naming Insights & Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert advice, industry insights, and practical tips to help you master the art of business naming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest naming insights, industry trends, and exclusive tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}