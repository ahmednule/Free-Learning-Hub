import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Transformation Techniques</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="box">Box 1</div>
  </div>
</body>
</html>`;

  const codeString2 = `/* styles.css */
.container {
  perspective: 1000px;
}

.box {
  width: 200px;
  height: 200px;
  background-color: #3498db;
  color: white;
  text-align: center;
  line-height: 200px;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.box:hover {
  transform: rotateY(180deg);
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>3D Transformation Techniques</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>CSS provides powerful 3D transformation techniques that allow you to create engaging and interactive effects on web elements. By combining perspective, transforms, and transitions, you can create visually stunning experiences for users.</p>

        <h4 className='text-xl font-semibold'>HTML Structure</h4>
        <p>The following HTML structure includes a container with a box:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>CSS Styles</h4>
        <p>The following CSS styles demonstrate how to apply 3D transformations to the box:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Explanation of CSS Styles</h4>
        <p>Let&apos;s break down the CSS styles used in the example:</p>
        <ul className='list-disc ml-6'>
          <li><strong>perspective</strong> - Defines the perspective from which all child elements of the container are viewed. This creates a 3D space in which to position and transform elements.</li>
          <li><strong>transform-style: preserve-3d</strong> - Specifies that the child elements of the container should maintain their 3D position when transformed.</li>
          <li><strong>transition</strong> - Adds a smooth transition effect for the transform property when the box is hovered over.</li>
          <li><strong>transform: rotateY(180deg)</strong> - Rotates the box around the Y-axis by 180 degrees when hovered over, creating a flip effect.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Additional 3D Transformation Techniques</h4>
        <p>Other common 3D transformation techniques include <code>rotateX()</code>, <code>rotateZ()</code>, <code>scale3d()</code>, <code>translate3d()</code>, and more. Experiment with these transformations to create various effects.</p>

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>By leveraging CSS 3D transformation techniques, you can add depth and dimension to your web designs, enhancing user engagement and creating memorable experiences. Experiment with different transformations and combine them with transitions to create visually stunning effects.</p>
      </article>
    </div>
  );
}

export default Tutorial;
