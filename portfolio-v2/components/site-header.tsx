"use client";

import { Menu, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

export function SiteHeader({ onOpenSearch, onOpenMenu }: { onOpenSearch: () => void; onOpenMenu: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm transition hover:scale-[1.02] dark:bg-white dark:text-slate-950"
          aria-label="Search portfolio"
        >
          <span className="font-display text-xl font-bold tracking-tight">PM</span>
        </button>

        <Button
          type="button"
          variant="outline"
          onClick={onOpenSearch}
          className={cn('hidden h-11 flex-1 justify-start gap-2 rounded-2xl px-4 text-slate-500 shadow-sm md:flex')}
        >
          <Search className="h-4 w-4" />
          <span>Search</span>
          <span className="ml-auto rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">Ctrl K</span>
        </Button>

        <Button type="button" variant="outline" onClick={onOpenSearch} className="h-11 rounded-2xl px-4 md:hidden">
          <Search className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>

        <div className="hidden h-6 w-px bg-slate-200 dark:bg-slate-800 md:block" />

        <Button type="button" variant="outline" size="icon" onClick={onOpenMenu} className="h-11 w-11 rounded-2xl">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
