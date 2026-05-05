"use client";

import { ExternalLink, MoonStar, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { navigationItems, socialLinks } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const socialIconClass = 'h-4 w-4';

export function MobileMenu({ open, onOpenChange, onNavigate, onToggleTheme }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (href: string) => void;
  onToggleTheme: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[min(92vw,26rem)] p-0 sm:rounded-[2rem]">
        <DialogHeader className="border-b border-slate-200 px-6 py-5 text-left dark:border-slate-800">
          <DialogTitle className="font-display text-2xl">Navigation</DialogTitle>
          <p className="text-sm text-slate-500 dark:text-slate-400">Move around the portfolio or jump straight to an action.</p>
        </DialogHeader>

        <div className="space-y-6 p-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Sections</p>
            <div className="grid gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => onNavigate(item.href)}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900"
                >
                  <span>{item.label}</span>
                  <ExternalLink className="h-4 w-4 text-slate-400" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Links</p>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="outline" className="justify-start rounded-2xl px-4" asChild>
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                    <span className={cn(socialIconClass)}>{link.label === 'Mail' ? '✉' : link.label === 'Resume' ? '↗' : '•'}</span>
                    <span>{link.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Button type="button" variant="secondary" className="rounded-2xl" onClick={onToggleTheme}>
              <MoonStar className="h-4 w-4" />
              Toggle theme
            </Button>
            <Button type="button" variant="accent" className="rounded-2xl" onClick={() => onNavigate('#home')}>
              <Sparkles className="h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
