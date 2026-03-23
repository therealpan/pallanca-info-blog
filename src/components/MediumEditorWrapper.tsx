"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { Editor, createEditorState } from "medium-draft";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
import { markdownToDraft } from "markdown-draft-js";
import { draftToMarkdown } from "draftjs-to-markdown";
import "medium-draft/lib/index.css";

interface Props {
  initialContent: string;
  onChange: (markdown: string) => void;
}

export default function MediumEditorWrapper({ initialContent, onChange }: Props) {
  const editorRef = useRef<Editor>(null);

  const [editorState, setEditorState] = useState<EditorState>(() => {
    if (!initialContent) return createEditorState();
    try {
      const rawData = markdownToDraft(initialContent);
      const contentState = convertFromRaw(rawData);
      return EditorState.createWithContent(contentState);
    } catch {
      return createEditorState();
    }
  });

  const isInitialized = useRef(false);

  const handleChange = useCallback(
    (newState: EditorState) => {
      setEditorState(newState);
      if (isInitialized.current) {
        const raw = convertToRaw(newState.getCurrentContent());
        const md = draftToMarkdown(raw);
        onChange(md);
      }
    },
    [onChange]
  );

  useEffect(() => {
    isInitialized.current = true;
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, []);

  return (
    <div className="medium-editor-wrapper">
      <Editor
        ref={editorRef}
        editorState={editorState}
        onChange={handleChange}
        sideButtons={[]}
      />
      <style jsx global>{`
        .medium-editor-wrapper .md-RichEditor-root {
          background: transparent;
          color: #e8e8e8;
          font-family: var(--font-source-serif), Georgia, serif;
          font-size: 1.125rem;
          line-height: 1.85;
        }
        .medium-editor-wrapper .md-RichEditor-editor .public-DraftEditor-content {
          min-height: 400px;
        }
        .medium-editor-wrapper .md-block-paragraph {
          margin-bottom: 1.5em;
        }
        .medium-editor-wrapper h2,
        .medium-editor-wrapper h3 {
          color: white;
          font-family: var(--font-inter), system-ui, sans-serif;
          font-weight: 700;
          margin-top: 2em;
        }
        .medium-editor-wrapper blockquote {
          border-left: 3px solid #60a5fa;
          padding-left: 1.5em;
          color: #9ca3af;
          font-style: italic;
        }
        .medium-editor-wrapper .md-RichEditor-controls {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        .medium-editor-wrapper .md-RichEditor-controls button {
          color: #9ca3af;
        }
        .medium-editor-wrapper .md-RichEditor-controls button.md-RichEditor-styleButton--active {
          color: #60a5fa;
        }
      `}</style>
    </div>
  );
}
