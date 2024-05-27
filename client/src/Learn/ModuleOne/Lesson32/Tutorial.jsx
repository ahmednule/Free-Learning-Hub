import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animations</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="animation-container">
    <div class="box"></div>
    <div class="text">Hello, world!</div>
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

.animation-container {
  text-align: center;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-150px);
  }
  60% {
    transform: translateY(-75px);
  }
}

.text {
  margin-top: 20px;
  font-size: 1.5rem;
  color: #333;
  animation: fadeIn 3s ease-in-out 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>CSS Animations</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>CSS animations make it possible to animate transitions from one CSS style to another. Animations consist of two components: keyframes and animation properties. Keyframes define the start and end points of the animation, along with possible intermediate waypoints, while animation properties define how the animation behaves.</p>

        <h4 className='text-xl font-semibold'>HTML Structure</h4>
        <p>The following HTML structure includes a container with a box and a text element to demonstrate animations:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>CSS Styles with Animations</h4>
        <p>The following CSS styles demonstrate how to create and apply animations to the box and text elements:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Explanation of Animations</h4>
        <p>Let&apos;s break down the animations used in the example:</p>
        <ul className='list-disc ml-6'>
          <li><strong>@keyframes bounce</strong> - Defines the bounce animation for the box. The keyframes specify the changes in the transform property at different points of the animation timeline.</li>
          <li><strong>animation: bounce 2s infinite</strong> - Applies the bounce animation to the box, running it for 2 seconds and repeating it infinitely.</li>
          <li><strong>@keyframes fadeIn</strong> - Defines the fade-in animation for the text. The keyframes specify the changes in the opacity property from 0 to 1.</li>
          <li><strong>animation: fadeIn 3s ease-in-out 1</strong> - Applies the fade-in animation to the text, running it for 3 seconds with an ease-in-out timing function, and running it once.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Additional Animation Properties</h4>
        <p>Here are some additional properties you can use to customize your animations:</p>
        <ul className='list-disc ml-6'>
          <li><strong>animation-delay</strong> - Specifies a delay before the animation starts.</li>
          <li><strong>animation-direction</strong> - Specifies whether the animation should play in reverse on alternate cycles.</li>
          <li><strong>animation-duration</strong> - Specifies how long the animation takes to complete one cycle.</li>
          <li><strong>animation-iteration-count</strong> - Specifies the number of times the animation should repeat.</li>
          <li><strong>animation-timing-function</strong> - Specifies the speed curve of the animation.</li>
          <li><strong>animation-fill-mode</strong> - Specifies how a CSS animation applies styles to its target before and after it is executing.</li>
        </ul>
        <Snippet codeString={`/* Example of additional animation properties */
.text-delayed {
  animation: fadeIn 3s ease-in-out 1;
  animation-delay: 2s;
  animation-direction: alternate;
  animation-iteration-count: 2;
  animation-fill-mode: forwards;
}`} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>CSS animations provide a way to create visually engaging and interactive web pages. By defining keyframes and using animation properties, you can bring your elements to life with a variety of effects.</p>
      </article>
    </div>
  );
}

export default Tutorial;
