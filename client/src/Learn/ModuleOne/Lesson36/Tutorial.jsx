import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pseudo-element Utilization</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="box">Box</div>
  </div>
</body>
</html>`;

  const codeString2 = `/* styles.css */
.box {
  width: 200px;
  height: 200px;
  background-color: #3498db;
  color: white;
  text-align: center;
  line-height: 200px;
}

.box::before {
  content: '';
  display: block;
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Pseudo-element Utilization</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>CSS pseudo-elements allow you to style certain parts of an element without adding extra markup to your HTML. Pseudo-elements, such as <code>::before</code> and <code>::after</code>, create virtual elements that can be styled independently from the main element.</p>

        <h4 className='text-xl font-semibold'>HTML Structure</h4>
        <p>The following HTML structure includes a container with a box:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>CSS Styles</h4>
        <p>The following CSS styles demonstrate how to use a pseudo-element to add a decorative element to the box:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Explanation of CSS Styles</h4>
        <p>Let&apos;s break down the CSS styles used in the example:</p>
        <ul className='list-disc ml-6'>
          <li><strong>::before</strong> - Creates a pseudo-element that is inserted before the content of the selected element.</li>
          <li><strong>content</strong> - Specifies the content to be inserted before the element. Here, an empty string is used to create an empty pseudo-element.</li>
          <li><strong>display: block</strong> - Specifies that the pseudo-element should be displayed as a block-level element.</li>
          <li><strong>position: absolute</strong> - Positions the pseudo-element relative to its containing block, which in this case is the nearest positioned ancestor.</li>
          <li><strong>top, left</strong> - Positions the pseudo-element at 50% of the container&apos;s width and height, relative to the container.</li>
          <li><strong>transform: translate(-50%, -50%)</strong> - Translates the pseudo-element by -50% of its own width and height, effectively centering it within the container.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>Pseudo-elements provide a powerful way to enhance the styling of elements in CSS without cluttering your HTML with additional markup. By leveraging pseudo-elements such as <code>::before</code> and <code>::after</code>, you can create decorative elements, icons, and more with ease.</p>
      </article>
    </div>
  );
}

export default Tutorial;
