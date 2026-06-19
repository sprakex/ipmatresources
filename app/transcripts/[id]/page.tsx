import Link from "next/link";
import { notFound } from "next/navigation";
import { transcriptsData } from "@/lib/transcripts";
import { TagBadge } from "@/components/transcripts/tag-badge";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return transcriptsData.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const t = transcriptsData.find((t) => t.id === id);
  if (!t) return { title: "Not Found" };
  return { title: t.title, description: t.content.slice(0, 160) };
}

export default async function TranscriptDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const transcript = transcriptsData.find((t) => t.id === id);
  if (!transcript) notFound();

  return (
    <div>
      <nav className="mb-8">
        <Link
          href="/transcripts"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-fd-background/70 px-5 py-2 text-sm text-fd-muted-foreground transition-all hover:bg-black/5 hover:text-fd-foreground dark:border-white/10 dark:hover:bg-white/5 backdrop-blur"
        >
          &larr; All Transcripts
        </Link>
      </nav>

      <article className="max-w-3xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-fd-foreground">{transcript.title}</h1>
          {transcript.author && (
            <p className="mt-2 text-fd-muted-foreground">Shared by {transcript.author}</p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {transcript.meta.college && <TagBadge label="College" value={transcript.meta.college} />}
            {transcript.meta.year && <TagBadge label="Year" value={String(transcript.meta.year)} />}
            {transcript.meta.venue && <TagBadge label="Venue" value={transcript.meta.venue} />}
            {transcript.meta.panel && <TagBadge label="Panel" value={transcript.meta.panel} />}
            {transcript.meta.date && <TagBadge label="Date" value={transcript.meta.date} />}
            {transcript.meta.mode && <TagBadge label="Mode" value={transcript.meta.mode} />}
            {transcript.meta.duration && <TagBadge label="Duration" value={transcript.meta.duration} />}
          </div>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {transcript.content.split("\n").map((p, i) =>
            p.trim() ? <p key={i} className="text-fd-foreground leading-relaxed">{p}</p> : <br key={i} />
          )}
        </div>

        <footer className="mt-8 border-t border-fd-border pt-4 text-xs text-fd-muted-foreground">
          Published on {new Date(transcript.createdAt).toLocaleDateString("en-IN", {
            year: "numeric", month: "long", day: "numeric",
          })}
        </footer>
      </article>
    </div>
  );
}
