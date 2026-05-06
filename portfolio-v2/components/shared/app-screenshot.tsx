'use client';

interface AppScreenshotProps {
  src: string;
  alt: string;
  index: number;
}

export function AppScreenshot({ src, alt, index }: AppScreenshotProps) {
  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 hover:shadow-lg transition-shadow">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1512941691920-25bda36dc643?auto=format&fit=crop&w=600&q=80';
        }}
      />
    </div>
  );
}
