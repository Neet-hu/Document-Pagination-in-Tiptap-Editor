Tiptap Document Editor with Pagination (Prototype)
Overview

This project is a Tiptap-based rich text editor designed to help legal professionals draft USCIS documents while visualizing how content will appear when printed.

The editor focuses on:

Accurate page sizing and margins

Clear visual page boundaries

Reliable print/PDF output

Stable and predictable editing behavior

This prototype demonstrates a practical approach to pagination within the constraints of Tiptap/ProseMirror.

Features

✍️ Rich text editing using Tiptap

🧾 Visual page boundaries matching Letter size (8.5 × 11 inches)

📐 Standard 1-inch margins

🖨️ Print / Save as PDF with layout fidelity

🔢 Page numbering

🧰 Formatting support:

Headings

Bold / Italic / Strike

Bullet & ordered lists

Undo / Redo

Technology Stack

Next.js (App Router)

React

Tiptap

Tailwind CSS

TypeScript

Pagination Approach
Core Idea

Tiptap (built on ProseMirror) maintains a single document tree for content editing.
Instead of splitting the document into separate editable page nodes, this prototype:

Renders the editor content in a single editable surface

Measures the rendered content height in the DOM

Calculates where page boundaries should occur based on:

Page height (11 inches)

Usable content height (after margins)

Displays visual page boundaries that align exactly with print output

This ensures:

What users see on screen matches printed output

Editing remains stable and predictable

Undo/redo history is preserved correctly