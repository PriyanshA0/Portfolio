import Image from 'next/image';
import { BadgeCheck, Eye } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { VisitCounter } from '@/components/shared/visit-counter';
import heroImage from '../../assets/My-Img/image.png';

export function HeroSection() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <Reveal className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/8 px-4 py-2 text-sm text-cyan-800 shadow-sm dark:text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Coding · Learning · Building
        </div>

        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Developer portfolio</p>
          <h1 className="max-w-3xl font-display text-5xl font-medium tracking-tight text-slate-950 dark:text-slate-50 sm:text-6xl lg:text-7xl">
            Priyanshu Mishra
            <span className="ml-3 inline-flex align-middle text-cyan-500">
              <BadgeCheck className="h-8 w-8 sm:h-9 sm:w-9" />
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 sm:text-xl">
            Building practical, user-focused web applications. Full-stack development with modern technologies and a focus on clean code.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="button" className="rounded-full">
            View projects
          </Button>
          <Button type="button" variant="outline" className="rounded-full">
            Contact me
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-800 dark:bg-slate-950/70">
            <Eye className="h-4 w-4" />
            <VisitCounter />
          </span>
          <Badge variant="subtle" className="rounded-full px-3 py-2 text-[13px]">
            Available for selective work
          </Badge>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="relative">
        <div className="relative mx-auto aspect-square w-full max-w-[28rem] rounded-[2rem] border border-slate-200 bg-white/85 p-4 shadow-soft dark:border-slate-800 dark:bg-slate-950/70">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_35%)]" />
          <div className="relative grid h-full place-items-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
            <div className="absolute right-6 top-10 h-20 w-20 rounded-full bg-amber-300/30 blur-2xl" />
            <div className="relative aspect-[4/5] w-[min(82%,20rem)] overflow-hidden rounded-[1.75rem] border border-white/60 bg-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.18)] dark:border-slate-800/60 dark:bg-slate-900">
              <Image
                src={heroImage}
                alt="Priyanshu Mishra"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 82vw, 20rem"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
