import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>`;

  const codeString2 = `<!DOCTYPE html>
<html lang="en">
  
</html>`;

  const codeString3 = `<!DOCTYPE html>
<html lang="en">
  <head>

  </head>
</html>`;

  const codeString4 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
</html>`;

  const codeString5 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    
  </body>
</html>`;

  const codeString6 = `<!DOCTYPE html>
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
</html>`;

  const codeString7 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    <p>This is a basic paragraph tag</p>
  </body>
</html>`;

  const codeString8 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    <a href="https://github.com">This is a link tag that takes user to GitHub</a>
  </body>
</html>`;

  const codeString9 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title of a webpage</title>
  </head>
  <body>
    <img src="https://unspash/image.png" alt="Alternative text">
  </body>
</html>`;

  const codeString10 = `<!DOCTYPE html>
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
</html>`;

  const codeString11 = `<!DOCTYPE html>
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
</html>`;

  return (
    <div>
      <h1 className='font-bold text-2xl md:text-3xl underline underline-offset-[16px] pb-10'>Basic HTML Elements</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20 overflow-hidden'>
      <p>Learning the basic elements of HTML is akin to grasping the fundamental building blocks of web development. These elements form the foundation upon which web pages are constructed, allowing developers to structure content and create meaningful user experiences. Here's an overview of some essential HTML elements:</p>
        <ol className='flex flex-col gap-4'>
          <li><span className='font-bold text-[17px]'>1. <span className='code'>&lt;!DOCTYPE html&gt;</span>:</span> This declaration at the beginning of an HTML document specifies the HTML version being used. It ensures that the browser renders the page correctly.</li>
          <Snippet codeString={codeString1} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>2. <span className='code'>&lt;html&gt;</span>:</span> The <span className='code'>&lt;html&gt;</span> element wraps the entire HTML document and serves as its root element.</li>
          <Snippet codeString={codeString2} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>3. <span className='code'>&lt;head&gt;</span>:</span> Within the <span className='code'>&lt;head&gt;</span> element, you include meta-information about the document, such as the page title, character encoding, stylesheets, and scripts. This section is not displayed on the web page itself but contains crucial information for browsers and search engines.</li>
          <Snippet codeString={codeString3} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>4. <span className='code'>&lt;title&gt;</span>:</span> The <span className='code'>&lt;title&gt;</span> element, nested within the <span className='code'>&lt;title&gt;</span>, specifies the title of the web page, which appears in the browser's title bar or tab.</li>
          <Snippet codeString={codeString4} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>5. <span className='code'>&lt;body&gt;</span>:</span> The <span className='code'>&lt;body&gt;</span> element contains the main content of the web page, including text, images, links, and other elements visible to users.</li>
          <Snippet codeString={codeString5} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>6. <span className='code'>&lt;h1&gt; to &lt;h6&gt;</span>:</span> Heading elements denote headings of various levels, with <span className='code'>&lt;h1&gt;</span> being the highest (most important) and <span className='code'>&lt;h6&gt;</span> being the lowest. They are used to structure the hierarchical organization of content.</li>
          <Snippet codeString={codeString6} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>7. <span className='code'>&lt;p&gt;</span>:</span> The <span className='code'>&lt;p&gt;</span> element represents a paragraph of text. It is commonly used to enclose blocks of text within a web page.</li>
          <Snippet codeString={codeString7} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>8. <span className='code'>&lt;a&gt;</span>:</span> The <span className='code'>&lt;a&gt;</span> (anchor) element defines hyperlinks, allowing users to navigate to other web pages or resources. It is accompanied by an href attribute, specifying the destination URL.</li>
          <Snippet codeString={codeString8} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>9. <span className='code'>&lt;img&gt;</span>:</span> The <span className='code'>&lt;img&gt;</span> element embeds images within a web page. It requires a src attribute, which specifies the image file's URL, and may include optional attributes like alt (alternative text) and width/height for customization.</li>
          <Snippet codeString={codeString9} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>10. <span className='code'>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</span>:</span> These elements are used to create lists. <span className='code'>&lt;ul&gt;</span> and <span className='code'>&lt;ol&gt;</span> represent unordered and ordered lists, respectively, while <span className='code'>&lt;li&gt;</span> defines individual list items within them.</li>
          <Snippet codeString={codeString10} lang='html' title='HTML' />
          <li><span className='font-bold text-[17px]'>11. <span className='code'>&lt;div&gt;</span> and <span className='code'>&lt;span&gt;</span>:</span> These are generic container elements used for grouping and styling other elements. <span className='code'>&lt;div&gt;</span> is a block-level element, while <span className='code'>&lt;span&gt;</span> is an inline element.</li>
          <Snippet codeString={codeString11} lang='html' title='HTML' />
        </ol>
      <p>Mastering these basic HTML elements lays a strong foundation for creating well-structured and semantically meaningful web pages. As you progress in your web development journey, you'll explore more elements and learn how to combine them to build sophisticated layouts and interfaces.</p>
      </article>
    </div>
  );
}

export default Tutorial;
