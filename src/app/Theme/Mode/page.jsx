"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RxMoon } from "react-icons/rx";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <RxMoon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </div>
  );
}
