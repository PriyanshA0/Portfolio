import { cn } from '@/lib/utils';

export function SectionHeading({ title, eyebrow, description, className }: { title: string; eyebrow?: string; description?: string; className?: string }) {
  return (
    <div className={cn('mb-8 max-w-3xl', className)}>
      {eyebrow ? <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-lead mt-4">{description}</p> : null}
    </div>
  );
}
