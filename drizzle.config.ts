import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
// Change the path if your .env file is located elsewhere
dotenv.config({ path: '.env.local' });
 
const dbUrl = process.env.DB_URL;
if (!dbUrl) {
  throw new Error("Environment variable DB_URL must be set");
}

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl,
  }
});
