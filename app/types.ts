export interface FileItem {
  id: string
  name: string
  type: "file"
  mimeType: string
}

export interface FolderItem {
  id: string
  name: string
  type: "folder"
  children: DriveItem[]
}

export type DriveItem = FileItem | FolderItem

export const mockData: FolderItem = {
  id: "root",
  name: "My Drive",
  type: "folder",
  children: [
    {
      id: "1",
      name: "Documents",
      type: "folder",
      children: [
        {
          id: "1-1",
          name: "Report.docx",
          type: "file",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
        {
          id: "1-2",
          name: "Presentation.pptx",
          type: "file",
          mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        },
        {
          id: "1-3",
          name: "Projects",
          type: "folder",
          children: [
            { id: "1-3-1", name: "Project A", type: "folder", children: [] },
            { id: "1-3-2", name: "Project B", type: "folder", children: [] },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Images",
      type: "folder",
      children: [
        { id: "2-1", name: "Vacation.jpg", type: "file", mimeType: "image/jpeg" },
        { id: "2-2", name: "Family.png", type: "file", mimeType: "image/png" },
      ],
    },
    {
      id: "3",
      name: "Budget.xlsx",
      type: "file",
      mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    { id: "4", name: "Notes.txt", type: "file", mimeType: "text/plain" },
  ],
}

