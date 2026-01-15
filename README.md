Document Pagination in Tiptap Editor

A Tiptap-based rich text editor with real-time visual pagination, designed to simulate how legal documents will appear when printed. This project is built as part of a software assignment to demonstrate pagination handling, DOM measurement, and editor customization using modern frontend tools.

🚀 Objective

The goal of this project is to build a document editor that:

Displays visual page boundaries while typing (similar to Google Docs / MS Word)

Dynamically updates page breaks as content is added or removed

Matches print output with standard paper size and margins

Handles common legal-document formatting requirements

This is especially useful for drafting immigration-related legal documents where layout accuracy matters.

🛠️ Tech Stack

Framework: Next.js (App Router)

Editor: Tiptap (ProseMirror-based)

Styling: Tailwind CSS + custom CSS

Language: TypeScript

Deployment-ready: Vercel / Netlify compatible

✨ Features

Real-time pagination based on rendered content height

Letter/A4-style page layout with 1-inch margins

Visual page separation with page numbers

Supports:

Headings

Paragraphs

Bold / Italic / Strike

Bullet and numbered lists

Print / Save as PDF support using browser print

Content reflows dynamically when editing mid-document

📐 Pagination Approach

Pagination is handled by:

Rendering the Tiptap editor content inside a fixed-width container

Measuring the rendered .ProseMirror content height using the DOM

Dividing total content height by the usable page height (accounting for margins)

Dynamically calculating the number of pages

Rendering page backgrounds and page numbers behind the editor

This ensures:

Long paragraphs flow naturally across pages

Page count updates in real time

What you see in the editor closely matches printed output

⚠️ Trade-offs & Limitations

Page breaks are visual, not actual content splits

Tables and complex layouts may require additional tuning

Header/footer support is not fully implemented

Exact DOCX export parity is not included (print/PDF is accurate)

🔮 Improvements with More Time

True page-splitting using custom ProseMirror node views

Header and footer editing support

Better table pagination handling

Export to DOCX with preserved pagination

Performance optimizations for very large documents

📦 Installation & Setup
# Clone the repository
git clone https://github.com/Neet-hu/Document-Pagination-in-Tiptap-Editor.git

# Navigate to project folder
cd tiptap-pagination

# Install dependencies
npm install

# Run development server
npm run dev


Open:

http://localhost:3000


Print & PDF

Use the Print / Save as PDF button or browser print dialog.

The printed output matches:

Page size

Margins

Page breaks

Page numbering
