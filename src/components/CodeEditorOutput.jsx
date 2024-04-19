import React, { useState } from 'react'
import { executeCode } from './CodeEditorAPI';
import { TbLoader3 } from 'react-icons/tb';
import { toast } from 'react-toastify';
import { FaDotCircle } from 'react-icons/fa';

const CodeEditorOutput = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const { run:result} = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
      if(isError){
        toast.error("Error in code...");
      } else{
        toast.success("Run complete!")
      }
    } catch(error){
      toast.error("Error processing code...");
    } finally {
      setIsLoading(false);
    }
  }
  const outputContainerClass = `h-[80vh] border py-8 px-5 text-xl mt-[9px] rounded-lg ${isError ? 'border-red-500 text-red-500' : 'border-yellow-200 dark:border-blue-600 text-gray-950 dark:text-gray-50'}`;



  return (
    <div>
      <p className='text-xl mt-[6px] mb-2'>Output:</p>
      <button onClick={runCode} className='uppercase flex bg-gray-100 dark:bg-gray-900 text-gray-950 dark:text-gray-50 pl-3 border border-yellow-200 dark:border-blue-200 pr-3 hover:bg-yellow-500 dark:hover:bg-blue-600 rounded-md py-[6px]'>
        <span>RUN CODE</span>
        <span>
          {isLoading ? <TbLoader3 size={20} className='ml-4 mt-[2px] animate-spin' /> : <FaDotCircle className='animate-ping ml-4 mt-[7px]' size={10} />}
        </span>
      </button>
      <div className={outputContainerClass}>
        {output ? 
          output.map((line, index) => {
            return(
              <p key={index} >{line}</p>
            )
          })
         : "Click run code to see the output here..."}
      </div>
    </div>
  );
}

export default CodeEditorOutput