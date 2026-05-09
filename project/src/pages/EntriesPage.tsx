import { useState } from 'react'
import { FileTree } from '../components/FileTree'
import { fileTree } from '../data/fileTree'

export function EntriesPage() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['travel', 'projects']))
  const [selected, setSelected] = useState<string | null>(null)
  const [content, setContent] = useState<string | null>(null)

  const fileContents = new Map<string, string>()
  const collectFiles = (entries: typeof fileTree) => {
    for (const e of entries) {
      if (e.type === 'file' && e.content) fileContents.set(e.name, e.content)
      if (e.children) collectFiles(e.children)
    }
  }
  collectFiles(fileTree)

  return (
    <div className="entriesLayout">
      <div className="entriesSidebar">
        <p className="entriesSidebarTitle">entries</p>
        <FileTree
          entries={fileTree}
          depth={0}
          expanded={expanded}
          onToggle={name => {
            setExpanded(prev => {
              const next = new Set(prev)
              if (next.has(name)) next.delete(name)
              else next.add(name)
              return next
            })
          }}
          selected={selected}
          onSelect={name => {
            setSelected(name)
            setContent(fileContents.get(name) ?? null)
          }}
        />
      </div>
      <div className="entriesContent">
        {content ? (
          <p>{content}</p>
        ) : (
          <p className="entriesPlaceholder">select a file to read</p>
        )}
      </div>
    </div>
  )
}
