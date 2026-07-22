import Link from "next/link";
import type { ReactNode } from "react";

// Minimal parser for the small markdown subset used in our content docs:
// "# " / "## " headings, "* " bullet lists, inline **bold** / *italic*, and [text](url) links.
function renderInline(text: string, key: string): ReactNode {
  const clean = text.replace(/\\\./g, ".");
  const parts: ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(clean))) {
    if (match.index > lastIndex) parts.push(clean.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      parts.push(<strong key={`${key}-${i++}`}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      parts.push(<em key={`${key}-${i++}`}>{match[2]}</em>);
    } else if (match[3] !== undefined) {
      parts.push(
        <Link
          key={`${key}-${i++}`}
          href={match[4]}
          className="font-medium text-brand underline underline-offset-2"
        >
          {match[3]}
        </Link>,
      );
    }
    lastIndex = regex.lastIndex;
  }
  parts.push(clean.slice(lastIndex));
  return parts;
}

export function parseMarkdown(raw: string): ReactNode[] {
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (!listItems.length) return;
    const id = key++;
    blocks.push(
      <ul key={`ul-${id}`} className="list-disc space-y-2 pl-5">
        {listItems.map((item, i) => (
          <li key={i}>{renderInline(item, `li-${id}-${i}`)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  for (const raw_line of raw.split("\n")) {
    const line = raw_line.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      const id = key++;
      blocks.push(
        <h3 key={`h3-${id}`} className="mt-8 font-display text-lg font-semibold text-ink">
          {renderInline(line.slice(3), `h3-${id}`)}
        </h3>,
      );
    } else if (line.startsWith("# ")) {
      flushList();
      const id = key++;
      blocks.push(
        <h2 key={`h2-${id}`} className="mt-10 font-display text-2xl font-semibold text-ink">
          {renderInline(line.slice(2), `h2-${id}`)}
        </h2>,
      );
    } else if (line.startsWith("* ")) {
      listItems.push(line.slice(2));
    } else {
      flushList();
      const id = key++;
      blocks.push(
        <p key={`p-${id}`} className="leading-relaxed">
          {renderInline(line, `p-${id}`)}
        </p>,
      );
    }
  }
  flushList();
  return blocks;
}
