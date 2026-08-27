"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export function useNavigate() {
  const router = useRouter();

  return useCallback((path: string) => router.push(path), [router]);
}
