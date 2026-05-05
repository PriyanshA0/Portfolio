import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';

import { projects } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { ProjectImage } from '@/components/shared/project-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Featured Work"
            description="A selection of recent projects and builds. Explore all projects to see the complete collection."
            className="mb-0"
          />
          <Button asChild className="rounded-full shrink-0">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <Card className="group h-full overflow-hidden rounded-[2rem] border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800">
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur dark:bg-slate-950/70 dark:text-slate-200">
                      {project.year}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-7 text-slate-600 dark:text-slate-400">{project.description}</CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="subtle" className="rounded-full px-3 py-1 text-[12px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="grid grid-cols-2 gap-2 border-t border-slate-200/80 p-0 dark:border-slate-800">
                  <Button asChild variant="ghost" className="h-14 rounded-none rounded-bl-[2rem] text-slate-700 dark:text-slate-200">
                    <a href={project.liveHref} target={project.liveHref.startsWith('http') ? '_blank' : undefined} rel={project.liveHref.startsWith('http') ? 'noreferrer' : undefined}>
                      Visit
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="h-14 rounded-none rounded-br-[2rem] text-slate-700 dark:text-slate-200">
                    <a href={project.githubHref} target="_blank" rel="noreferrer">
                      Code
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
