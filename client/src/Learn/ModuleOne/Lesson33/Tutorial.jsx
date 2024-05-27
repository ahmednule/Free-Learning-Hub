import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Mastery</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
  </div>
</body>
</html>`;

  const codeString2 = `/* styles.css */
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 200px;
  background-color: #3498db;
}

.flex-item {
  background-color: #ecf0f1;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  flex: 1;
}`;

  const codeString3 = `/* More advanced flex properties */
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 400px;
}

.flex-item {
  flex: none;
}

.flex-item:nth-child(1) {
  order: 2;
}

.flex-item:nth-child(2) {
  order: 1;
}

.flex-item:nth-child(3) {
  order: 3;
}

.flex-item:nth-child(4) {
  flex-grow: 2;
}

.flex-item:nth-child(5) {
  flex-shrink: 2;
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Flexbox Mastery</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Flexbox is a powerful layout module that allows for flexible and responsive design. It provides an efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.</p>

        <h4 className='text-xl font-semibold'>HTML Structure</h4>
        <p>The following HTML structure includes a container with several flex items:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Basic Flexbox Properties</h4>
        <p>The following CSS styles demonstrate basic flexbox properties applied to the container and its items:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Explanation of Basic Flexbox Properties</h4>
        <p>Let&apso;s break down the basic flexbox properties used in the example:</p>
        <ul className='list-disc ml-6'>
          <li><strong>display: flex</strong> - Defines a flex container and enables flex context for all its direct children.</li>
          <li><strong>justify-content</strong> - Aligns flex items along the main axis. The value <span className='code'>space-around</span> distributes space evenly with equal space around each item.</li>
          <li><strong>align-items</strong> - Aligns flex items along the cross axis. The value <span className='code'>center</span> centers the items vertically within the container.</li>
          <li><strong>flex</strong> - A shorthand for flex-grow, flex-shrink, and flex-basis. Here, <span className='code'>flex: 1</span> means each item will grow to fill available space equally.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Advanced Flexbox Properties</h4>
        <p>The following CSS styles demonstrate more advanced flexbox properties:</p>
        <Snippet codeString={codeString3} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Explanation of Advanced Flexbox Properties</h4>
        <p>Let&apos;s break down the advanced flexbox properties used in the example:</p>
        <ul className='list-disc ml-6'>
          <li><strong>flex-direction</strong> - Defines the direction of the main axis. Here, <span className='code'>column</span> arranges the items vertically.</li>
          <li><strong>align-items: stretch</strong> - Stretches items to fill the container along the cross axis.</li>
          <li><strong>order</strong> - Specifies the order of flex items. Lower numbers appear first. For example, the second item appears first due to <span className='code'>order: 1</span>.</li>
          <li><strong>flex-grow</strong> - Defines the ability of a flex item to grow. The fourth item grows twice as much as other items.</li>
          <li><strong>flex-shrink</strong> - Defines the ability of a flex item to shrink. The fifth item shrinks twice as much as other items.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>Mastering flexbox allows you to create flexible and responsive layouts with ease. By understanding and applying both basic and advanced flexbox properties, you can efficiently manage the alignment, order, and distribution of elements within a container.</p>
      </article>
    </div>
  );
}

export default Tutorial;
