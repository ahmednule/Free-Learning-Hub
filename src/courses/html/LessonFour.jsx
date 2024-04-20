import React from 'react'
import SubFooter from '../../components/SubFooter'
import Footer from '../../components/Footer'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const LessonFour = () => {
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const codeString1 = `
<!DOCTYPE html>

`;
  const codeString2 = `
<!DOCTYPE html>
<html lang="en">
  
</html>

`;
const codeString3 = `
<!DOCTYPE html>
<html lang="en">
  <head>

  </head>
</html>

`;
const codeString4 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
</html>

`;
const codeString5 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    
  </body>
</html>

`;
const codeString6 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    <h1>The highest level</h1>
    <h2>Level drops by one</h2>
    <h3>Level drops by one</h3>
    <h4>Level drops by one</h4>
    <h5>Level drops by one</h5>
    <h6>Lowest level</h6>
  </body>
</html>

`;
const codeString7 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    <p>This is a basic paragraph tag</p>
  </body>
</html>

`;
const codeString8 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    <a href="https://github.com">This is a link tag that takes user to GitHub</a>
  </body>
</html>

`;
const codeString9 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    <img src="https://unspash/image.png" alt="Alternative text">
  </body>
</html>

`;
const codeString10 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    <ol>
      <li></li>
      <li></li>
    </ol>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </body>
</html>

`;
const codeString11 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    <div>
      <p>This tag is contained in a div</p>
      <p> You can <span> USE </span> a span inside a paragraph tag </p>
    </div>
  </body>
</html>

`;



  return (
    <div className='px-4 mt-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>Basic HTML Elements</h1>
      <article className='mt-6 font-md flex flex-col gap-8 mb-20 overflow-x-hidden'>
        <p>Learning the basic elements of HTML is akin to grasping the fundamental building blocks of web development. These elements form the foundation upon which web pages are constructed, allowing developers to structure content and create meaningful user experiences. Here's an overview of some essential HTML elements:</p>
        <ol className='ml-2 flex flex-col gap-4'>
          <li><span className='font-bold text-[17px]'>1. <span className='cs dark:dcs'>&lt;!DOCTYPE html&gt;</span>:</span> This declaration at the beginning of an HTML document specifies the HTML version being used. It ensures that the browser renders the page correctly.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString1}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>2. <span className='cs dark:dcs'>&lt;html&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;html&gt;</span> element wraps the entire HTML document and serves as its root element.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString2}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>3. <span className='cs dark:dcs'>&lt;head&gt;</span>:</span> Within the <span className='cs dark:dcs'>&lt;head&gt;</span> element, you include meta-information about the document, such as the page title, character encoding, stylesheets, and scripts. This section is not displayed on the web page itself but contains crucial information for browsers and search engines.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString3}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>4. <span className='cs dark:dcs'>&lt;title&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;title&gt;</span> element, nested within the <span className='cs dark:dcs'>&lt;title&gt;</span>, specifies the title of the web page, which appears in the browser's title bar or tab.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString4}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>5. <span className='cs dark:dcs'>&lt;body&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;body&gt;</span> element contains the main content of the web page, including text, images, links, and other elements visible to users.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString5}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>6. <span className='cs dark:dcs'>&lt;h1&gt; to &lt;h6&gt;</span>:</span> Heading elements denote headings of various levels, with <span className='cs dark:dcs'>&lt;h1&gt;</span> being the highest (most important) and <span className='cs dark:dcs'>&lt;h6&gt;</span> being the lowest. They are used to structure the hierarchical organization of content.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString6}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>7. <span className='cs dark:dcs'>&lt;p&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;p&gt;</span> element represents a paragraph of text. It is commonly used to enclose blocks of text within a web page.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString7}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>8. <span className='cs dark:dcs'>&lt;a&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;a&gt;</span> (anchor) element defines hyperlinks, allowing users to navigate to other web pages or resources. It is accompanied by an href attribute, specifying the destination URL.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString8}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>9. <span className='cs dark:dcs'>&lt;img&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;img&gt;</span> element embeds images within a web page. It requires a src attribute, which specifies the image file's URL, and may include optional attributes like alt (alternative text) and width/height for customization.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString9}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>10. <span className='cs dark:dcs'>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</span>:</span> These elements are used to create lists. <span className='cs dark:dcs'>&lt;ul&gt;</span> and <span className='cs dark:dcs'>&lt;ol&gt;</span> represent unordered and ordered lists, respectively, while <span className='cs dark:dcs'>&lt;li&gt;</span> defines individual list items within them.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString10}
          </SyntaxHighlighter>
          <li><span className='font-bold text-[17px]'>11. <span className='cs dark:dcs'>&lt;div&gt;</span> and <span className='cs dark:dcs'>&lt;span&gt;</span>:</span> These are generic container elements used for grouping and styling other elements. <span className='cs dark:dcs'>&lt;div&gt;</span> is a block-level element, while <span className='cs dark:dcs'>&lt;span&gt;</span> is an inline element.</li>
          <SyntaxHighlighter className="w-fit px-5 max-w-[90vw]" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
            {codeString11}
          </SyntaxHighlighter>
        </ol>
        <p>Mastering these basic HTML elements lays a strong foundation for creating well-structured and semantically meaningful web pages. As you progress in your web development journey, you'll explore more elements and learn how to combine them to build sophisticated layouts and interfaces.</p>
      </article>
      <div>
        <SubFooter
          t1="Setting up IDE"
          l1="/learn/html/l3"
          t2="Text Formating"
          l2="/learn/html/l5"
          reset="/learn/html"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonFour.jsx"
        />
      </div>
      <div className='mt-24'>
        <Footer />
      </div>
    </div>
  )
}

export default LessonFour