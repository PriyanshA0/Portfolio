import { Briefcase } from 'lucide-react';

import { experience } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <SectionHeading eyebrow="Experience" title="Hands-on work, not just side quests." description="Roles and internships that shaped how I approach backend systems, product quality, and delivery." />

        <div className="space-y-5">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.06}>
              <div className="relative pl-7 sm:pl-10">
                <span className="absolute left-2 top-8 h-[calc(100%-2rem)] w-px bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
                <span className="absolute left-0 top-8 h-4 w-4 rounded-full border-4 border-slate-100 bg-cyan-500 dark:border-slate-950" aria-hidden="true" />
                <Card className="rounded-[2rem] border-slate-200/80 p-6 dark:border-slate-800 sm:p-7">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                        <Briefcase className="h-3.5 w-3.5" />
                        {item.company}
                      </div>
                      <h3 className="font-display text-2xl text-slate-950 dark:text-slate-50">{item.role}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.type} · {item.duration}
                      </p>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">{item.summary}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <Badge key={tech} variant="subtle" className="rounded-full px-3 py-1 text-[12px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
