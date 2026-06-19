import Link from "next/link";
import { Suspense } from "react";
import { transcriptsData } from "@/lib/transcripts";
import { TranscriptList } from "@/components/transcripts/transcript-list";

export default function TranscriptsPage() {
  return (
    <div>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-fd-foreground">Interview Transcripts</h1>
          <p className="mt-2 text-fd-muted-foreground">
            Experiences shared by IPMAT aspirants across colleges and years.
          </p>
        </div>
        <Link
          href="/transcripts/submit"
          className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90 dark:bg-white dark:text-black shrink-0"
        >
          + Submit
        </Link>
      </div>

      <div className="mb-6 flex flex-wrap gap-4 text-sm text-fd-muted-foreground">
        <Link href="/transcripts/google-doc" className="underline underline-offset-2 hover:text-fd-foreground transition-colors">
          View Google Docs source
        </Link>
      </div>

      <Suspense fallback={<p className="text-fd-muted-foreground">Loading transcripts...</p>}>
        <TranscriptList transcripts={transcriptsData} />
      </Suspense>
    </div>
  );
}
