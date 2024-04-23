import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import CodeEditorLang from './CodeEditorLang';
import { CODE_SNIPPETS } from '../assets/objects/constants';
import CodeEditorOutput from './CodeEditorOutput';

const CodeEditor = () => {
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const editorRef = useRef();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  let editorTheme = 'vs-white';

  if(isDarkTheme){
    editorTheme = 'vs-dark';
  }

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onChangeLanguage = (language) => {
    setLanguage(language);
    setCode(
      CODE_SNIPPETS[language]
    );
  };

  return (
    <div className='grid lg:grid-cols-2 gap-3'>
      <div>
        <div>
          <CodeEditorLang language={language} onSelectLanguage={onChangeLanguage} />
        </div>
        <div className='border border-yellow-500 dark:border-blue-600'>
          <Editor
            height="80vh"
            theme={editorTheme}
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={code}
            onMount={onMount}
            onChange={(value) => setCode(code)}
          />
        </div>
      </div>
      <div>
        <CodeEditorOutput editorRef={editorRef} language={language} />
      </div>
    </div>
  )
}

export default CodeEditor