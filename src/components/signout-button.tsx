"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button"; // Assuming you're using shadcn/ui. If not, adjust import accordingly

interface SignOutButtonProps {
  signOutAction: () => Promise<void>;
}

export function SignOutButton({ signOutAction }: SignOutButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      try {
        await signOutAction();
        toast.success("Signed out successfully");
      } catch (error) {
        toast.error("Failed to sign out " + (error as Error).message);
      }
    });
  };

  return (
    <Button
      onClick={handleSignOut}
      disabled={isPending}
      variant="destructive"
    >
      {isPending ? "Signing out..." : "Sign out"}
    </Button>
  );
}
