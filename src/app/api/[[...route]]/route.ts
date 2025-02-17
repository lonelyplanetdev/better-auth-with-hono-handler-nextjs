import { auth } from "@/lib/auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .get("/hello", (c) => {
    return c.text("Hello World");
  })
  .post("/auth/signup", async (c) => {
    const { email, password } = await c.req.json();
    await auth.api.signUpEmail({
      headers: c.req.header(),
      body: {
        email,
        name: email,
        password,
      },
    });
    return c.json({ success: true });
  })
  .post("/auth/signin", async (c) => {
    const { email, password } = await c.req.json();
    await auth.api.signInEmail({
      headers: c.req.header(),
      body: {
        email,
        password,
      },
    });
    return c.json({ success: true });
  })
  .post("/auth/signout", async (c) => {
    await auth.api.signOut({
      headers: c.req.header(),
    });
    return c.json({ success: true });
  });

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
