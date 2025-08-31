import { Express } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { connectToMongoDB } from "./mongodb.js";
import walletRoutes from "./routes/wallet.js";
import x402Routes from "./routes/x402.js";
import schemesRoutes from "./routes/schemes.js";

export async function registerRoutes(app: Express): Promise<Server> {
  // Connect to MongoDB
  await connectToMongoDB();

  // Register API routes
  app.use('/api/wallet', walletRoutes);
  app.use('/api/x402', x402Routes);
  app.use('/api/schemes', schemesRoutes);

  // Create HTTP server
  const httpServer = createServer(app);
  
  return httpServer;
}
