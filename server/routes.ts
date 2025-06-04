import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNameGenerationRequestSchema, type NameSuggestion, type DomainAvailability } from "@shared/schema";


export async function registerRoutes(app: Express): Promise<Server> {
  
  // Generate names endpoint
  app.post("/api/generate-names", async (req, res) => {
    try {
      const validatedData = insertNameGenerationRequestSchema.parse(req.body);
      
      // Save the request
      const request = await storage.createNameGenerationRequest(validatedData);
      
      // Generate names based on the description
      const suggestions = await generateNames({
        description: validatedData.description,
        industry: validatedData.industry || undefined,
        nameStyle: validatedData.nameStyle || undefined
      });
      
      // Save generated names to storage (optional for free service)
      const namesToSave = suggestions.map(suggestion => ({
        name: suggestion.name,
        description: suggestion.description,
        domains: suggestion.domains,
        score: Math.floor(Math.random() * 100) + 1 // Simple scoring
      }));
      
      await storage.saveGeneratedNames(request.id, namesToSave);
      
      res.json({
        requestId: request.id,
        suggestions
      });
    } catch (error) {
      console.error("Error generating names:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Failed to generate names" 
      });
    }
  });

  // Get generated names for a request
  app.get("/api/requests/:id/names", async (req, res) => {
    try {
      const requestId = parseInt(req.params.id);
      const names = await storage.getGeneratedNames(requestId);
      
      res.json(names);
    } catch (error) {
      console.error("Error fetching names:", error);
      res.status(500).json({ message: "Failed to fetch names" });
    }
  });

  // Check domain availability endpoint
  app.post("/api/check-domain", async (req, res) => {
    try {
      const { domain } = req.body;
      
      if (!domain) {
        return res.status(400).json({ message: "Domain is required" });
      }

      // Mock domain checking - in production, use a real API like WhoisXML
      const availability = await checkDomainAvailability(domain);
      
      res.json(availability);
    } catch (error) {
      console.error("Error checking domain:", error);
      res.status(500).json({ message: "Failed to check domain availability" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function checkDomainAvailability(baseDomain: string): Promise<DomainAvailability[]> {
  // This is a mock implementation. In production, integrate with a real domain API
  const extensions = ['.com', '.io', '.net', '.org', '.co', '.tech', '.design', '.dev'];
  const availability: DomainAvailability[] = [];
  
  for (const ext of extensions) {
    const isAvailable = Math.random() > 0.3; // 70% chance of being available
    const price = isAvailable ? getPriceForExtension(ext) : undefined;
    
    availability.push({
      extension: ext,
      available: isAvailable,
      price
    });
  }
  
  return availability;
}

function getPriceForExtension(extension: string): string {
  const prices: Record<string, string> = {
    '.com': '$12.99/yr',
    '.io': '$39.99/yr',
    '.net': '$14.99/yr',
    '.org': '$14.99/yr',
    '.co': '$29.99/yr',
    '.tech': '$24.99/yr',
    '.design': '$29.99/yr',
    '.dev': '$19.99/yr'
  };
  
  return prices[extension] || '$19.99/yr';
}

async function generateNames(request: { description: string; industry?: string; nameStyle?: string }): Promise<NameSuggestion[]> {
  const { description, industry, nameStyle } = request;
  
  // Extract keywords from description
  const keywords = extractKeywords(description);
  const suggestions: NameSuggestion[] = [];
  
  // Generate different types of names based on style
  const nameTypes = getNameGenerationStrategies(nameStyle || 'creative');
  
  for (const strategy of nameTypes) {
    const names = strategy(keywords, industry);
    for (const name of names) {
      const domains = await checkDomainAvailability(name.toLowerCase());
      const status = determineNameStatus(domains);
      
      suggestions.push({
        name,
        description: generateNameDescription(name, keywords, industry),
        domains,
        status
      });
    }
  }
  
  // Shuffle and return top suggestions
  return suggestions.sort(() => Math.random() - 0.5).slice(0, 12);
}

function extractKeywords(description: string): string[] {
  // Simple keyword extraction - in production, use NLP
  const words = description.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
    
  const commonWords = ['that', 'this', 'with', 'from', 'they', 'have', 'will', 'your', 'what', 'when', 'where', 'would', 'there', 'could', 'other'];
  return words.filter(word => !commonWords.includes(word)).slice(0, 10);
}

function getNameGenerationStrategies(style: string) {
  const strategies = {
    creative: [
      (keywords: string[], industry?: string) => generatePortmanteau(keywords),
      (keywords: string[], industry?: string) => generatePrefixSuffix(keywords),
      (keywords: string[], industry?: string) => generateCompound(keywords)
    ],
    professional: [
      (keywords: string[], industry?: string) => generateProfessional(keywords, industry),
      (keywords: string[], industry?: string) => generateCorporate(keywords)
    ],
    playful: [
      (keywords: string[], industry?: string) => generatePlayful(keywords),
      (keywords: string[], industry?: string) => generateRhyming(keywords)
    ],
    modern: [
      (keywords: string[], industry?: string) => generateTech(keywords),
      (keywords: string[], industry?: string) => generateMinimal(keywords)
    ],
    classic: [
      (keywords: string[], industry?: string) => generateClassic(keywords, industry),
      (keywords: string[], industry?: string) => generateFounder(keywords)
    ]
  };
  
  return strategies[style as keyof typeof strategies] || strategies.creative;
}

function generatePortmanteau(keywords: string[]): string[] {
  const names: string[] = [];
  for (let i = 0; i < keywords.length - 1; i++) {
    for (let j = i + 1; j < keywords.length; j++) {
      const word1 = keywords[i];
      const word2 = keywords[j];
      names.push(capitalize(word1.slice(0, -2) + word2.slice(2)));
      names.push(capitalize(word2.slice(0, -2) + word1.slice(2)));
    }
  }
  return names.slice(0, 3);
}

function generatePrefixSuffix(keywords: string[]): string[] {
  const prefixes = ['Pro', 'Smart', 'Quick', 'Meta', 'Ultra', 'Hyper', 'Next', 'Super'];
  const suffixes = ['Lab', 'Hub', 'Core', 'Forge', 'Works', 'Tech', 'Solutions', 'Systems'];
  
  const names: string[] = [];
  keywords.forEach(keyword => {
    prefixes.forEach(prefix => {
      names.push(prefix + capitalize(keyword));
    });
    suffixes.forEach(suffix => {
      names.push(capitalize(keyword) + suffix);
    });
  });
  
  return names.slice(0, 4);
}

function generateCompound(keywords: string[]): string[] {
  const names: string[] = [];
  for (let i = 0; i < keywords.length - 1; i++) {
    for (let j = i + 1; j < keywords.length; j++) {
      names.push(capitalize(keywords[i]) + capitalize(keywords[j]));
      names.push(capitalize(keywords[j]) + capitalize(keywords[i]));
    }
  }
  return names.slice(0, 3);
}

function generateProfessional(keywords: string[], industry?: string): string[] {
  const professionalSuffixes = ['Solutions', 'Systems', 'Technologies', 'Consulting', 'Partners', 'Group'];
  const names: string[] = [];
  
  keywords.forEach(keyword => {
    professionalSuffixes.forEach(suffix => {
      names.push(capitalize(keyword) + ' ' + suffix);
    });
  });
  
  return names.slice(0, 3);
}

function generateCorporate(keywords: string[]): string[] {
  const corporatePrefixes = ['Global', 'United', 'Premier', 'Elite', 'Advanced'];
  const names: string[] = [];
  
  keywords.forEach(keyword => {
    corporatePrefixes.forEach(prefix => {
      names.push(prefix + ' ' + capitalize(keyword));
    });
  });
  
  return names.slice(0, 2);
}

function generatePlayful(keywords: string[]): string[] {
  const playfulSuffixes = ['ly', 'ify', 'io', 'ee', 'oo'];
  const names: string[] = [];
  
  keywords.forEach(keyword => {
    playfulSuffixes.forEach(suffix => {
      names.push(capitalize(keyword) + suffix);
    });
  });
  
  return names.slice(0, 3);
}

function generateRhyming(keywords: string[]): string[] {
  // Simple rhyming generation
  const rhymes: Record<string, string[]> = {
    tech: ['Check', 'Deck', 'Spec'],
    code: ['Mode', 'Node', 'Road'],
    data: ['Beta', 'Meta', 'Zeta']
  };
  
  const names: string[] = [];
  keywords.forEach(keyword => {
    const rhymeWords = rhymes[keyword] || [];
    rhymeWords.forEach(rhyme => {
      names.push(capitalize(keyword) + rhyme);
    });
  });
  
  return names.slice(0, 2);
}

function generateTech(keywords: string[]): string[] {
  const techSuffixes = ['Tech', 'Labs', 'AI', 'Digital', 'Cloud', 'Net'];
  const names: string[] = [];
  
  keywords.forEach(keyword => {
    techSuffixes.forEach(suffix => {
      names.push(capitalize(keyword) + suffix);
    });
  });
  
  return names.slice(0, 3);
}

function generateMinimal(keywords: string[]): string[] {
  const names: string[] = [];
  keywords.forEach(keyword => {
    if (keyword.length > 4) {
      names.push(capitalize(keyword.slice(0, 4)));
      names.push(capitalize(keyword.slice(0, 3)) + 'x');
    }
  });
  
  return names.slice(0, 2);
}

function generateClassic(keywords: string[], industry?: string): string[] {
  const classicSuffixes = ['& Co', 'Industries', 'Corporation', 'Company'];
  const names: string[] = [];
  
  keywords.forEach(keyword => {
    classicSuffixes.forEach(suffix => {
      names.push(capitalize(keyword) + ' ' + suffix);
    });
  });
  
  return names.slice(0, 2);
}

function generateFounder(keywords: string[]): string[] {
  const founderNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Davis'];
  const names: string[] = [];
  
  keywords.forEach(keyword => {
    founderNames.forEach(founder => {
      names.push(founder + ' ' + capitalize(keyword));
    });
  });
  
  return names.slice(0, 1);
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function determineNameStatus(domains: DomainAvailability[]): "available" | "taken" | "premium" | "hot" {
  const comAvailable = domains.find(d => d.extension === '.com')?.available;
  const availableCount = domains.filter(d => d.available).length;
  
  if (comAvailable && availableCount > 6) return 'hot';
  if (comAvailable && availableCount > 4) return 'premium';
  if (availableCount > 2) return 'available';
  return 'taken';
}

function generateNameDescription(name: string, keywords: string[], industry?: string): string {
  const descriptions = [
    `Perfect for ${industry || 'innovative'} solutions`,
    `Great for ${keywords[0] || 'modern'} businesses`,
    `Ideal for ${keywords[1] || 'technology'} startups`,
    `Suitable for ${industry || 'creative'} ventures`,
    `Strong brand for ${keywords[0] || 'digital'} services`
  ];
  
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}
