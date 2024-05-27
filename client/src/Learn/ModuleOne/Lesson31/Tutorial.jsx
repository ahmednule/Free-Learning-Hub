import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Filter Effects</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="filter-container">
    <img src="example.jpg" alt="Example Image" class="filter-img">
    <p class="filter-text">This is some text with filter effects applied.</p>
  </div>
</body>
</html>`;

  const codeString2 = `/* styles.css */
.filter-container {
  text-align: center;
  margin-top: 50px;
}

.filter-img {
  width: 300px;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
}

.filter-img:hover {
  filter: grayscale(0%);
}

.filter-text {
  font-size: 1.5rem;
  color: black;
  filter: blur(0);
  transition: filter 0.3s ease-in-out;
}

.filter-text:hover {
  filter: blur(2px);
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>CSS Filter Effects</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>CSS filters allow you to apply graphical effects like blurring, color shifting, and more to elements. These can be applied to images, text, and other elements to enhance your web design.</p>

        <h4 className='text-xl font-semibold'>HTML Structure</h4>
        <p>The following HTML structure includes an image and a paragraph for demonstrating filter effects:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>CSS Styles with Filter Effects</h4>
        <p>The following CSS styles demonstrate various filter effects applied to the image and text:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Explanation of Filter Effects</h4>
        <p>Let&apos;s break down the filter effects used in the example:</p>
        <ul className='list-disc ml-6'>
          <li><strong>grayscale()</strong> - Converts the image to grayscale. A value of 100% means full grayscale.</li>
          <li><strong>blur()</strong> - Applies a blur effect. The value defines the radius of the blur in pixels.</li>
          <li><strong>transition</strong> - Adds a smooth transition effect for the filter properties when the elements are hovered over.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Additional Filter Functions</h4>
        <p>There are several other filter functions you can use:</p>
        <ul className='list-disc ml-6'>
          <li><strong>brightness()</strong> - Adjusts the brightness of the element.</li>
          <li><strong>contrast()</strong> - Adjusts the contrast of the element.</li>
          <li><strong>drop-shadow()</strong> - Adds a drop shadow effect to the element.</li>
          <li><strong>hue-rotate()</strong> - Rotates the hue of the element&apos;s colors.</li>
          <li><strong>invert()</strong> - Inverts the colors of the element.</li>
          <li><strong>opacity()</strong> - Adjusts the transparency of the element.</li>
          <li><strong>saturate()</strong> - Adjusts the saturation of the element&apos;s colors.</li>
          <li><strong>sepia()</strong> - Applies a sepia tone to the element.</li>
        </ul>
        <Snippet codeString={`/* Example of multiple filters */
.filter-complex {
  filter: brightness(150%) contrast(120%) sepia(80%);
}`} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>CSS filters provide a powerful way to enhance your web elements with visual effects. By using different filter functions, you can create a variety of interesting and dynamic styles for images, text, and other elements on your web page.</p>
      </article>
    </div>
  );
}

export default Tutorial;
