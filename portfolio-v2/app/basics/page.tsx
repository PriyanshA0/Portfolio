import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Code Basics | Priyanshu Mishra',
  description: 'A VS Code-style learning environment with curated programming problems.'
};

// Basics page disabled by request
export default function BasicsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
        <h1 className="text-2xl font-semibold mb-2">Code Basics (Disabled)</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">This project has been disabled and removed from the projects list. If you change your mind you can re-enable it in the data file.</p>
        <p className="text-xs text-slate-500 dark:text-slate-500">Path: /pages/basics/index.html is preserved under public but the app route is disabled.</p>
      </div>
    </div>
  );
}