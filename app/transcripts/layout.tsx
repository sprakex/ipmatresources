import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interview Transcripts",
  description: "IPMAT interview transcripts and experiences shared by students",
};

export default function TranscriptsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {children}
    </main>
  );
}
