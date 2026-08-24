import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Tech Avenue — home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      {/* Drop the real mark at public/logo.png (or .svg and update src). */}
      <Image
        src="/logo.png"
        alt="Tech Avenue — leading the innovation drive"
        width={188}
        height={50}
        priority
        className="h-11 w-auto"
      />
    </Link>
  )
}

export { Logo }
