import { aboutParagraphs, aboutPoints } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <Card className="overflow-hidden rounded-[2rem] border-slate-200/80 dark:border-slate-800">
            <div className="space-y-5 p-6 sm:p-7 lg:p-8">
              {/* About Text */}
              <div className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-balance">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Values Grid */}
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">What I value</p>
                <ul className="space-y-2 text-xs leading-6 text-slate-600 dark:text-slate-300 sm:text-sm">
                  {aboutPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
