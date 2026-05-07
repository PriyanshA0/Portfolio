import { Film } from 'lucide-react';

import { favoriteMovie } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card } from '@/components/ui/card';

export function FavMoviesSection() {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <SectionHeading eyebrow="Favorite Movie" title="A timeless masterpiece." description="Inspiring stories that move me and shape how I think about creativity, courage, and life." />

        <Reveal>
          <Card className="overflow-hidden rounded-[2rem] border-slate-200/80 p-4 dark:border-slate-800 sm:p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 rounded-[1.5rem] bg-white p-4 shadow-sm dark:bg-slate-950/70 sm:gap-6 sm:p-5">
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[1.25rem] border border-slate-200 dark:border-slate-800 sm:h-28 sm:w-24">
                  <img
                    src={favoriteMovie.cover}
                    alt={favoriteMovie.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1489599849228-8d0c07f20a15?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                  <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">{favoriteMovie.label}</p>
                  <h3 className="truncate font-display text-2xl text-slate-950 dark:text-slate-50">
                    {favoriteMovie.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{favoriteMovie.type}</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-slate-50 p-4 dark:from-slate-900 dark:to-slate-950 sm:p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <Film className="h-4 w-4" />
                      What&apos;s Inside
                    </h4>
                    <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {favoriteMovie.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-slate-900 dark:text-slate-50">Why It&apos;s My Favorite</h4>
                    <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {favoriteMovie.whyFavorite}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
