import { Editor } from '@monaco-editor/react';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RenderQuestions from './RenderQuestions';
import projectOne from '../objects/projectOne.json';
import projectTwo from '../objects/projectTwo.json';
import HTMLBrowser from './HTMLBrowser';

const ProjectRunner = () => {
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const [projectId, setProjectId] = useState('');
  const [code, setCode] = useState('');
  const [data, setData] = useState([]);
  const [output, setOutput] = useState(null);
  const [answer, setAnswer] = useState('');

  const htmlEditorRef = useRef();
  let editorTheme = 'vs-white';
  const location = useLocation();

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    const newProjectId = urlParts[urlParts.length - 1];
    setProjectId(newProjectId);
  }, [location]);
  
  if(isDarkTheme){
    editorTheme = 'vs-dark';
  }

  const onMount = (editor) => {
    htmlEditorRef.current = editor;
    editor.focus();
  };

  const seeOutPut = () => {
    const sourceCode = htmlEditorRef.current.getValue();
    setOutput(sourceCode);
  }

  useEffect(() => {
    if(projectId === "first-basic-website"){
      setData(projectOne);
    } else if(projectId === "semantically-laid-website"){
      setData(projectTwo);
    } else{
      
    }
  }, [projectId]);

  const seeAnswer = () => {
    setAnswer(data.length > 0 ? data[0].code : '');
  }

  

  return (
    <div className='mb-20'>
      <div className='grid grid-cols-2 px-3 gap-10'>
        <div className=''>
          <h1 className='text-3xl font-semibold mb-5'> {data.length > 0 ? data[0].title : ''} </h1>
          <h2> {data.length > 0 ? data[0].description : ''} </h2>
          <p className='my-2 text-green-500'> {data.length > 0 ? data[0].upto : ''} </p>
          <RenderQuestions questions={data.length > 0 ? data[0].steps : []} />
        </div>
        <div>
          <div className='border border-yellow-500 dark:border-blue-600'>
            <Editor 
              height="80vh"
              theme={editorTheme}
              language="html"
              defaultValue='Type here'
              value={code}
              onMount={onMount}
              onChange={(value) => setCode(value)}
            />
          </div>
        </div>
      </div>
      <div>
        <hr className='mt-32' />
        <div className='flex my-4 justify-start mx-10'>
          <button className='bg-yellow-500 dark:bg-blue-600 py-2 px-8 text-md rounded-md font-bold' onClick={seeOutPut}>
            SEE OUTPUT
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-10 px-3'>
        <div className='bg-white overflow-scroll h-[90vh] border border-yellow-500 dark:border-blue-600 rounded-md'>
          <HTMLBrowser code={output} />
        </div>
        <button className='bg-yellow-500 dark:bg-blue-600 w-fit ml-4 py-2 px-8 text-md rounded-md font-bold' onClick={seeAnswer} >
          SEE ANSWER
        </button>
        <div className='border border-yellow-500 dark:border-blue-600'>
          <Editor 
            height="70vh"
            theme={editorTheme}
            language="html"
            defaultValue='Click see answer to view it here'
            value={answer}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectRunner;
