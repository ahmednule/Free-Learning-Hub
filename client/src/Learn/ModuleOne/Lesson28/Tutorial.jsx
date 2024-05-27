import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Transition Effects</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="box"></div>
</body>
</html>`;

  const codeString2 = `.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transition: width 2s, background-color 2s;
}

.box:hover {
  width: 200px;
  background-color: lightcoral;
}`;

  const codeString3 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiple Transition Properties</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <button class="btn">Hover me</button>
</body>
</html>`;

  const codeString4 = `.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.btn:hover {
  background-color: #45a049;
  transform: scale(1.1);
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>CSS Transition Effects</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>CSS transitions allow you to change property values smoothly (over a given duration) when an element changes state, such as when it is hovered over or clicked.</p>

        <h4 className='text-xl font-semibold'>Basic Transition</h4>
        <p>To create a transition effect, you need to specify two things in CSS: the property you want to add an effect to, and the duration of the effect.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <p>In this example, the <span className='code'>.box</span> class has a width and background-color transition applied. When the <span className='code'>.box</span> is hovered over, it changes width and background-color over a duration of 2 seconds.</p>

        <h4 className='text-xl font-semibold'>Multiple Transition Properties</h4>
        <p>You can transition multiple properties at the same time by specifying them in a comma-separated list.</p>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        <Snippet codeString={codeString4} lang={'css'} title={'CSS'} />

        <p>In this example, the <span className='code'>.btn</span> class has transitions for <span className='code'>background-color</span> and <span className='code'>transform</span>. When the button is hovered over, the background color changes and the button scales up smoothly over a duration of 0.3 seconds.</p>

        <h4 className='text-xl font-semibold'>Transition Timing Functions</h4>
        <p>CSS transitions can have different timing functions to control the acceleration of the effect. Common timing functions include:</p>
        <ul className='list-disc ml-6'>
          <li><span className='code'>ease</span> - Starts slowly, then fast, then ends slowly (default).</li>
          <li><span className='code'>linear</span> - Same speed from start to end.</li>
          <li><span className='code'>ease-in</span> - Starts slowly and accelerates.</li>
          <li><span className='code'>ease-out</span> - Starts quickly and decelerates.</li>
          <li><span className='code'>ease-in-out</span> - Starts slowly, accelerates, then decelerates.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>CSS transitions provide a simple way to animate changes in CSS properties, making your web pages more dynamic and interactive. By using different properties and timing functions, you can create a wide range of transition effects.</p>
      </article>
    </div>
  );
}

export default Tutorial;
