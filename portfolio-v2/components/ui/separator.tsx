import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

function Separator({ className, orientation = 'horizontal', decorative = true, ...props }: SeparatorPrimitive.SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      className={cn('shrink-0 bg-slate-200 dark:bg-slate-800', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className)}
      decorative={decorative}
      orientation={orientation}
      {...props}
    />
  );
}

export { Separator };
