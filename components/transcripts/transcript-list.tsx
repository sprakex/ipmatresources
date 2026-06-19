"use client";

import { useSearchParams } from "next/navigation";
import { TranscriptCard } from "./transcript-card";
import { TagFilter } from "./tag-filter";
import type { Transcript, TranscriptTag } from "@/lib/transcripts";
import { getUniqueValues, filterTranscripts, sortTranscriptsByDate } from "@/lib/transcripts";

const FILTER_KEYS: TranscriptTag[] = ["college", "year", "venue", "panel", "mode"];

export function TranscriptList({ transcripts }: { transcripts: Transcript[] }) {
  const searchParams = useSearchParams();

  const filters: Partial<Record<TranscriptTag, string>> = {};
  for (const key of FILTER_KEYS) {
    const value = searchParams.get(key);
    if (value) filters[key] = value;
  }

  const availableFilters = Object.fromEntries(
    FILTER_KEYS.map((key) => [key, getUniqueValues(transcripts, key)])
  ) as Record<TranscriptTag, string[]>;

  const filtered = filterTranscripts(transcripts, filters);
  const sorted = sortTranscriptsByDate(filtered);

  return (
    <div>
      <TagFilter availableFilters={availableFilters} />

      {sorted.length === 0 ? (
        <div className="mt-8 rounded-xl border border-fd-border bg-fd-card p-12 text-center">
          <p className="text-fd-muted-foreground">No transcripts match your filters.</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sorted.map((t) => (
            <TranscriptCard key={t.id} transcript={t} />
          ))}
        </div>
      )}
    </div>
  );
}
