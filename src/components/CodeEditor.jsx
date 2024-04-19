import React, { useRef } from 'react'
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import CodeEditorLang from './CodeEditorLang';
import { CODE_SNIPPETS } from '../assets/objects/constants';

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
    <div>
      <div>
        <CodeEditorLang language={language} onSelectLanguage={onChangeLanguage} />
      </div>
      <div className='border border-yellow-200 dark:border-blue-600'>
      <Editor
        height="75vh"
        theme={editorTheme}
        language={language}
        defaultValue="
// JavaScript snippet
function greet() {
  console.log('Hello, world!');
}

greet(); // Call the greet function
        "
        value={code}
        onMount={onMount}
        onChange={(value) => setCode(code)}
      />
      </div>
    </div>
  )
}

export default CodeEditor