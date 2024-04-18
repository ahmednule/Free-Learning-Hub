import React from 'react';
import Intro from '../../courses/html/Intro';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Html = () => {
  const codeString = '(num) => num + 1';
  return (
    <div>
      <Intro />
      <SyntaxHighlighter language="javascript" style={anOldHope} >
      {codeString}
    </SyntaxHighlighter>
    </div>
  );
};

export default Html;