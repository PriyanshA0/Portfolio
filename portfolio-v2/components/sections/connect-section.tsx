'use client';

import { Github, Linkedin, Mail, PencilLine, Twitter } from 'lucide-react';
import { useState } from 'react';

import { socialLinks } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

function iconFor(label: string) {
  switch (label) {
    case 'GitHub':
      return Github;
    case 'Twitter/X':
      return Twitter;
    case 'LinkedIn':
      return Linkedin;
    case 'Mail':
      return Mail;
    case 'Resume':
      return PencilLine;
    default:
      return Github;
  }
}

export function ConnectSection() {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  return (
    <section id="connect" className="section-shell">
      <div className="section-inner">
        <SectionHeading eyebrow="Connect" title="A simple set of useful links." description="Everything is kept close together so it works well on smaller screens and feels easy to scan." />

        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((link) => {
              const Icon = iconFor(link.label);
              return (
                <Popover key={link.label} open={openPopover === link.label} onOpenChange={(open: boolean) => setOpenPopover(open ? link.label : null)}>
                  <PopoverTrigger asChild>
                    <button 
                      className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white/80 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:bg-slate-900/50 h-14 justify-start rounded-[1.25rem] px-4 text-slate-700 shadow-sm dark:text-slate-200 cursor-pointer"
                      type="button"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </button>
                  </PopoverTrigger>
                  {link.profile && (
                    <PopoverContent side="right" align="start" className="w-64 bg-slate-900 border-slate-800">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-slate-100">{link.label}</h3>
                        <p className="text-sm text-slate-300">{link.profile.bio}</p>
                        {link.profile.details && (
                          <p className="text-xs text-slate-400">{link.profile.details}</p>
                        )}
                        <div className="pt-2">
                          <a
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                            className="inline-flex items-center text-xs font-medium text-blue-400 hover:text-blue-300 cursor-pointer"
                            onClick={() => setOpenPopover(null)}
                          >
                            Visit →
                          </a>
                        </div>
                      </div>
                    </PopoverContent>
                  )}
                </Popover>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
