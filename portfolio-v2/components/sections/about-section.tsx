import { aboutParagraphs, aboutPoints } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="About"
          title="Building with intent, not just speed."
          description="A short snapshot of how I think about product work, learning, and the systems I enjoy building."
        />

        <Reveal>
          <Card className="overflow-hidden rounded-[2rem] border-slate-200/80 dark:border-slate-800">
            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-balance">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/40">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">What I value</p>
                <ul className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {aboutPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
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
