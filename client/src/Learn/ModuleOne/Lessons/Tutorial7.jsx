import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`;
  const codeString2 = `<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`;
  const codeString3 = `<ul>
  <li>First item
    <ul>
      <li>Subitem 1</li>
      <li>Subitem 2</li>
    </ul>
  </li>
  <li>Second item</li>
</ul>`;
  const codeString4 = `<ol>
  <li>First item
    <ol>
      <li>Subitem 1</li>
      <li>Subitem 2</li>
    </ol>
  </li>
  <li>Second item</li>
</ol>`;
  const codeString5 = `<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2</dt>
  <dd>Definition 2</dd>
</dl>`;
  const codeString6 = `ul.custom-list {
  list-style-type: square; /* Changes bullet points to squares */
  padding-left: 20px; /* Adds padding to the left of the list */
}

ol.custom-list {
  list-style-type: upper-roman; /* Changes numbers to upper Roman numerals */
  padding-left: 20px; /* Adds padding to the left of the list */
}

.custom-list li {
  color: #333; /* Changes the text color of list items */
  margin-bottom: 10px; /* Adds space between list items */
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>List Creation</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Lists are a great way to organize content on a web page. HTML supports three types of lists: unordered lists, ordered lists, and definition lists. Here’s how to create each type of list:</p>

        <h4 className='text-xl font-semibold'>Unordered Lists</h4>
        <p>An unordered list is used to group a set of items in a list with bullet points. The list is created using the <span className='code'>&lt;ul&gt;</span> element, and each item within the list is placed within a <span className='code'>&lt;li&gt;</span> element.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Ordered Lists</h4>
        <p>An ordered list is used to group a set of items in a list with numbers. The list is created using the <span className='code'>&lt;ol&gt;</span> element, and each item within the list is placed within a <span className='code'>&lt;li&gt;</span> element.</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Nested Lists</h4>
        <p>Lists can be nested within other lists to create sublists. This is useful for creating hierarchies or nested structures. You can nest both unordered and ordered lists.</p>
        
        <h5 className='text-lg font-semibold'>Nested Unordered List</h5>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Nested Ordered List</h5>
        <Snippet codeString={codeString4} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Definition Lists</h4>
        <p>A definition list is used to display a list of terms and their definitions. The list is created using the <span className='code'>&lt;dl&gt;</span> element. Each term is wrapped in a <span className='code'>&lt;dt&gt;</span> element, and each definition is wrapped in a <span className='code'>&lt;dd&gt;</span> element.</p>
        <Snippet codeString={codeString5} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Styling Lists with CSS</h4>
        <p>You can style lists using CSS to change their appearance. Common styles include removing the default list markers, changing the marker type, and adding custom styles to the list items.</p>
        <Snippet codeString={codeString6} lang={'css'} title={'CSS'} />

        <p>By using these techniques, you can effectively organize and present information in your web pages using lists. Proper use of lists enhances the readability and accessibility of your content.</p>
      </article>
    </div>
  );
}

export default Tutorial;
