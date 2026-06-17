"use client";

import { MessageSquareText, PencilLine } from "lucide-react";
import { track } from "@vercel/analytics";

type DocsPageActionsProps = {
  editUrl: string;
  feedbackUrl: string;
  title: string;
  path: string;
};

export function DocsPageActions({
  editUrl,
  feedbackUrl,
  title,
  path,
}: DocsPageActionsProps) {
  const analyticsPayload = {
    page: path,
    title,
  };

  return (
    <div className="docs-page-actions" aria-label="Page actions">
      <a
        href={editUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Edit ${title}`}
        title="Edit this page"
        className="docs-page-action"
        onClick={() => track("docs_edit_clicked", analyticsPayload)}
      >
        <PencilLine className="size-4.5" />
      </a>

      <a
        href={feedbackUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Give feedback on ${title}`}
        title="Give feedback"
        className="docs-page-action"
        onClick={() => track("docs_feedback_clicked", analyticsPayload)}
      >
        <MessageSquareText className="size-4.5" />
      </a>
    </div>
  );
}
