import { Hono } from "hono";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

app.get("/api/hello-hono", (c) => {
  return c.json({
    message: "Hello Hono!",
  });
});

// Export the Hono app
export default app;
