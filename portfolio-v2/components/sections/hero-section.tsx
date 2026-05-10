"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BadgeCheck, Eye } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { VisitCounter } from '@/components/shared/visit-counter';
import heroImage from '../../assets/My-Img/image.png';

const typingPhrases = ['web apps', 'mobile apps', 'clean UI systems'];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    const timeout = window.setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setPhraseIndex((value) => (value + 1) % typingPhrases.length);
        return;
      }

      setTypedText((currentText) =>
        isDeleting ? currentPhrase.slice(0, currentText.length - 1) : currentPhrase.slice(0, currentText.length + 1)
      );
    }, isDeleting ? 42 : 74);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, typedText]);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
      <Reveal className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/8 px-4 py-2 text-sm text-cyan-800 shadow-sm dark:text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Coding · Learning · Building
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Developer portfolio</p>
          <h1 className="max-w-3xl font-display text-4xl font-medium tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-6xl">
            Priyanshu Mishra
            <span className="ml-3 inline-flex align-middle text-cyan-500">
              <BadgeCheck className="h-7 w-7 sm:h-8 sm:w-8" />
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Building practical, user-focused applications with a focus on speed, clarity, and polished details.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-950 dark:text-slate-50">I build</span>
            <span className="inline-flex min-w-[12ch] items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 font-mono text-cyan-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-cyan-300">
              {typedText}
              <span className="ml-1 inline-block h-4 w-[1px] animate-pulse bg-current align-middle" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild type="button" className="rounded-full px-5">
            <Link href="/projects">View projects</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-5">
            <Link href="#connect">Contact me</Link>
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
        <div className="relative mx-auto aspect-square w-full max-w-[24rem] rounded-[2rem] border border-slate-200 bg-white/85 p-4 shadow-soft dark:border-slate-800 dark:bg-slate-950/70">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_35%)]" />
          <div className="relative grid h-full place-items-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
            <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-cyan-400/20 blur-2xl" />
            <div className="absolute right-6 top-10 h-16 w-16 rounded-full bg-amber-300/30 blur-2xl" />
            <div className="relative aspect-[4/5] w-[min(76%,18rem)] overflow-hidden rounded-[1.75rem] border border-white/60 bg-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.18)] dark:border-slate-800/60 dark:bg-slate-900">
              <Image
                src={heroImage}
                alt="Priyanshu Mishra"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 76vw, 18rem"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
