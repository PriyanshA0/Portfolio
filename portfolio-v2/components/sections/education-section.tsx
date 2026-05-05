import { GraduationCap } from 'lucide-react';

import { education } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card } from '@/components/ui/card';

export function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="section-inner">
        <SectionHeading eyebrow="Education" title="The long route that still matters." description="My academic timeline, shown simply and without extra ceremony." />

        <div className="grid gap-5 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.05}>
              <Card className="h-full rounded-[2rem] border-slate-200/80 p-6 dark:border-slate-800">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl text-slate-950 dark:text-slate-50">{item.school}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.program}
                  </p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.duration}</p>
                  <p className="pt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.notes}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
