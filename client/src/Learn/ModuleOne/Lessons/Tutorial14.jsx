import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `/* Element Selector */
p {
  color: blue;
}`;  
  const codeString2 = `/* Class Selector */
.intro {
  font-size: 18px;
  color: green;
}`;  
  const codeString3 = `/* ID Selector */
#header {
  background-color: #f0f0f0;
  padding: 20px;
}`;  
  const codeString4 = `/* Attribute Selector */
a[target="_blank"] {
  color: red;
}`;  
  const codeString5 = `/* Pseudo-class Selector */
a:hover {
  text-decoration: underline;
}`;  
  const codeString6 = `/* Pseudo-element Selector */
p::first-line {
  font-weight: bold;
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Selector Types</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>CSS selectors are used to select and style the HTML elements on your web pages. Understanding the different types of selectors is crucial for effective CSS development. Here are the various types of selectors in CSS:</p>

        <h4 className='text-xl font-semibold'>Element Selector</h4>
        <p>The element selector targets HTML elements by their tag name. This selector applies styles to all instances of the specified element.</p>
        <Snippet codeString={codeString1} lang={'css'} title={'CSS'} />
        <p>In this example, the <span className='code'>p</span> selector targets all paragraph elements, applying a blue color to the text.</p>

        <h4 className='text-xl font-semibold'>Class Selector</h4>
        <p>The class selector targets elements with a specific class attribute. Class selectors are defined with a period <span className='code'>.</span> followed by the class name.</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />
        <p>In this example, the <span className='code'>.intro</span> selector targets all elements with the class <span className='code'>intro</span>, applying a font size of 18px and green color to the text.</p>

        <h4 className='text-xl font-semibold'>ID Selector</h4>
        <p>The ID selector targets a single, unique element with a specific ID attribute. ID selectors are defined with a hash symbol <span className='code'>#</span> followed by the ID name.</p>
        <Snippet codeString={codeString3} lang={'css'} title={'CSS'} />
        <p>In this example, the <span className='code'>#header</span> selector targets the element with the ID <span className='code'>header</span>, applying background color, padding, and other styles.</p>

        <h4 className='text-xl font-semibold'>Attribute Selector</h4>
        <p>The attribute selector targets elements based on the presence or value of their attributes. Attribute selectors are defined with square brackets <span className='code'>[]</span> containing the attribute name or value.</p>
        <Snippet codeString={codeString4} lang={'css'} title={'CSS'} />
        <p>In this example, the <span className='code'>a[target=&quot;_blank&quot;]</span> selector targets all anchor elements with a <span className='code'>target</span> attribute value of <span className='code'>_blank</span>, applying a red color to the text.</p>

        <h4 className='text-xl font-semibold'>Pseudo-class Selector</h4>
        <p>The pseudo-class selector targets elements in a specific state or condition, such as when they are hovered over or visited. Pseudo-classes are defined with a colon <span className='code'>:</span> followed by the pseudo-class name.</p>
        <Snippet codeString={codeString5} lang={'css'} title={'CSS'} />
        <p>In this example, the <span className='code'>a:hover</span> selector targets all anchor elements when they are hovered over, applying an underline text decoration.</p>

        <h4 className='text-xl font-semibold'>Pseudo-element Selector</h4>
        <p>The pseudo-element selector targets specific parts of an element, such as the first line or first letter. Pseudo-elements are defined with two colons <span className='code'>::</span> followed by the pseudo-element name.</p>
        <Snippet codeString={codeString6} lang={'css'} title={'CSS'} />
        <p>In this example, the <span className='code'>p::first-line</span> selector targets the first line of all paragraph elements, applying bold font weight to the text.</p>

        <h4 className='text-xl font-semibold'>Combining Selectors</h4>
        <p>Selectors can be combined to create more specific targets. For example, combining class and element selectors can apply styles to elements with a specific class.</p>
        <Snippet codeString={`/* Combined Selector */
p.intro {
  color: purple;
  font-size: 20px;
};`} lang={'css'} title={'CSS'} />
        <p>In this example, the <span className='code'>p.intro</span> selector targets all paragraph elements with the class <span className='code'>intro</span>, applying a purple color and a font size of 20px to the text.</p>

        <h4 className='text-xl font-semibold'>Best Practices for Using Selectors</h4>

        <h5 className='text-lg font-semibold'>Specificity</h5>
        <p>Understand the specificity hierarchy: ID selectors have the highest specificity, followed by class selectors, and then element selectors. Combining selectors increases specificity.</p>

        <h5 className='text-lg font-semibold'>Avoid Overly Specific Selectors</h5>
        <p>Avoid making selectors overly specific as it can make your CSS harder to maintain and override. Strive for a balance between specificity and simplicity.</p>

        <h5 className='text-lg font-semibold'>Consistency</h5>
        <p>Maintain consistency in your use of selectors throughout your CSS to create a cohesive and understandable codebase.</p>

        <p>By mastering CSS selectors, you can efficiently style your web pages and create complex and specific styling rules. Use these selector types and best practices to enhance the design and maintainability of your web projects.</p>
      </article>
    </div>
  );
}

export default Tutorial;
