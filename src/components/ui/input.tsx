import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "ghost-outline flex h-12 w-full rounded-xl bg-card px-4 py-3 text-sm text-foreground shadow-none transition-all placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/70",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
