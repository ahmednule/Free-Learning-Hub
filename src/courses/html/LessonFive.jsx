import React from 'react'
import Footer from '../../components/Footer'
import SubFooter from '../../components/SubFooter'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const LessonFive = () => {
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const codeString1 = `
<body>
  <h1>Main heading.</h1>
  <h2>Sub-heading.</h2>
  <h3>Sub-heading.</h3>
  <h4>Sub-heading.</h4>
  <h5>Sub-heading.</h5>
  <h6>Sub-heading.</h6>
</body>

`;



  return (
    <div className='px-4 mt-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>Text Formating</h1>
      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Text formatting in HTML is essential for presenting content in a visually appealing and structured manner. By employing various formatting elements and attributes, developers can enhance the readability and aesthetics of their web pages. Let's delve deeper into each aspect of text formatting:</p>
        <h4 className='text-xl font-bold'>Headings:</h4>
        <p>HTML offers six levels of headings, ranging from <span className='cs dark:dcs'>&lt;h1&gt;</span> to <span className='cs dark:dcs'>&lt;h6&gt;</span>. These headings establish a hierarchical structure for content, with <span className='cs dark:dcs'>&lt;h1&gt;</span> being the most significant and <span className='cs dark:dcs'>&lt;h6&gt;</span> the least. Typically, <span className='cs dark:dcs'>&lt;h1&gt;</span> is reserved for main headings, while <span className='cs dark:dcs'>&lt;h2&gt;</span> to <span className='cs dark:dcs'>&lt;h6&gt;</span> are used for subheadings, aiding in organizing and navigating through the webpage's content.</p>
        <SyntaxHighlighter language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString1}
        </SyntaxHighlighter>
      
      </article>
      <div>
        <SubFooter
          t1="Basic Elements"
          l1="/learn/html/l4"
          t2="Link Creation"
          l2="/learn/html/l6"
          reset="/learn/html"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonFive.jsx"
        />
      </div>
      <div className='mt-24'>
        <Footer />
      </div>
    </div>
  )
}

export default LessonFive