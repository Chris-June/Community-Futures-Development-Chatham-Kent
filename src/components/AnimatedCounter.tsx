import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const pauseBetweenLoops = 1000; // 1 second pause between loops

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      // Calculate progress within the current animation cycle
      const elapsed = timestamp - startTime;
      const cycleTime = duration * 1000 + pauseBetweenLoops;
      const isCountingPhase = (elapsed % cycleTime) <= (duration * 1000);
      
      if (isCountingPhase) {
        // During counting phase (0 to duration seconds)
        const countProgress = (elapsed % (duration * 1000)) / (duration * 1000);
        const currentCount = Math.floor(countProgress * (end - startValue) + startValue);
        setCount(currentCount);
      } else {
        // During pause phase (after counting, before next loop)
        setCount(end);
      }

      // Continue the animation loop
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start the animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup function to cancel animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}