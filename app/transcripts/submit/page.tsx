import Link from "next/link";
import { TranscriptForm } from "@/components/transcripts/submit-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Transcript",
  description: "Share your IPMAT interview experience with other aspirants",
};

export default function SubmitTranscriptPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <nav className="mb-6">
        <Link
          href="/transcripts"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-fd-background/70 px-5 py-2 text-sm text-fd-muted-foreground transition-all hover:bg-black/5 hover:text-fd-foreground dark:border-white/10 dark:hover:bg-white/5 backdrop-blur"
        >
          &larr; All Transcripts
        </Link>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fd-foreground">Submit a Transcript</h1>
        <p className="mt-2 text-fd-muted-foreground">
          Share your interview experience to help other aspirants. Your submission will be reviewed before appearing on the site.
        </p>
      </div>

      <TranscriptForm />
    </div>
  );
}
