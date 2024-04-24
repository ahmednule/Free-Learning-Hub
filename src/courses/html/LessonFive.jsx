import React, { useState } from 'react'
import Footer from '../../components/Footer'
import SubFooter from '../../components/SubFooter'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from './Questions/Quiz'
import QuizFive from './Questions/QuizFive.json'


const LessonFive = () => {
  const [questions, setQuestions] = useState(false);

  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const codeString1 = `
<body>
  <h1>Main heading.</h1>
  <h2>Sub-heading.</h2>
  <h3>Sub-heading.</h3>
  <h4>Sub-heading.</h4>
  <h5>Sub-heading.</h5>
  <h6>Sub-heading.</h6>
</body>`;

const codeString2 = `
<body>
  <p>This is my first website.</p>
</body>`;

const codeString3 = `
<body>
  <b>Such text are rendered bold.</b>
  <strong>This is also bold.</strong>
</body>`;

const codeString4 = `
<body>
  <i>Such text are rendered italic.</i>
  <em>This is also italic.</em>
</body>`;

const codeString5 = `
<body>
  <u>This is used to create text with an underline.</u>
</body>`;

const codeString6 = `
<body>
  <s>This is tag creates a strike through.</s>
</body>`;

const codeString7 = `
<body>
  <p>Today is 20 <sup>th</sup> of April 2024.</p>
  <p>log <sub>10</sub> 67</p>
</body>`;

const codeString8 = `
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the webpage</title>
  </head>
  <body>
    <h1>Langing Page</h1>
    <p>The landing page is the most important. </p>
    <br>
    <p>Always make it nice and interactive.</p>
    <hr>
    <p>CopyRight 2024 - All Rights Reserved</p>
  </body>
</html>`;

  return (
    <div className='mt-10 w-full pr-2 overflow-x-auto'>
      <h1 className='font-bold text-2xl md:text-3xl'>Text Formating</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Text formatting in HTML is essential for presenting content in a visually appealing and structured manner. By employing various formatting elements and attributes, developers can enhance the readability and aesthetics of their web pages. Let's delve deeper into each aspect of text formatting:</p>
        <h4 className='text-xl font-bold'>Headings:</h4>
        <p>HTML offers six levels of headings, ranging from <span className='cs dark:dcs'>&lt;h1&gt;</span> to <span className='cs dark:dcs'>&lt;h6&gt;</span>. These headings establish a hierarchical structure for content, with <span className='cs dark:dcs'>&lt;h1&gt;</span> being the most significant and <span className='cs dark:dcs'>&lt;h6&gt;</span> the least. Typically, <span className='cs dark:dcs'>&lt;h1&gt;</span> is reserved for main headings, while <span className='cs dark:dcs'>&lt;h2&gt;</span> to <span className='cs dark:dcs'>&lt;h6&gt;</span> are used for subheadings, aiding in organizing and navigating through the webpage's content.</p>
        <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString1}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Paragraphs:</h4>
        <p>The <span className='cs dark:dcs'>&lt;p&gt;</span> element is fundamental for organizing textual content into paragraphs. It delineates blocks of text, providing clarity and separation between different sections of content. Paragraphs are crucial for conveying information in a coherent and structured manner, facilitating readability for users.</p>
        <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString2}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Text Formatting Elements:</h4>
        <p>HTML provides elements for applying basic text formatting to enhance emphasis and clarity:</p>
        <ol className='flex flex-col gap-4'>
          <li>1. <span className='font-bold text-[17px]'><span className='cs dark:dcs'>&lt;b&gt;</span> and <span className='cs dark:dcs'>&lt;strong&gt;</span></span>: These elements render text in bold, signifying importance.</li>
          <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString3}
          </SyntaxHighlighter>
          <li>2. <span className='font-bold text-[17px]'><span className='cs dark:dcs'>&lt;i&gt;</span> and <span className='cs dark:dcs'>&lt;em&gt;</span></span>: These elements italicize text, indicating emphasis or a change in tone.</li>
          <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString4}
          </SyntaxHighlighter>
          <li>3. <span className='font-bold text-[17px]'><span className='cs dark:dcs'>&lt;u&gt;</span></span>: The <span className='cs dark:dcs'>&lt;u&gt;</span> element underlines text, drawing attention to specific content.</li>
          <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString5}
          </SyntaxHighlighter>
          <li>4. <span className='font-bold text-[17px]'><span className='cs dark:dcs'>&lt;s&gt;</span></span>: The <span className='cs dark:dcs'>&lt;s&gt;</span> element strikes through text, indicating deletion or outdated information.</li>
          <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString6}
          </SyntaxHighlighter>
          <li>5. <span className='font-bold text-[17px]'><span className='cs dark:dcs'>&lt;sub&gt;</span> and <span className='cs dark:dcs'>&lt;sup&gt;</span></span>: These elements create subscript and superscript text, respectively, useful for scientific or mathematical annotations.</li>
          <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString7}
          </SyntaxHighlighter>
        </ol>
        <h4 className='text-xl font-bold'>Line Breaks:</h4>
        <p>The <span className='cs dark:dcs'>&lt;br&gt;</span> element inserts a line break within text, forcing subsequent content to appear on a new line. It is useful for situations where a line break is necessary within a paragraph or other inline text elements.</p>
        <h4 className='text-xl font-bold'>Horizontal Rule:</h4>
        <p>The <span className='cs dark:dcs'>&lt;hr&gt;</span> element creates a horizontal line, visually separating content sections within a webpage. It provides structure and organization, enhancing the readability and visual appeal of the webpage by dividing content into distinct sections.</p>
        <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString8}
        </SyntaxHighlighter>
        <p>By leveraging these text formatting elements and attributes judiciously, developers can create visually appealing and well-structured web pages that effectively communicate information to users.</p>
      </article>

      <div className='flex max-w-[90vw] flex-col mb-10 gap-2'>
        <button className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center cursor-not-allowed'>NO PROJECT YET</button>
        <button onClick={() => setQuestions(true)} className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center'> {questions ? 'IN PROGRESS....' : 'COMPLETE QUIZ'} </button>
      </div>

      { questions && (
        <div className='w-full h-[70vh]'>
          <div className='bg-gray-200 rounded-md dark:bg-gray-800 h-full w-full'>
            <Quiz data={QuizFive} />
          </div>
          <div>
            <button onClick={() => setQuestions(false)} className='bg-green-500 py-2 w-full px-12 rounded-lg mt-6 font-bold justify-center items-center'> FINISH & CONTINUE </button>
          </div>
        </div>
      )}

      <div>
        <SubFooter
          t1="Basic Elements"
          l1="/learn/html/basic-elements"
          t2="HTML Tags & Attributes"
          l2="/learn/html/html-tags-attributes"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonFive.jsx"
        />
      </div>

      <div className='mt-24 relative'>
        <Footer />
      </div>
      
    </div>
  )
}

export default LessonFive