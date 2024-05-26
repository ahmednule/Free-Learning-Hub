import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<style>
  .block {
    display: block;
    width: 100%;
    background-color: lightblue;
    padding: 10px;
    margin: 5px 0;
  }
  .inline {
    display: inline;
    background-color: lightgreen;
    padding: 10px;
    margin: 5px;
  }
  .inline-block {
    display: inline-block;
    background-color: lightcoral;
    padding: 10px;
    margin: 5px;
  }
  .none {
    display: none;
  }
</style>`;
  const codeString2 = `<div class="block">This is a block element</div>`;
  const codeString3 = `<span class="inline">This is an inline element</span>`;
  const codeString4 = `<div class="inline-block">This is an inline-block element</div>`;
  const codeString5 = `<div class="none">This element is hidden</div>`;
  const codeString6 = `<div style="display: flex; justify-content: space-between;">
  <div style="background-color: lightgray; padding: 10px;">Flex Item 1</div>
  <div style="background-color: lightgray; padding: 10px;">Flex Item 2</div>
  <div style="background-color: lightgray; padding: 10px;">Flex Item 3</div>
</div>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Display Properties</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>The <span className='code'>display</span> property in CSS determines how an element is displayed on the web page. Different display properties control the layout and visibility of HTML elements. Here&apos;s an overview of the most common display properties:</p>

        <h4 className='text-xl font-semibold'>Block</h4>
        <p>Block-level elements take up the full width available and start on a new line. Examples of block elements include <span className='code'>&lt;div&gt;</span>, <span className='code'>&lt;p&gt;</span>, and <span className='code'>&lt;h1&gt;</span>.</p>
        <Snippet codeString={codeString1} lang={'css'} title={'CSS'} />
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Inline</h4>
        <p>Inline elements take up only as much width as necessary and do not start on a new line. Examples of inline elements include <span className='code'>&lt;span&gt;</span>, <span className='code'>&lt;a&gt;</span>, and <span className='code'>&lt;img&gt;</span>.</p>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Inline-block</h4>
        <p>Inline-block elements are similar to inline elements but can have width and height specified. They do not start on a new line and respect padding and margins.</p>
        <Snippet codeString={codeString4} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>None</h4>
        <p>The <span className='code'>display: none;</span> property hides the element, removing it from the document layout. The element will not occupy any space.</p>
        <Snippet codeString={codeString5} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Flex</h4>
        <p>Flexbox is a layout model that allows for responsive and efficient arrangement of elements within a container. Setting <span className='code'>display: flex;</span> on a container enables flexbox properties.</p>
        <Snippet codeString={codeString6} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Common Use Cases</h4>
        <p>Understanding the different display properties helps in creating responsive and well-structured layouts:</p>
        
        <h5 className='text-lg font-semibold'>Navigation Menus</h5>
        <p>Using <span className='code'>inline</span> or <span className='code'>inline-block</span> for navigation items allows them to appear side by side.</p>
        <Snippet codeString={`<nav>
  <a href="#" class="inline">Home</a>
  <a href="#" class="inline">About</a>
  <a href="#" class="inline">Contact</a>
</nav>`} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Form Elements</h5>
        <p>Using <span className='code'>block</span> for form elements can make them easier to style and align.</p>
        <Snippet codeString={`<form>
  <label for="name" class="block">Name</label>
  <input type="text" id="name" class="block">
  <button type="submit" class="block">Submit</button>
</form>`} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Layout Structure</h5>
        <p>Using <span className='code'>flex</span> for layout containers provides a powerful way to create complex, responsive designs.</p>
        
        <p>By mastering these display properties, you can create versatile and adaptive web layouts that enhance the user experience and meet design requirements.</p>
      </article>
    </div>
  );
}

export default Tutorial;
