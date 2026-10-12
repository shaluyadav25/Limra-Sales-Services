import { useEffect, useRef } from "react";

export default function ScrollProgressBar({ color = "#2f6f5e", height = 4 }) {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Recalculate when page content changes size (e.g. after a route change)
    const observer = new ResizeObserver(onScroll);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height,
        zIndex: 1000,
        background: "rgba(0,0,0,0.08)",
      }}
    >
      <div
        ref={barRef}
        style={{
          height: "100%",
          background: color,
          transformOrigin: "0 50%",
          transform: "scaleX(0)",
          willChange: "transform",
        }}
      />
    </div>
  );
}