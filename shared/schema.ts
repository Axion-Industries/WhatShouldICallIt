import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const nameGenerationRequests = pgTable("name_generation_requests", {
  id: serial("id").primaryKey(),
  description: text("description").notNull(),
  industry: text("industry"),
  nameStyle: text("name_style"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const generatedNames = pgTable("generated_names", {
  id: serial("id").primaryKey(),
  requestId: integer("request_id").references(() => nameGenerationRequests.id),
  name: text("name").notNull(),
  description: text("description"),
  domains: jsonb("domains").$type<DomainAvailability[]>(),
  score: integer("score"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertNameGenerationRequestSchema = createInsertSchema(nameGenerationRequests).pick({
  description: true,
  industry: true,
  nameStyle: true,
}).extend({
  industry: z.string().optional(),
  nameStyle: z.string().optional(),
});

export const nameGenerationFormSchema = z.object({
  description: z.string().min(10, "Please provide a more detailed description"),
  industry: z.string().optional(),
  nameStyle: z.string().default("creative"),
});

export interface DomainAvailability {
  extension: string;
  available: boolean;
  price?: string;
}

export interface NameSuggestion {
  name: string;
  description: string;
  domains: DomainAvailability[];
  status: "available" | "taken" | "premium" | "hot";
}

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertNameGenerationRequest = z.infer<typeof insertNameGenerationRequestSchema>;
export type NameGenerationRequest = typeof nameGenerationRequests.$inferSelect;
export type GeneratedName = typeof generatedNames.$inferSelect;
export type NameGenerationForm = z.infer<typeof nameGenerationFormSchema>;
