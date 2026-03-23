declare module 'medium-draft' {
  import { Component } from 'react';
  import { EditorState } from 'draft-js';

  interface EditorProps {
    editorState: EditorState;
    onChange: (state: EditorState) => void;
    sideButtons?: unknown[];
    [key: string]: unknown;
  }

  export class Editor extends Component<EditorProps> {
    focus(): void;
  }

  export function createEditorState(): EditorState;
}

declare module 'medium-draft/lib/index.css';

declare module 'markdown-draft-js' {
  import { RawDraftContentState } from 'draft-js';
  export function markdownToDraft(markdown: string): RawDraftContentState;
}

declare module 'draftjs-to-markdown' {
  import { RawDraftContentState } from 'draft-js';
  export function draftToMarkdown(raw: RawDraftContentState): string;
}
