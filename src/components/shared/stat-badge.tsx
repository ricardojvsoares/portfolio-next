'use client';

import { useEffect, useRef, useState } from 'react';
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

function StatBadge({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="glass flex flex-col items-center gap-0.5 rounded-xl px-5 py-3">
      <span className="text-primary text-2xl font-bold tabular-nums">
        <AnimatedNumber value={value} suffix={suffix} />
      </span>
      <span className="text-muted-foreground label-caps">{label}</span>
    </div>
  );
}

export { StatBadge, AnimatedNumber };
