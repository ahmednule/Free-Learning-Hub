import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `/* Define Grid Container */
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Three columns with flexible widths */
  grid-template-rows: auto; /* Automatically sized rows */
  gap: 20px; /* Gap between grid items */
}

/* Style Grid Items */
.item {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
}`;

  const codeString2 = `<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Grid Layout Design</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>CSS Grid layout provides a powerful way to design flexible and responsive layouts for web pages. Let&apos;s dive into how to create grid layouts using CSS:</p>

        <h4 className='text-xl font-semibold'>Define Grid Container</h4>
        <p>To create a grid layout, first, define a grid container by setting its display property to <span className='code'>grid</span>. Specify the number and size of grid columns and rows using <span className='code'>grid-template-columns</span> and <span className='code'>grid-template-rows</span> properties. You can also define the gap between grid items using the <span className='code'>gap</span> property.</p>
        <Snippet codeString={codeString1} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Style Grid Items</h4>
        <p>Next, style the grid items within the container. You can apply styles such as background color, padding, border-radius, etc., to customize the appearance of grid items.</p>

        <h4 className='text-xl font-semibold'>Usage Example</h4>
        <p>Here&apos;s an example of how to use CSS Grid to create a simple layout with three columns:</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />

        <p>With these CSS styles and HTML structure, you can create a grid layout with three evenly spaced columns and styled grid items.</p>

        <h4 className='text-xl font-semibold'>Benefits of Grid Layout Design</h4>
        <ul className='list-disc list-inside'>
          <li>Flexible and responsive layout creation.</li>
          <li>Supports complex grid structures with ease.</li>
          <li>Reduces the need for additional CSS frameworks or libraries.</li>
          <li>Improves code maintainability and readability.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Best Practices for Grid Layouts</h4>
        <ul className='list-disc list-inside'>
          <li>Plan your grid structure before implementation.</li>
          <li>Use grid area names for better readability.</li>
          <li>Combine CSS Grid with other layout techniques like Flexbox for more complex designs.</li>
          <li>Test grid layouts across different screen sizes for responsiveness.</li>
        </ul>

        <p>By mastering CSS Grid layout design, you can create visually appealing and responsive layouts for your web projects, enhancing user experience and usability.</p>
      </article>
    </div>
  );
}

export default Tutorial;
