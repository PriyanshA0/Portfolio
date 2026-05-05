"use client";

import { useEffect, useState } from 'react';
import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : false;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="relative overflow-hidden"
    >
      <SunMedium className={`h-4 w-4 transition-all ${isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 opacity-100'}`} />
      <MoonStar className={`absolute h-4 w-4 transition-all ${isDark ? 'scale-100 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`} />
    </Button>
  );
}
