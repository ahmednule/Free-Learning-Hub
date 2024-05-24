import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';

const Snippet = ({ codeString, lang, title }) => {
  const [copy, setCopy] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <div className='rounded-[6px] border w-[90vw] md:w-full container border-gray-700 overflow-hidden'>
      <div className='bg-slate-800 h-10 rounded-t-[6px] flex items-center justify-between px-3'>
        <p>{title} Code</p>
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
        language={lang} 
        style={atomOneDark}
        customStyle={{
          padding: '15px 10px',
          backgroundColor: '#030712',
          borderRadius: '6px',
          fontSize: '13px'
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default Snippet;
