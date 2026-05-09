import type { FileEntry } from '../types'

const modules = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function buildTree(): FileEntry[] {
  const folderMap = new Map<string, FileEntry>()
  const root: FileEntry[] = []

  for (const [path, content] of Object.entries(modules)) {
    const relative = path.replace('../content/', '').replace(/\.md$/, '')
    const parts = relative.split('/')
    const name = parts[parts.length - 1]

    if (parts.length === 1) {
      root.push({ name, type: 'file', content })
    } else {
      const folderName = parts[0]
      let folder = folderMap.get(folderName)
      if (!folder) {
        folder = { name: folderName, type: 'folder', children: [] }
        folderMap.set(folderName, folder)
        root.push(folder)
      }
      folder.children!.push({ name, type: 'file', content })
    }
  }

  return root
}

export const fileTree = buildTree()
