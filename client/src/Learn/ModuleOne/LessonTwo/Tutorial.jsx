import React from 'react'
import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<body>
  <h1>Main heading.</h1>
  <h2>Sub-heading.</h2>
  <h3>Sub-heading.</h3>
  <h4>Sub-heading.</h4>
  <h5>Sub-heading.</h5>
  <h6>Sub-heading.</h6>
</body>`;

  const codeString2 = `<body>
  <p>This is my first website.</p>
</body>`;

  const codeString3 = `<body>
  <b>Such text are rendered bold.</b>
  <strong>This is also bold.</strong>
</body>`;

  const codeString4 = `<body>
  <i>Such text are rendered italic.</i>
  <em>This is also italic.</em>
</body>`;

  const codeString5 = `<body>
  <u>This is used to create text with an underline.</u>
</body>`;

  const codeString6 = `<body>
  <s>This is tag creates a strike through.</s>
</body>`;

  const codeString7 = `<body>
  <p>Today is 20 <sup>th</sup> of April 2024.</p>
  <p>log <sub>10</sub> 67</p>
</body>`;

  const codeString8 = `<!DOCTYPE html>
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
    <div>
      <h1 className='font-bold text-2xl md:text-3xl underline underline-offset-[16px] pb-10'>Text Formating</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Text formatting in HTML is essential for presenting content in a visually appealing and structured manner. By employing various formatting elements and attributes, developers can enhance the readability and aesthetics of their web pages. Let's delve deeper into each aspect of text formatting:</p>
          <h4 className='text-xl font-bold'>Headings:</h4>
          <p>HTML offers six levels of headings, ranging from <span className='code'>&lt;h1&gt;</span> to <span className='code'>&lt;h6&gt;</span>. These headings establish a hierarchical structure for content, with <span className='code'>&lt;h1&gt;</span> being the most significant and <span className='code'>&lt;h6&gt;</span> the least. Typically, <span className='code'>&lt;h1&gt;</span> is reserved for main headings, while <span className='code'>&lt;h2&gt;</span> to <span className='code'>&lt;h6&gt;</span> are used for subheadings, aiding in organizing and navigating through the webpage's content.</p>
          <Snippet codeString={codeString1} lang='html' title='HTML' />
          <h4 className='text-xl font-bold'>Paragraphs:</h4>
          <p>The <span className='cs dark:dcs'>&lt;p&gt;</span> element is fundamental for organizing textual content into paragraphs. It delineates blocks of text, providing clarity and separation between different sections of content. Paragraphs are crucial for conveying information in a coherent and structured manner, facilitating readability for users.</p>
          <Snippet codeString={codeString2} lang='html' title='HTML' />
        <h4 className='text-xl font-bold'>Text Formatting Elements:</h4>
        <p>HTML provides elements for applying basic text formatting to enhance emphasis and clarity:</p>
        <ol className='flex flex-col gap-4'>
          <li>1. <span className='font-bold text-[17px]'><span className='code'>&lt;b&gt;</span> and <span className='code'>&lt;strong&gt;</span></span>: These elements render text in bold, signifying importance.</li>
          <Snippet codeString={codeString3} lang='html' title='HTML' />
          <li>2. <span className='font-bold text-[17px]'><span className='code'>&lt;i&gt;</span> and <span className='code'>&lt;em&gt;</span></span>: These elements italicize text, indicating emphasis or a change in tone.</li>
          <Snippet codeString={codeString4} lang='html' title='HTML' />
          <li>3. <span className='font-bold text-[17px]'><span className='code'>&lt;u&gt;</span></span>: The <span className='code'>&lt;u&gt;</span> element underlines text, drawing attention to specific content.</li>
          <Snippet codeString={codeString5} lang='html' title='HTML' />
          <li>4. <span className='font-bold text-[17px]'><span className='code'>&lt;s&gt;</span></span>: The <span className='code'>&lt;s&gt;</span> element strikes through text, indicating deletion or outdated information.</li>
          <Snippet codeString={codeString6} lang='html' title='HTML' />
          <li>5. <span className='font-bold text-[17px]'><span className='code'>&lt;sub&gt;</span> and <span className='code'>&lt;sup&gt;</span></span>: These elements create subscript and superscript text, respectively, useful for scientific or mathematical annotations.</li>
          <Snippet codeString={codeString7} lang='html' title='HTML' />
        </ol>
        <h4 className='text-xl font-bold'>Line Breaks:</h4>
        <p>The <span className='code'>&lt;br&gt;</span> element inserts a line break within text, forcing subsequent content to appear on a new line. It is useful for situations where a line break is necessary within a paragraph or other inline text elements.</p>
        <h4 className='text-xl font-bold'>Horizontal Rule:</h4>
        <p>The <span className='code'>&lt;hr&gt;</span> element creates a horizontal line, visually separating content sections within a webpage. It provides structure and organization, enhancing the readability and visual appeal of the webpage by dividing content into distinct sections.</p>
        <Snippet codeString={codeString8} lang='html' title='HTML' />
        <p>By leveraging these text formatting elements and attributes judiciously, developers can create visually appealing and well-structured web pages that effectively communicate information to users.</p>
      </article>
    </div>
  )
}

export default Tutorial