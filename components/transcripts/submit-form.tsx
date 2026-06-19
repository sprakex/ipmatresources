"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "transcript-draft";

export function TranscriptForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    college: "",
    year: new Date().getFullYear().toString(),
    venue: "",
    panel: "",
    date: "",
    mode: "",
    duration: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setForm(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      title: form.title,
      content: form.content,
      author: form.author || "Anonymous",
      college: form.college,
      year: parseInt(form.year),
      venue: form.venue,
      panel: form.panel,
      date: form.date,
      mode: form.mode,
      duration: form.duration,
    };

    try {
      const formData = new FormData();
      formData.append("entry.1234567890", payload.title);
      formData.append("entry.1234567891", payload.content);
      formData.append("entry.1234567892", payload.author);
      formData.append("entry.1234567893", payload.college);
      formData.append("entry.1234567894", String(payload.year));
      formData.append("entry.1234567895", payload.venue);
      formData.append("entry.1234567896", payload.panel);
      formData.append("entry.1234567897", payload.date);
      formData.append("entry.1234567898", payload.mode);
      formData.append("entry.1234567899", payload.duration);

      await fetch(
        "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      localStorage.removeItem(STORAGE_KEY);
      setSubmitted(true);
    } catch {
      setError("Failed to submit. Your draft is saved locally. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-fd-border bg-fd-card p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-semibold text-fd-foreground">Thank you!</h3>
        <p className="mt-2 text-fd-muted-foreground">
          Your transcript has been submitted. It will appear on the site after review.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-500">
          {error}
        </div>
      )}

      <div className="rounded-xl border border-fd-border bg-fd-card p-6 space-y-6">
        <h3 className="text-lg font-semibold text-fd-foreground">Transcript</h3>

        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-fd-foreground">Title *</label>
          <input id="title" type="text" required value={form.title} onChange={(e) => update("title", e.target.value)}
            placeholder="e.g. IIM Indore Interview Experience 2024"
            className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground placeholder:text-fd-muted-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary" />
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm font-medium text-fd-foreground">Transcript *</label>
          <textarea id="content" required value={form.content} onChange={(e) => update("content", e.target.value)}
            placeholder="Paste or write your interview transcript here..."
            rows={12}
            className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground placeholder:text-fd-muted-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary resize-y" />
        </div>

        <div className="space-y-2">
          <label htmlFor="author" className="block text-sm font-medium text-fd-foreground">Your Name</label>
          <input id="author" type="text" value={form.author} onChange={(e) => update("author", e.target.value)}
            placeholder="Anonymous if left blank"
            className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground placeholder:text-fd-muted-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary" />
        </div>
      </div>

      <div className="rounded-xl border border-fd-border bg-fd-card p-6 space-y-6">
        <h3 className="text-lg font-semibold text-fd-foreground">Metadata</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="college" className="block text-sm font-medium text-fd-foreground">College *</label>
            <input id="college" type="text" required value={form.college} onChange={(e) => update("college", e.target.value)}
              placeholder="e.g. IIM Indore"
              className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground placeholder:text-fd-muted-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary" />
          </div>

          <div className="space-y-2">
            <label htmlFor="year" className="block text-sm font-medium text-fd-foreground">Year *</label>
            <select id="year" required value={form.year} onChange={(e) => update("year", e.target.value)}
              className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary">
              {Array.from({ length: 8 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="venue" className="block text-sm font-medium text-fd-foreground">Venue</label>
            <input id="venue" type="text" value={form.venue} onChange={(e) => update("venue", e.target.value)}
              placeholder="e.g. IIM Indore Campus"
              className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground placeholder:text-fd-muted-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary" />
          </div>

          <div className="space-y-2">
            <label htmlFor="panel" className="block text-sm font-medium text-fd-foreground">Panel</label>
            <input id="panel" type="text" value={form.panel} onChange={(e) => update("panel", e.target.value)}
              placeholder="e.g. Panel 3"
              className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground placeholder:text-fd-muted-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary" />
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-fd-foreground">Interview Date</label>
            <input id="date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)}
              className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary" />
          </div>

          <div className="space-y-2">
            <label htmlFor="mode" className="block text-sm font-medium text-fd-foreground">Mode</label>
            <select id="mode" value={form.mode} onChange={(e) => update("mode", e.target.value)}
              className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary">
              <option value="">Select mode</option>
              <option value="In-person">In-person</option>
              <option value="Online">Online</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="duration" className="block text-sm font-medium text-fd-foreground">Duration</label>
            <input id="duration" type="text" value={form.duration} onChange={(e) => update("duration", e.target.value)}
              placeholder="e.g. 25 minutes"
              className="w-full rounded-lg border border-fd-border bg-fd-background px-4 py-2.5 text-fd-foreground placeholder:text-fd-muted-foreground focus:border-fd-primary focus:outline-none focus:ring-1 focus:ring-fd-primary" />
          </div>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting}
        className="w-full rounded-full bg-black px-8 py-3 font-medium text-white transition-all hover:opacity-90 disabled:opacity-50 dark:bg-white dark:text-black">
        {isSubmitting ? "Submitting..." : "Submit Transcript"}
      </button>
    </form>
  );
}
