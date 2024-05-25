import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<img src="image.jpg" />`;
  const codeString2 = `<div class="container">`;
  const codeString3 = `<section id="intro">`;
  const codeString4 = `<img src="image.jpg" alt="Image">`;
  const codeString5 = `<img src="image.jpg" alt="Alternative Text">`;
  const codeString6 = `<a href="https://www.example.com">Link</a>`;
  const codeString7 = `<a href="#" title="Click here">Link</a>`;
  const codeString8 = `<p style="color: red; font-size: 16px;">Styled Text</p>`;
  const codeString9 = `<a href="https://www.example.com" target="_blank">Link</a>`;
  const codeString10 = `<input type="text" placeholder="Enter your name">`;
  const codeString11 = `<input type="text">
<input type="checkbox">
<input type="submit">`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>HTML Tags & Attributes</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Understanding HTML tags and attributes is fundamental for creating structured and interactive web pages. HTML (HyperText Markup Language) utilizes tags to define elements and attributes to provide additional information about those elements. Here&apos;s an overview of HTML tags and attributes:</p>
        <h4 className='text-xl font-semibold'>Open & Closing Tags (Container Tag)</h4>
        <p>Most HTML elements are defined by opening and closing tags. The opening tag indicates the beginning of an element, while the closing tag signifies its end. For example: <span className='code'>&lt;p&gt;</span> denotes the start of a paragraph, and <span className='code'>&lt;/p&gt;</span> marks its end.</p>
        <h4 className='text-xl font-semibold'>Void Elements (Self Closing Tags)</h4>
        <p>Some elements do not require a closing tag and are known as void or self-closing elements. Examples include <span className='code'>&lt;img&gt;</span>, <span className='code'>&lt;br&gt;</span>, and <span className='code'>&lt;input&gt;</span>. Void elements are terminated with a trailing slash, such as: </p>
        <Snippet codeString={codeString1} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>Class Attribute</h4>
        <p>The class attribute specifies one or more class names for an element, allowing CSS to style multiple elements with the same class. Example:</p>
        <Snippet codeString={codeString2} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>ID Attribute</h4>
        <p>The id attribute provides a unique identifier for an element. It is used for styling with CSS or targeting elements with JavaScript. Example: </p>
        <Snippet codeString={codeString3} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>SRC Attribute</h4>
        <p>The src attribute specifies the source URL for elements like images, audio, video, iframes, etc. Example: </p>
        <Snippet codeString={codeString4} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>ALT Attribute</h4>
        <p>The alt attribute provides alternative text for images, which is displayed if the image fails to load or for accessibility purposes. Example:</p>
        <Snippet codeString={codeString5} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>HREF Attribute</h4>
        <p>The href attribute defines the URL for hyperlinks created with the <span className='code'>&lt;a&gt;</span> element. Example:</p>
        <Snippet codeString={codeString6} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>TITLE Attribute</h4>
        <p>The title attribute provides additional information about an element, typically displayed as a tooltip when the user hovers over the element. Example: </p>
        <Snippet codeString={codeString7} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>STYLE Attribute</h4>
        <p>The style attribute allows inline CSS styling for an element. Example:</p>
        <Snippet codeString={codeString8} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>TARGET Attribute</h4>
        <p>The target attribute specifies where to open the linked document when using <span className='code'>&lt;a&gt;</span> elements. Example:</p>
        <Snippet codeString={codeString9} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>PLACEHOLDER Attribute</h4>
        <p>The placeholder attribute provides a hint or example text for input fields. Example: </p>
        <Snippet codeString={codeString10} lang='html' title='HTML' />
        <h4 className='text-xl font-semibold'>TYPE Attribute</h4>
        <p>The type attribute specifies the type of the input element. Example:</p>
        <Snippet codeString={codeString11} lang='html' title='HTML' />
        <p>These are just a few examples of HTML tags and attributes. Understanding how to use them effectively allows developers to create well-structured, accessible, and interactive web pages.</p>
      </article>
    </div>
  );
}

export default Tutorial;
