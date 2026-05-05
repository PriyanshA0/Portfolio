import { ArrowUpRight, Github } from 'lucide-react';

import { allProjects } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { ProjectImage } from '@/components/shared/project-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: 'All Projects | Priyanshu Mishra',
  description: 'Explore all projects and web applications built by Priyanshu Mishra'
};

export default function ProjectsPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="rounded-2xl">
            <Link href="/">
              <span className="font-display text-xl font-bold tracking-tight">PM</span>
            </Link>
          </Button>
          <div className="flex-1" />
          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="/">← Back Home</Link>
          </Button>
        </div>
      </header>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 dark:from-slate-950 via-slate-950 dark:to-slate-900">
        <section className="section-shell">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Projects"
              title="All Projects & Builds"
              description="A complete collection of all projects, applications, and experiments I've built. Each one represents a learning opportunity and a step forward in development."
            />

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {allProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.03}>
                  <Card className="group h-full overflow-hidden rounded-[2rem] border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800">
                    <CardHeader className="p-0">
                      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
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
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-6 text-slate-600 dark:text-slate-400">{project.description}</CardDescription>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="subtle" className="rounded-full px-3 py-1 text-[12px]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="grid grid-cols-2 gap-2 border-t border-slate-200/80 p-0 dark:border-slate-800">
                      <Button asChild variant="ghost" className="h-12 rounded-none rounded-bl-[2rem] text-slate-700 dark:text-slate-200">
                        <a href={project.liveHref} target={project.liveHref.startsWith('http') ? '_blank' : undefined} rel={project.liveHref.startsWith('http') ? 'noreferrer' : undefined}>
                          Visit
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="ghost" className="h-12 rounded-none rounded-br-[2rem] text-slate-700 dark:text-slate-200">
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
      </main>
    </>
  );
}
