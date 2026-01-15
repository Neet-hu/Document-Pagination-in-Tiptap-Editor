'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Home() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h1>USCIS Cover Letter</h1>
      <p>Start typing your document here...</p>
    `,
  })

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white shadow-lg w-[8.5in] min-h-[11in] p-[1in]">
        <EditorContent editor={editor} />
      </div>
    </main>
  )
}
