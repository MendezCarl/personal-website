export const PAGES = ['Home', 'Work', 'Experiences', 'Photos', 'Entries'] as const
export type Page = typeof PAGES[number]

export type Experience = {
  role: string
  company: string
  date: string
  descriptions: string[]
}

export type FileEntry = {
  name: string
  type: 'folder' | 'file'
  children?: FileEntry[]
  content?: string
}
