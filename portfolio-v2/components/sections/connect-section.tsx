import { Github, Linkedin, Mail, PencilLine, Twitter } from 'lucide-react';

import { socialLinks } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';

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
  return (
    <section id="connect" className="section-shell">
      <div className="section-inner">
        <SectionHeading eyebrow="Connect" title="A simple set of useful links." description="Everything is kept close together so it works well on smaller screens and feels easy to scan." />

        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((link) => {
              const Icon = iconFor(link.label);
              return (
                <Button key={link.label} asChild variant="outline" className="h-14 justify-start rounded-[1.25rem] px-4 text-slate-700 shadow-sm dark:text-slate-200">
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
