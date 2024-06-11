import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<style>
  .container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
  }
  .header {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  .paragraph {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }
  .highlight {
    background-color: yellow;
  }
</style>`;
  const codeString2 = `<div class="container">
  <div class="header">Welcome to the Tutorial</div>
  <p class="paragraph">This tutorial will teach you how to use classes in HTML and CSS.</p>
  <p class="paragraph highlight">Classes help you apply styles to multiple elements efficiently.</p>
</div>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Class Implementation</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Classes in HTML and CSS allow you to apply styles to multiple elements efficiently. By using classes, you can create reusable styles that can be applied to various elements on your web page. Here&apos;s how you can implement classes in HTML and CSS:</p>

        <h4 className='text-xl font-semibold'>Creating Classes in CSS</h4>
        <p>To create a class in CSS, use the period <span className='code'>.</span> followed by the class name. Define the styles you want to apply within the curly braces <span className='code'>{'{}'}</span>.</p>
        <Snippet codeString={codeString1} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Applying Classes in HTML</h4>
        <p>To apply a class to an HTML element, use the <span className='code'>class</span> attribute followed by the class name. You can apply multiple classes to an element by separating the class names with a space.</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Example Explained</h4>
        <p>In the example above, we define four CSS classes: <span className='code'>container</span>, <span className='code'>header</span>, <span className='code'>paragraph</span>, and <span className='code'>highlight</span>. These classes are used to style various elements within a container:</p>
        
        <ul className='list-disc list-inside'>
          <li><span className='code'>container</span>: Applies width, margin, padding, background color, and border styles to the container element.</li>
          <li><span className='code'>header</span>: Styles the header text with a larger font size, bold font weight, center alignment, and bottom margin.</li>
          <li><span className='code'>paragraph</span>: Styles paragraph text with a specific font size, line height, and color.</li>
          <li><span className='code'>highlight</span>: Adds a yellow background color to highlight text within a paragraph.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Best Practices for Class Implementation</h4>
        
        <h5 className='text-lg font-semibold'>Use Descriptive Class Names</h5>
        <p>Choose class names that clearly describe the purpose or function of the styles. This makes your code easier to read and maintain.</p>

        <h5 className='text-lg font-semibold'>Avoid Overly Generic Names</h5>
        <p>Avoid using overly generic class names that can be ambiguous. Specific class names help prevent conflicts and ensure that styles are applied correctly.</p>

        <h5 className='text-lg font-semibold'>Reuse Classes</h5>
        <p>Reuse classes across different elements to maintain consistency in your design and reduce redundancy in your CSS code.</p>

        <h5 className='text-lg font-semibold'>Combine Classes</h5>
        <p>Combine multiple classes on a single element to achieve complex styles without duplicating CSS code. This also allows for more modular and flexible design.</p>
        
        <h4 className='text-xl font-semibold'>Combining Multiple Classes</h4>
        <p>To combine multiple classes, simply list them in the class attribute separated by a space:</p>
        <Snippet codeString={`<p class="paragraph highlight">This text is styled with multiple classes.</p>`} lang={'html'} title={'HTML'} />

        <p>In this example, the paragraph element is styled with both the <span className='code'>paragraph</span> and <span className='code'>highlight</span> classes, combining their styles to create the final appearance.</p>

        <p>By understanding and using class implementation effectively, you can create clean, maintainable, and scalable CSS that enhances the appearance and usability of your web pages.</p>
      </article>
    </div>
  );
}

export default Tutorial;
