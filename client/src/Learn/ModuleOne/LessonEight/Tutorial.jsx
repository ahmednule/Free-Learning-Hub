import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  h1 {
    color: #333;
    text-align: center;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
</style>`;
  const codeString2 = `<link rel="stylesheet" href="styles.css">`;
  const codeString3 = `<div style="color: red; font-weight: bold;">
  This is an inline styled text.
</div>`;
  const codeString4 = `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  font-size: 16px;
  line-height: 1.5;
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Style Definition</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Defining styles in HTML is essential for controlling the appearance of your web pages. CSS (Cascading Style Sheets) is the language used to style HTML elements. Here&apos;s how to define and apply styles using CSS:</p>

        <h4 className='text-xl font-semibold'>Inline Styles</h4>
        <p>Inline styles are used to apply styles directly to HTML elements using the <span className='code'>style</span> attribute. This method is useful for applying unique styles to individual elements.</p>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Internal Styles</h4>
        <p>Internal styles are defined within the <span className='code'>&lt;style&gt;</span> element in the <span className='code'>&lt;head&gt;</span> section of an HTML document. This method is useful for applying styles to a single document.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>External Styles</h4>
        <p>External styles are defined in a separate CSS file, which is linked to the HTML document using the <span className='code'>&lt;link&gt;</span> element. This method is the most efficient way to manage styles for multiple web pages.</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />
        <Snippet codeString={codeString4} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>CSS Selectors</h4>
        <p>CSS selectors are used to target HTML elements that you want to style. Here are some common types of selectors:</p>
        
        <h5 className='text-lg font-semibold'>Element Selector</h5>
        <p>Targets all instances of a specified element.</p>
        <Snippet codeString={`p {
  font-size: 16px;
}`} lang={'css'} title={'CSS'} />
        
        <h5 className='text-lg font-semibold'>Class Selector</h5>
        <p>Targets elements with a specific class attribute. Class selectors are prefixed with a dot (<span className='code'>.</span>).</p>
        <Snippet codeString={`.highlight {
  background-color: yellow;
}`} lang={'css'} title={'CSS'} />
        <Snippet codeString={`<p class="highlight">This is a highlighted paragraph.</p>`} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>ID Selector</h5>
        <p>Targets a single element with a specific id attribute. ID selectors are prefixed with a hash symbol (<span className='code'>#</span>).</p>
        <Snippet codeString={`#header {
  background-color: #f4f4f4;
  padding: 20px;
}`} lang={'css'} title={'CSS'} />
        <Snippet codeString={`<div id="header">This is the header</div>`} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Descendant Selector</h5>
        <p>Targets elements that are descendants of a specified element.</p>
        <Snippet codeString={`div p {
  color: blue;
}`} lang={'css'} title={'CSS'} />
        <Snippet codeString={`<div>
  <p>This paragraph will be blue.</p>
</div>`} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>CSS Properties</h4>
        <p>CSS properties are used to define the styles you want to apply to elements. Here are some common CSS properties:</p>
        
        <h5 className='text-lg font-semibold'>Color</h5>
        <p>Sets the text color of an element.</p>
        <Snippet codeString={`color: red;`} lang={'css'} title={'CSS'} />
        
        <h5 className='text-lg font-semibold'>Background Color</h5>
        <p>Sets the background color of an element.</p>
        <Snippet codeString={`background-color: yellow;`} lang={'css'} title={'CSS'} />
        
        <h5 className='text-lg font-semibold'>Font Size</h5>
        <p>Sets the size of the font.</p>
        <Snippet codeString={`font-size: 20px;`} lang={'css'} title={'CSS'} />
        
        <h5 className='text-lg font-semibold'>Margin and Padding</h5>
        <p>Sets the outer and inner spacing of elements, respectively.</p>
        <Snippet codeString={`margin: 10px;
padding: 20px;`} lang={'css'} title={'CSS'} />

        <p>By understanding and utilizing these methods and properties, you can create visually appealing and well-structured web pages. Proper use of CSS enhances the user experience and allows for easier maintenance and scalability of your web designs.</p>
      </article>
    </div>
  );
}

export default Tutorial;
