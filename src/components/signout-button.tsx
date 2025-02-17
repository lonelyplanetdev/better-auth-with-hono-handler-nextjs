"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { client } from "@/lib/hono-client";

export function SignOutButton() {
  const [isPending, setIsPending] = useState(false);

  const handleSignOut = async () => {
    setIsPending(true);
    try {
      await client.api.auth.signout.$post();
      toast.success("Signed out successfully");
    } catch (error) {
      toast.error("Failed to sign out: " + (error as Error).message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      disabled={isPending}
      variant="outline"
    >
      {isPending ? "Signing out..." : "Sign out"}
    </Button>
  );
}
