import type { FileEntry } from '../types'

export function FileTree({ entries, depth = 0, expanded, onToggle, selected, onSelect }: {
  entries: FileEntry[]
  depth: number
  expanded: Set<string>
  onToggle: (name: string) => void
  selected: string | null
  onSelect: (name: string) => void
}) {
  return (
    <ul className="fileTreeList">
      {entries.map(entry => {
        const isFolder = entry.type === 'folder'
        const key = entry.name
        const isExpanded = expanded.has(key)
        const isSelected = selected === key

        return (
          <li key={key}>
            <div
              className={`fileTreeItem${isSelected ? ' selected' : ''}`}
              style={{ paddingLeft: depth * 16 + 8 }}
              onClick={() => {
                if (isFolder) onToggle(key)
                else onSelect(key)
              }}
            >
              <span className="fileTreeIcon">
                {isFolder ? (isExpanded ? '▾' : '▸') : '📄'}
              </span>
              <span>{entry.name}</span>
            </div>
            {isFolder && isExpanded && entry.children && (
              <FileTree
                entries={entry.children}
                depth={depth + 1}
                expanded={expanded}
                onToggle={onToggle}
                selected={selected}
                onSelect={onSelect}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}
