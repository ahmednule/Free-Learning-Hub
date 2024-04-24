import React, { useState } from 'react'
import Footer from '../../components/Footer'
import SubFooter from '../../components/SubFooter'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from './Questions/Quiz'
import QuizTwelve from './Questions/QuizTwelve.json'
import { useNavigate } from 'react-router-dom';

const LessonNine = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(false);
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const codeString1 =`
p {
  color: blue;
  background-color: lightgray;
}`;

  const codeString2 =`
h1 {
  color: #FF0000; /* Red */
  background-color: #00FF00; /* Green */
}`;

  const codeString3 =`
div {
  color: rgb(255, 0, 255); /* Magenta */
  background-color: rgb(0, 128, 0); /* Dark Green */
}`;

  const codeString4 =`
span {
  color: rgba(255, 0, 0, 0.5); /* Semi-transparent Red */
  background-color: rgba(0, 0, 255, 0.2); /* Semi-transparent Blue */
}`;

  const codeString5 =`
a {
  color: hsl(0, 100%, 50%); /* Red */
  background-color: hsla(120, 100%, 50%, 0.5); /* Semi-transparent Green */
}`;

  return (
    <div className='mt-10 w-full pr-2 overflow-x-auto'>
      <h1 className='font-bold text-2xl md:text-3xl'>Color Selection</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Choosing the right colors for your website is crucial for creating an aesthetically pleasing and visually appealing design. Here's how you can select colors for your HTML elements.</p>
        <h4 className='text-xl font-bold'>Color Names</h4>
        <p>HTML supports a variety of color names that you can use directly in your CSS styles. Some common color names include <span className='cs dark:dcs'>red</span>, <span className='cs dark:dcs'>blue</span> and <span className='cs dark:dcs'>green</span>.</p>
        <SyntaxHighlighter className="syntax" language='css' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString1}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>Hexadecimal Notation</h4>
        <p>Hexadecimal notation is a way of representing colors using hexadecimal values. It provides a wider range of colors than color names. Hexadecimal colors are specified using the format <span className='cs dark:dcs'>#RRGGBB</span>, where <span className='cs dark:dcs'>RR</span> represents the red value, <span className='cs dark:dcs'>GG</span> represents the green value, and <span className='cs dark:dcs'>BB</span> represents the blue value, each ranging from <span className='cs dark:dcs'>00</span> to <span className='cs dark:dcs'>FF</span>. Example:</p>
        <SyntaxHighlighter className="syntax" language='css' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString2}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>RGB Values</h4>
        <p>RGB (Red, Green, Blue) values represent colors as combinations of red, green, and blue components. Each component is specified as an integer between 0 and 255. Example:</p>
        <SyntaxHighlighter className="syntax" language='css' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString3}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>RGBA Values</h4>
        <p>RGBA (Red, Green, Blue, Alpha) values are similar to RGB, but with an additional alpha channel that specifies the transparency of the color. The alpha value ranges from 0 (fully transparent) to 1 (fully opaque). Example:</p>
        <SyntaxHighlighter className="syntax" language='css' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString4}
        </SyntaxHighlighter>
        <h4 className='text-xl font-bold'>HSL and HSLA Values</h4>
        <p>HSL (Hue, Saturation, Lightness) and HSLA (Hue, Saturation, Lightness, Alpha) values define colors based on their hue, saturation, and lightness. The hue value represents the color itself, saturation represents the intensity of the color, and lightness represents how light or dark the color is. The alpha value in HSLA defines the transparency of the color. Example:</p>
        <SyntaxHighlighter className="syntax" language='css' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString5}
        </SyntaxHighlighter>
        <p>There are various online color picker tools that can help you choose colors and generate corresponding hexadecimal, RGB, or HSL values. You can use <span onClick={() => navigate('/color-picker')} className='cl'>our built-in color tool</span>. </p>
        <p>By using these methods and tools, you can effectively select colors that match your design requirements and create visually appealing websites.</p>
      </article>

      <div className='flex max-w-[90vw] flex-col mb-10 gap-2'>
        <button className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center cursor-not-allowed'>NO PROJECT YET</button>
        <button onClick={() => setQuestions(true)} className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center'> {questions ? 'IN PROGRESS....' : 'COMPLETE QUIZ'} </button>
      </div>

      { questions && (
        <div className='w-full h-[70vh]'>
          <div className='bg-gray-200 rounded-md dark:bg-gray-800 h-full w-full'>
            <Quiz data={QuizTwelve} />
          </div>
          <div>
            <button onClick={() => setQuestions(false)} className='bg-green-500 py-2 w-full px-12 rounded-lg mt-6 font-bold justify-center items-center'> FINISH & CONTINUE </button>
          </div>
        </div>
      )}

      <div>
        <SubFooter
          t1="Style Definition"
          l1="/learn/html/style-definition"
          t2="Display Properties"
          l2="/learn/html/display-properties"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonTwelve.jsx"
        />
      </div>

      <div className='mt-24 relative'>
        <Footer />
      </div>

    </div>
  )
}

export default LessonNine