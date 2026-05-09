# Entries (File Tree) System

The Entries page displays a browsable file tree of markdown files. Files are auto-discovered from `src/content/` at build time — no code changes needed when adding or removing entries.

## Adding an Entry

Create a `.md` file anywhere under `src/content/`:

```
src/content/
├── travel/
│   ├── tokyo-2025.md
│   └── paris-notes.md
└── projects/
    └── personal-website.md
```

- Files at the root of `src/content/` appear as top-level files in the tree.
- Files in subdirectories appear under a collapsible folder named after the directory.
- The filename (without `.md`) becomes the file's display name in the tree.
- The file content is loaded as raw text and displayed when selected.

## Removing an Entry

Delete the `.md` file. The next build will exclude it automatically.

## How It Works

`src/data/fileTree.ts` uses Vite's `import.meta.glob` to scan `src/content/**/*.md`:

```ts
const modules = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>
```

Paths are parsed to build a `FileEntry[]` tree (folders from directory names, files from filenames). The result is exported as a static `fileTree` constant, consumed by `EntriesPage` and rendered via the `FileTree` component.

## Type Definition

```ts
type FileEntry = {
  name: string
  type: 'folder' | 'file'
  children?: FileEntry[]
  content?: string
}
```

## Key Files

| File | Purpose |
|---|---|
| `src/data/fileTree.ts` | Glob loader + tree builder |
| `src/pages/EntriesPage.tsx` | Page layout (file sidebar + content area) |
| `src/components/FileTree.tsx` | Recursive tree renderer |
| `src/content/` | All entry markdown files |
