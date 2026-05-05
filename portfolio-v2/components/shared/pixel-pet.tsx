"use client";

const matrix = [
  [0, 0, 1, 1, 0, 0],
  [0, 1, 2, 2, 1, 0],
  [1, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [0, 1, 2, 2, 1, 0],
  [0, 0, 1, 1, 0, 0]
];

export function PixelPet() {
  return (
    <div className="relative inline-flex animate-float rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="grid grid-cols-6 gap-[2px]">
        {matrix.flatMap((row, rowIndex) =>
          row.map((value, columnIndex) => (
            <span
              key={`${rowIndex}-${columnIndex}`}
              className={value === 0 ? 'h-2.5 w-2.5 rounded-[2px] bg-transparent' : value === 1 ? 'h-2.5 w-2.5 rounded-[2px] bg-slate-700/80 dark:bg-slate-300/80' : value === 2 ? 'h-2.5 w-2.5 rounded-[2px] bg-slate-900 dark:bg-slate-100' : 'h-2.5 w-2.5 rounded-[2px] bg-cyan-500'}
            />
          ))
        )}
      </div>
      <span className="absolute -right-1 top-0 text-[10px] text-slate-400 dark:text-slate-500">zz</span>
    </div>
  );
}
