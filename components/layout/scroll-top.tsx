"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0 })}
      className="cursor-pointer fixed right-4 bottom-4 z-50 flex size-11 items-center justify-center rounded-full border border-brand bg-white text-brand shadow-lg transition-colors hover:bg-brand hover:text-white lg:right-8 lg:bottom-8 lg:size-12"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}

export { ScrollTop };
