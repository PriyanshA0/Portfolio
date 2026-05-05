"use client";

import { useEffect, useState } from 'react';

import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card } from '@/components/ui/card';

export function GitHubActivitySection() {
  const [cacheKey, setCacheKey] = useState('initial');

  useEffect(() => {
    setCacheKey(String(Date.now()));
  }, []);

  return (
    <section className="section-shell">
      <div className="section-inner">
        <SectionHeading eyebrow="GitHub Activity" title="Live contribution chart." description="This chart is pulled directly from your GitHub activity and renders as a live SVG, so there are no fake numbers or extra links above it." />

        <Reveal>
          <Card className="rounded-[2rem] border-slate-200/80 p-6 dark:border-slate-800 sm:p-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-4 dark:border-slate-800">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=PriyanshA0&theme=github-compact&hide_border=true&area=true&v=${cacheKey}`}
                alt="GitHub contributions chart for PriyanshA0"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
