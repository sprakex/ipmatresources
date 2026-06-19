import Link from "next/link";
import { TagBadge } from "./tag-badge";
import type { Transcript } from "@/lib/transcripts";

export function TranscriptCard({ transcript }: { transcript: Transcript }) {
  const preview = transcript.content.slice(0, 200);

  return (
    <Link
      href={`/transcripts/${transcript.id}`}
      className="group block rounded-xl border border-fd-border bg-fd-card p-5 transition-all hover:border-fd-primary/40 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors">
        {transcript.title}
      </h3>

      {transcript.author && (
        <p className="mt-1 text-sm text-fd-muted-foreground">by {transcript.author}</p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {transcript.meta.college && <TagBadge label="College" value={transcript.meta.college} />}
        {transcript.meta.year && <TagBadge label="Year" value={String(transcript.meta.year)} />}
        {transcript.meta.date && <TagBadge label="Date" value={transcript.meta.date} />}
      </div>

      <p className="mt-3 text-sm text-fd-muted-foreground leading-relaxed line-clamp-3">
        {preview}...
      </p>

      <div className="mt-4 text-xs text-fd-muted-foreground">
        Read more &rarr;
      </div>
    </Link>
  );
}
