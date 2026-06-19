"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import type { TranscriptTag } from "@/lib/transcripts";
import { TRANSCRIPT_TAGS } from "@/lib/transcripts";

export function TagFilter({ availableFilters }: { availableFilters: Record<TranscriptTag, string[]> }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = useCallback(
    (key: TranscriptTag, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set(key, value);
      else params.delete(key);
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  const hasActive = Array.from(searchParams.entries()).some(([k]) =>
    TRANSCRIPT_TAGS.some((t) => t.key === k)
  );

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-fd-muted-foreground">Filter by:</span>

      {TRANSCRIPT_TAGS.map(({ key, label }) => {
        const options = availableFilters[key];
        if (!options?.length) return null;

        return (
          <select
            key={key}
            value={searchParams.get(key) || ""}
            onChange={(e) => updateFilter(key, e.target.value)}
            className="rounded-lg border border-fd-border bg-fd-card px-3 py-1.5 text-sm text-fd-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary"
          >
            <option value="">{label}</option>
            {options.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        );
      })}

      {hasActive && (
        <button
          onClick={() => router.push("/transcripts")}
          className="text-sm text-fd-muted-foreground hover:text-fd-foreground underline underline-offset-2"
        >
          Clear
        </button>
      )}
    </div>
  );
}
