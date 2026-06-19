import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { writeFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-static';

export default async function SearchGen() {
  const api = createFromSource(source, { language: 'english' });
  const data = await api.export();
  const out = join(process.cwd(), 'public', 'search-index.json');
  writeFileSync(out, JSON.stringify(data));
  return <></>;
}
