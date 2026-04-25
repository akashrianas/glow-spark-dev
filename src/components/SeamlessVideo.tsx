import { useEffect, useRef, useState } from "react";

interface SeamlessVideoProps {
  src: string;
  className?: string;
  /** Crossfade window in seconds before the loop point */
  fadeDuration?: number;
}

/**
 * Plays a looping video with NO visible seam.
 * Uses two stacked <video> elements offset by half the duration and crossfades
 * between them as each one approaches its end. The viewer never sees the jump
 * back to frame 0.
 */
export function SeamlessVideo({
  src,
  className = "",
  fadeDuration = 1,
}: SeamlessVideoProps) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [opacityA, setOpacityA] = useState(1);
  const [opacityB, setOpacityB] = useState(0);

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    let raf = 0;

    const start = () => {
      const dur = a.duration;
      if (!dur || !isFinite(dur)) {
        raf = requestAnimationFrame(start);
        return;
      }
      // Offset B by half the duration so it's ready to take over
      b.currentTime = dur / 2;
      a.play().catch(() => {});
      b.play().catch(() => {});
      tick();
    };

    const tick = () => {
      const dur = a.duration;
      if (dur && isFinite(dur)) {
        const tA = a.currentTime;
        const tB = b.currentTime;
        // Fade A out as it approaches the end; fade B in symmetrically
        const fadeA =
          tA > dur - fadeDuration
            ? Math.max(0, (dur - tA) / fadeDuration)
            : 1;
        const fadeB =
          tB > dur - fadeDuration
            ? Math.max(0, (dur - tB) / fadeDuration)
            : 1;
        setOpacityA(fadeA);
        setOpacityB(fadeB);
      }
      raf = requestAnimationFrame(tick);
    };

    if (a.readyState >= 1) start();
    else a.addEventListener("loadedmetadata", start, { once: true });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [fadeDuration, src]);

  return (
    <>
      <video
        ref={videoARef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className={className}
        style={{ opacity: opacityA }}
      />
      <video
        ref={videoBRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className={className}
        style={{ opacity: opacityB }}
      />
    </>
  );
}
