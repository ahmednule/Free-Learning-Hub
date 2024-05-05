import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

const Snippet = (props) => {
  let { codeString, lang } = props;
  const [copy, setCopy] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }

  codeString = `// JavaScript
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

// DEFAULT ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Hub relaxing on port 3000!');
});`;
  lang = 'javascript';

  return (
    
    <div className='rounded-[6px] border border-gray-700 mb-32 overflow-hidden mx-2'>
      <div className='bg-slate-800 h-10 rounded-t-[6px] flex items-center justify-between px-3'>
      <p>JavaScript Code</p>
      <div className='cursor-pointer'>
      {
        copy? (
          <div className='flex justify-end text-green-500 items-center gap-1'>
            <TiTick size={20} />
            <p>Copied!</p>
          </div>
        ) : (
          <div onClick={copyCode} className='flex justify-end items-center gap-1'>
            <FiClipboard size={20} />
            <p>Copy</p>
          </div>
        )
      }
      </div>
      </div>
      <SyntaxHighlighter
        language="javascript" 
        style={atomOneDark}
        customStyle={{
          padding: '25px 10px',
          backgroundColor: '#030712',
          borderRadius: '6px'
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}

export default Snippet