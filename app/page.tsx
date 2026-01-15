'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useRef, useState } from 'react'

const PAGE_HEIGHT = 11 * 96       // 11 inches
const CONTENT_HEIGHT = 9 * 96     // usable content (1in margins)

export default function Home() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h1>USCIS Cover Letter</h1>
      <p>Start typing your document here...</p>
    `,
  })

  const editorRef = useRef<HTMLDivElement>(null)
  const [pageCount, setPageCount] = useState(1)

  // ✅ Calculate pages correctly
  useEffect(() => {
    if (!editor) return

    const calculatePages = () => {
      const proseMirror = editorRef.current?.querySelector(
        '.ProseMirror'
      ) as HTMLElement | null

      if (!proseMirror) return

      const totalHeight = proseMirror.scrollHeight
      const pages = Math.max(1, Math.ceil(totalHeight / CONTENT_HEIGHT))
      setPageCount(pages)
    }

    calculatePages()
    editor.on('update', calculatePages)

    return () => {
      editor.off('update', calculatePages)
    }
  }, [editor])

  return (
    <main className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">

      {/* Print Button */}
      <button
        onClick={() => window.print()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Print / Save as PDF
      </button>

      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button onClick={() => editor?.chain().focus().toggleBold().run()} className="btn">Bold</button>
        <button onClick={() => editor?.chain().focus().toggleItalic().run()} className="btn">Italic</button>
        <button onClick={() => editor?.chain().focus().toggleBulletList().run()} className="btn">Bullets</button>
        <button onClick={() => editor?.chain().focus().toggleOrderedList().run()} className="btn">Numbered</button>
        <button onClick={() => editor?.chain().focus().undo().run()} className="btn">Undo</button>
        <button onClick={() => editor?.chain().focus().redo().run()} className="btn">Redo</button>
      </div>

      {/* Pages */}
      <div className="pages-container">

        {/* Page backgrounds */}
        {Array.from({ length: pageCount }).map((_, i) => (
          <div key={i} className="page">
            <div className="page-number">Page {i + 1}</div>
          </div>
        ))}

        {/* Editor overlay */}
        <div
          ref={editorRef}
          className="editor"
          style={{ minHeight: pageCount * PAGE_HEIGHT }}
        >
          <EditorContent editor={editor} />
        </div>
      </div>
    </main>
  )
}
