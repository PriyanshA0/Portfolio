"use client";

import { useMemo } from 'react';
import { Check, Link2, MoonStar, Search, Sparkles } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { navigationItems, socialLinks } from '@/data/portfolio';

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (href: string) => void;
  onToggleTheme: () => void;
  onScrollTop: () => void;
};

export function CommandPalette({ open, onOpenChange, onNavigate, onToggleTheme, onScrollTop }: CommandPaletteProps) {
  const actions = useMemo(
    () => [
      { label: 'Toggle theme', icon: MoonStar, action: onToggleTheme },
      { label: 'Scroll to top', icon: Sparkles, action: onScrollTop }
    ],
    [onScrollTop, onToggleTheme]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 sm:rounded-[2rem]">
        <DialogHeader className="sr-only">
          <DialogTitle>Command palette</DialogTitle>
        </DialogHeader>

        <Command className="rounded-[2rem] border-0 shadow-none">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList className="max-h-[440px] px-2 pb-2">
            <CommandEmpty>
              <div className="flex flex-col items-center justify-center gap-2 py-6 text-sm text-slate-500 dark:text-slate-400">
                <Search className="h-4 w-4" />
                No matches found.
              </div>
            </CommandEmpty>

            <CommandGroup heading="Navigation">
              {navigationItems.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${item.label} ${item.href}`}
                  onSelect={() => onNavigate(item.href)}
                >
                  <Link2 className="h-4 w-4" />
                  <span>{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator className="my-2" />

            <CommandGroup heading="Actions">
              {actions.map((action) => (
                <CommandItem key={action.label} value={action.label} onSelect={action.action}>
                  <action.icon className="h-4 w-4" />
                  <span>{action.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator className="my-2" />

            <CommandGroup heading="Links">
              {socialLinks.map((link) => (
                <CommandItem key={link.label} value={`${link.label} ${link.href}`} onSelect={() => window.open(link.href, link.href.startsWith('http') ? '_blank' : '_self', 'noopener,noreferrer')}>
                  <Check className="h-4 w-4" />
                  <span>{link.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
