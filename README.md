# Better-Auth Example Project

This is a minimal example repository demonstrating Better-Auth without the handler integration with:

- [Next.js 15](https://nextjs.org)
- [Better-Auth](https://better-auth.com) for authentication
- [Tailwind CSS v4](https://tailwindcss.com) for styling

This repository is intended as a testing ground for Better-Auth without custom handlers.

## Setup

1. Install dependencies:

```bash
bun install
```

2. Run the Better-Auth migrations:

```bash
npx @better-auth/cli migrate
```

3. Start the development server:

```bash
bun dev
```

4. Visit [http://localhost:3000](http://localhost:3000) to test the basic auth flow.

## What's Included

- Basic authentication flow (sign up, sign in, sign out)
- Default Better-Auth configuration
- Minimal UI components for testing
- Example migration setup

## Project Structure

- `/src/components` - Basic auth components (signup-form, signin-form, signout-button)
- `/src/app` - Minimal Next.js app setup
- `/better-auth_migrations` - Default Better-Auth migrations

## Learn More

- [Better-Auth Documentation](https://better-auth.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Note

This is a test repository and should not be used as a template for production applications. For production use, please refer to the official Better-Auth documentation for proper setup and security considerations.
