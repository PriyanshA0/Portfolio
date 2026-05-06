import { Music2 } from 'lucide-react';

import { musicCard } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function MusicSection() {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <SectionHeading eyebrow="Music Widget" title="A tiny now-playing style card." description="A quiet detail inspired by profile dashboards and music apps, sized to fit naturally in the layout." />

        <Reveal>
          <Card className="overflow-hidden rounded-[2rem] border-slate-200/80 p-4 dark:border-slate-800 sm:p-5">
            <div className="flex items-center gap-4 rounded-[1.5rem] bg-white p-3 shadow-sm dark:bg-slate-950/70 sm:p-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.35rem] border border-slate-200 dark:border-slate-800 sm:h-24 sm:w-24">
                <img src={musicCard.cover} alt={musicCard.artist} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 rounded-[1.35rem] bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">{musicCard.label}</p>
                <h3 className="truncate font-display text-2xl text-slate-950 dark:text-slate-50">{musicCard.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{musicCard.artist}</p>
              </div>
              <a
                href={musicCard.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition"
                >
                  <Music2 className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
