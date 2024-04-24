import React, { useState } from 'react'
import Footer from '../../components/Footer'
import SubFooter from '../../components/SubFooter'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from './Questions/Quiz'
import QuizEleven from './Questions/QuizEleven.json'
import { useNavigate } from 'react-router-dom';

const LessonNine = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(false);
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const codeString1 =`<p style="color: blue; font-size: 16px;">This is a paragraph with inline styles.</p>`;
  const codeString2 =`
<head>
  <style>
    p {
      color: red;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>This is a paragraph styled using internal stylesheet.</p>
</body>`;

  const codeString3 =`
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>`;

  const codeString4 =`
p {
  color: green;
  font-size: 20px;
}`;

  const codeString5 =`p {color: red;}`;
  const codeString6 =`.highlight { background-color: yellow; }`;
  const codeString7 =`#header { font-size: 24px; }`;
  const codeString8 =`div p { font-style: italic; }`;
  const codeString9 =`
/* This is a comment */
p {
  /* This will make paragraph text blue */
  color: blue;
}`;

  return (
    <div className='mt-10 w-full pr-2 overflow-x-auto'>
      <h1 className='font-bold text-2xl md:text-3xl'>Style Definition</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Defining styles in HTML is a common practice for adding visual enhancements and layout designs to web pages. While HTML provides the structure of the content, CSS (Cascading Style Sheets) is used to define the presentation and appearance of that content.</p>
        <p>Here's how to define styles in HTML using CSS.</p>
        <h4 className='text-xl font-bold'>Inline Styles</h4>
        <p>Inline styles are applied directly to individual HTML elements using the <span className='cs dark:dcs'>style</span> attribute.</p>
        <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString1}
        </SyntaxHighlighter>
        <p>This will make the text blue and set the font size to 16 pixels.</p>
        <h4 className='text-xl font-bold'>Internal Stylesheet</h4>
        <p>Internal stylesheets are defined within the <span className='cs dark:dcs'>&lt;style&gt;</span> element in the <span className='cs dark:dcs'>&lt;head&gt;</span> section of the HTML document. This method allows you to apply styles to multiple elements within the same document.</p>
        <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString2}
        </SyntaxHighlighter>
        <p>All <span className='cs dark:dcs'>&lt;p&gt;</span> elements in the document will now have red text color and a font size of 18 pixels.</p>
        <h4 className='text-xl font-bold'>External Stylesheet</h4>
        <p>External stylesheets are separate CSS files linked to the HTML document using the <span className='cs dark:dcs'>&lt;link&gt;</span> element in the <span className='cs dark:dcs'>&lt;head&gt;</span> section. This method allows you to maintain consistent styles across multiple pages.</p>
        <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString3}
        </SyntaxHighlighter>
        <p>The <span className='cs dark:dcs'>styles.css</span> file would look like this.</p>
        <SyntaxHighlighter className="syntax" language='css' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString4}
        </SyntaxHighlighter>
        <p>This will apply the styles defined in <span className='cs dark:dcs'>styles.css</span> to all <span className='cs dark:dcs'>&lt;p&gt;</span> elements in the HTML document.</p>
        <h4 className='text-xl font-bold'>Selectors</h4>
        <p><span className='font-bold text-[17px]'>Element Selector:</span> Targets all instances of a specific HTML element. Example: <span className='cs dark:dcs'>{codeString5}</span>.</p>
        <p><span className='font-bold text-[17px]'>Class Selector:</span> Targets elements with a specific class attribute. Example: <span className='cs dark:dcs'>{codeString6}</span>.</p>
        <p><span className='font-bold text-[17px]'>ID Selector:</span> Targets a single element with a specific ID attribute. Example: <span className='cs dark:dcs'>{codeString7}</span>.</p>
        <p><span className='font-bold text-[17px]'>Descendant Selector:</span> Targets elements that are descendants of a specified element. Example:  <span className='cs dark:dcs'>{codeString8}</span>.</p>
        <h4 className='text-xl font-bold'>Comments</h4>
        <p>You can add comments in CSS using <span className='cs dark:dcs'>/* */</span>. Comments are ignored by the browser but can be helpful for documenting your styles.</p>
        <SyntaxHighlighter className="syntax" language='css' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString9}
        </SyntaxHighlighter>
        <p>By using these methods to define styles in HTML, you can customize the appearance of your web pages and create visually appealing designs.</p>
      </article>

      <div className='flex max-w-[90vw] flex-col mb-10 gap-2'>
        <button className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center cursor-not-allowed'>NO PROJECT YET</button>
        <button onClick={() => setQuestions(true)} className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center'> {questions ? 'IN PROGRESS....' : 'COMPLETE QUIZ'} </button>
      </div>

      { questions && (
        <div className='w-full h-[70vh]'>
          <div className='bg-gray-200 rounded-md dark:bg-gray-800 h-full w-full'>
            <Quiz data={QuizEleven} />
          </div>
          <div>
            <button onClick={() => setQuestions(false)} className='bg-green-500 py-2 w-full px-12 rounded-lg mt-6 font-bold justify-center items-center'> FINISH & CONTINUE </button>
          </div>
        </div>
      )}

      <div>
        <SubFooter
          t1="List Creation"
          l1="/learn/html/list-creation"
          t2="Color Selection"
          l2="/learn/html/color-selection"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonEleven.jsx"
        />
      </div>

      <div className='mt-24 relative'>
        <Footer />
      </div>

    </div>
  )
}

export default LessonNine