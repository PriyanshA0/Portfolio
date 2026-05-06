import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download, Github, ExternalLink } from 'lucide-react';
import { allProjects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default async function AppDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!project || project.type !== 'app') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">App Not Found</h1>
          <Button asChild>
            <Link href="/">← Back Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
          <h1 className="text-lg font-semibold">{project.title}</h1>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* App Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 mb-8 border border-slate-200/80 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="relative h-32 w-32 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-5xl">📱</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="subtle" className="rounded-full px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                {project.appDownloadUrl && (
                  <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700">
                    <a href={project.appDownloadUrl} target="_blank" rel="noreferrer">
                      <Download className="h-5 w-5 mr-2" />
                      Download App
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href={project.liveHref} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Open Website
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href={project.githubHref} target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Gallery */}
        {project.appScreenshots && project.appScreenshots.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">App Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.appScreenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1512941691920-25bda36dc643?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-6">About This App</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{project.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="rounded-full px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Release Year</h3>
              <p className="text-slate-600 dark:text-slate-400">{project.year}</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Ready to try {project.title}?
          </p>
          <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700">
            <a href={project.appDownloadUrl} target="_blank" rel="noreferrer">
              <Download className="h-5 w-5 mr-2" />
              Download Now
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
