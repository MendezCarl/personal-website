import type { FileEntry } from '../types'

export const fileTree: FileEntry[] = [
  {
    name: 'travel',
    type: 'folder',
    children: [
      { name: 'tokyo-2025', type: 'file', content: 'Tokyo was incredible. The contrast between ancient temples and neon-lit streets is something everyone should experience.' },
      { name: 'paris-notes', type: 'file', content: 'Paris in the spring \u2014 coffee at sidewalk cafes, long walks along the Seine, and croissants every morning.' },
    ],
  },
  {
    name: 'projects',
    type: 'folder',
    children: [
      { name: 'personal-website', type: 'file', content: 'Built with React and TypeScript. Features include dark mode, dynamic sky background, and a file-tree entry system.' },
    ],
  },
]
