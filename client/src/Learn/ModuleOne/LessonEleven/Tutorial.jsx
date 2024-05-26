import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<style>
  .box {
    width: 200px;
    height: 100px;
    padding: 10px;
    border: 5px solid black;
    margin: 20px;
    background-color: lightblue;
  }
</style>`;
  const codeString2 = `<div class="box">This is a box</div>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Box Model Concept</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>The CSS Box Model is a fundamental concept that defines how elements are structured and displayed on a web page. It consists of four main components: content, padding, border, and margin. Understanding the Box Model is essential for designing and manipulating the layout of web elements effectively.</p>

        <h4 className='text-xl font-semibold'>Components of the Box Model</h4>
        
        <h5 className='text-lg font-semibold'>Content</h5>
        <p>The content area is the innermost part of the box, which holds the actual content like text, images, or other elements. The width and height properties directly affect the size of the content area.</p>

        <h5 className='text-lg font-semibold'>Padding</h5>
        <p>Padding is the space between the content and the border. It creates an inner margin inside the box, increasing the space around the content. Padding can be set individually for each side (top, right, bottom, left) or all sides at once.</p>
        
        <h5 className='text-lg font-semibold'>Border</h5>
        <p>The border wraps around the padding (if any) and the content. It is defined by its width, style, and color. The border adds to the overall size of the box.</p>
        
        <h5 className='text-lg font-semibold'>Margin</h5>
        <p>Margin is the outermost layer, creating space between the element and its surrounding elements. Like padding, margins can be set individually for each side or all sides at once. Margins do not affect the size of the box itself but create space around it.</p>

        <Snippet codeString={codeString1} lang={'css'} title={'CSS'} />
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Box Model Example</h4>
        <p>Let&apos;s look at an example to illustrate how these components work together. The following code creates a box with specific dimensions, padding, border, and margin:</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />

        <h5 className='text-lg font-semibold'>Box Model Calculation</h5>
        <p>To understand the total size of an element, you need to consider all parts of the Box Model. Here’s how the dimensions are calculated for the example box:</p>
        <ul className='list-disc list-inside'>
          <li><strong>Content Width:</strong> 200px</li>
          <li><strong>Padding:</strong> 10px on all sides (adds 20px to the width and height)</li>
          <li><strong>Border:</strong> 5px on all sides (adds 10px to the width and height)</li>
          <li><strong>Total Width:</strong> 200px (content) + 20px (padding) + 10px (border) = 230px</li>
          <li><strong>Total Height:</strong> 100px (content) + 20px (padding) + 10px (border) = 130px</li>
        </ul>
        
        <h4 className='text-xl font-semibold'>CSS Box-Sizing Property</h4>
        <p>The <span className='code'>box-sizing</span> property changes how the total width and height of an element are calculated. By default, it is set to <span className='code'>content-box</span>, which means the width and height include only the content. Setting it to <span className='code'>border-box</span> makes the width and height include content, padding, and border.</p>
        <Snippet codeString={`.box-border {
  box-sizing: border-box;
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
  background-color: lightblue;
}`} lang={'css'} title={'CSS'} />
        
        <p>In this example, the <span className='code'>width</span> property includes the padding and border, so the total width remains 200px. The same applies to the height.</p>
        <Snippet codeString={`<div class="box-border">This is a box with border-box sizing</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Best Practices</h4>
        <p>When working with the Box Model, consider these best practices:</p>
        
        <h5 className='text-lg font-semibold'>Consistent Box Sizing</h5>
        <p>Using <span className='code'>box-sizing: border-box;</span> across your entire project can simplify layout calculations and ensure consistency. This can be done using a universal selector:</p>
        <Snippet codeString={`* {
  box-sizing: border-box;
}`} lang={'css'} title={'CSS'} />
        
        <h5 className='text-lg font-semibold'>Avoid Fixed Heights</h5>
        <p>Instead of setting fixed heights, use padding and margin to create the necessary space. This approach helps with responsive design and content scaling.</p>
        
        <h5 className='text-lg font-semibold'>Use Tools</h5>
        <p>Use browser developer tools to inspect and understand the Box Model of elements on your page. These tools visually represent the content, padding, border, and margin.</p>
        
        <p>Understanding and effectively using the Box Model is crucial for creating well-structured, responsive, and visually appealing web pages. By mastering these concepts, you can have better control over the layout and design of your web projects.</p>
      </article>
    </div>
  );
}

export default Tutorial;
