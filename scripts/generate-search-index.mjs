import { createFromSource } from 'fumadocs-core/search/server';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';

const sourcePath = pathToFileURL(join(process.cwd(), '.source', 'server.ts')).href;

const { source } = await import(sourcePath);

const api = createFromSource(source, { language: 'english' });
const data = await api.export();

const out = join(process.cwd(), 'public', 'search-index.json');
writeFileSync(out, JSON.stringify(data));
console.log(`Search index generated at ${out}`);
