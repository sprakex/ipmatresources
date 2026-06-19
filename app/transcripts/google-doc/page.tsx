import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Docs Source",
  description: "View the Google Docs source for interview transcripts",
};

export default function GoogleDocPage() {
  const googleDocUrl = "https://docs.google.com/document/d/YOUR_DOC_ID/edit";

  return (
    <div className="max-w-2xl mx-auto">
      <nav className="mb-6">
        <Link
          href="/transcripts"
          className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
        >
          &larr; All Transcripts
        </Link>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fd-foreground">Google Docs Source</h1>
        <p className="mt-2 text-fd-muted-foreground">
          Transcripts are maintained in a Google Doc. You can view the source document directly.
        </p>
      </div>

      <div className="rounded-xl border border-fd-border bg-fd-card p-8">
        <h2 className="font-semibold text-fd-foreground mb-2">Master Transcript Document</h2>
        <p className="text-sm text-fd-muted-foreground mb-6">
          This document contains all published interview transcripts with metadata tags.
          The data from this doc is synced to this site at build time.
        </p>
        <a
          href={googleDocUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block rounded-full bg-black px-8 py-3 font-medium text-white transition-all hover:opacity-90 dark:bg-white dark:text-black"
        >
          Open Google Doc
        </a>
      </div>

      <div className="mt-6 rounded-xl border border-fd-border bg-fd-card p-6">
        <h2 className="font-semibold text-fd-foreground mb-3">Document Format</h2>
        <p className="text-sm text-fd-muted-foreground">
          Each transcript in the Google Doc follows this structure:
        </p>
        <pre className="mt-3 rounded-lg bg-fd-background p-4 text-xs text-fd-muted-foreground overflow-x-auto">
{`# Transcript: Interview Title
- College: IIM Indore
- Year: 2024
- Venue: IIM Indore Campus
- Panel: Panel 3
- Date: 2024-06-15
- Mode: In-person
- Duration: 25 minutes
- Result: Selected

Full transcript content goes here...`}
        </pre>
      </div>
    </div>
  );
}
