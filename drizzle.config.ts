import { defineConfig } from "drizzle-kit";
 
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
