import Image from 'next/image';

import { footerNote } from '@/data/portfolio';

const catGif = '/assets/Cat-Pixel/cat-yawn.gif';

export function FooterSection() {
  return (
    <footer className="section-shell border-b-0">
      <div className="section-inner flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          {/* <p className="text-sm text-slate-500 dark:text-slate-400">© 2025 Priyanshu Mishra</p> */}
          <p className="text-sm text-slate-500 dark:text-slate-400">{footerNote}</p>
        </div>
        <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
          <Image
            src={catGif}
            alt="Animated pixel cat"
            width={96}
            height={96}
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </footer>
  );
}
