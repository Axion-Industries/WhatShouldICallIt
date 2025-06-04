import { 
  users, 
  nameGenerationRequests, 
  generatedNames,
  type User, 
  type InsertUser,
  type NameGenerationRequest,
  type InsertNameGenerationRequest,
  type GeneratedName
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createNameGenerationRequest(request: InsertNameGenerationRequest): Promise<NameGenerationRequest>;
  getNameGenerationRequest(id: number): Promise<NameGenerationRequest | undefined>;
  saveGeneratedNames(requestId: number, names: Omit<GeneratedName, 'id' | 'requestId' | 'createdAt'>[]): Promise<GeneratedName[]>;
  getGeneratedNames(requestId: number): Promise<GeneratedName[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private nameRequests: Map<number, NameGenerationRequest>;
  private generatedNames: Map<number, GeneratedName>;
  private currentUserId: number;
  private currentRequestId: number;
  private currentGeneratedNameId: number;

  constructor() {
    this.users = new Map();
    this.nameRequests = new Map();
    this.generatedNames = new Map();
    this.currentUserId = 1;
    this.currentRequestId = 1;
    this.currentGeneratedNameId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createNameGenerationRequest(request: InsertNameGenerationRequest): Promise<NameGenerationRequest> {
    const id = this.currentRequestId++;
    const nameRequest: NameGenerationRequest = { 
      id,
      description: request.description,
      industry: request.industry || null,
      nameStyle: request.nameStyle || null,
      createdAt: new Date()
    };
    this.nameRequests.set(id, nameRequest);
    return nameRequest;
  }

  async getNameGenerationRequest(id: number): Promise<NameGenerationRequest | undefined> {
    return this.nameRequests.get(id);
  }

  async saveGeneratedNames(requestId: number, names: Omit<GeneratedName, 'id' | 'requestId' | 'createdAt'>[]): Promise<GeneratedName[]> {
    const savedNames: GeneratedName[] = [];
    
    for (const nameData of names) {
      const id = this.currentGeneratedNameId++;
      const generatedName: GeneratedName = {
        ...nameData,
        id,
        requestId,
        createdAt: new Date()
      };
      this.generatedNames.set(id, generatedName);
      savedNames.push(generatedName);
    }
    
    return savedNames;
  }

  async getGeneratedNames(requestId: number): Promise<GeneratedName[]> {
    return Array.from(this.generatedNames.values()).filter(
      (name) => name.requestId === requestId
    );
  }
}

export const storage = new MemStorage();
