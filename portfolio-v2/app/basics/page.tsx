import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Code Basics | Priyanshu Mishra',
  description: 'A VS Code-style learning environment with curated programming problems.'
};

export default function BasicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="rounded-2xl">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>
          <div className="flex-1 text-center">
            <h1 className="font-display text-lg font-semibold text-slate-950 dark:text-slate-50">Code Basics</h1>
          </div>
          <Button asChild variant="outline" className="rounded-2xl">
            <a href="/pages/basics/index.html" target="_blank" rel="noreferrer">
              Open Original
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-4 rounded-[2rem] border border-slate-200/80 bg-white/85 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 sm:p-6">
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
            The full legacy learning project is embedded below, so you can browse the explorer and solve problems exactly like the original build.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <iframe
            src="/pages/basics/index.html"
            title="Code Basics"
            className="h-[calc(100vh-13rem)] w-full bg-white dark:bg-slate-950"
          />
        </div>
      </main>
    </div>
  );
}