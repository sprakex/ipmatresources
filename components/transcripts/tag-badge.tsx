export function TagBadge({ label, value, }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-xs font-medium text-fd-primary">
      <span className="text-fd-muted-foreground">{label}:</span>
      <span>{value}</span>
    </span>
  );
}
