import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Variable Utilization</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>
</html>`;

  const codeString2 = `/* styles.css */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

.container {
  display: flex;
  justify-content: space-around;
}

.box {
  width: 100px;
  height: 100px;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}`;

  const codeString3 = `/* Using custom variables with media queries */
@media (max-width: 600px) {
  .box {
    background-color: var(--secondary-color);
  }
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Custom Variable Utilization</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Custom CSS variables allow you to define reusable values that can be used throughout your CSS stylesheets. This provides flexibility and makes it easier to update styles consistently across your project.</p>

        <h4 className='text-xl font-semibold'>HTML Structure</h4>
        <p>The following HTML structure includes a container with several boxes:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Defining Custom Variables</h4>
        <p>Custom variables are defined using the <code>:root</code> pseudo-class. Here, we define two variables for primary and secondary colors:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Using Custom Variables</h4>
        <p>Custom variables can be used throughout your CSS stylesheets by referencing them with the <code>var()</code> function. Here, we use the <code>--primary-color</code> variable as the background color of the boxes:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Custom Variables with Media Queries</h4>
        <p>You can also use custom variables within media queries to create responsive designs. Here, we change the background color of the boxes to the secondary color on smaller screens:</p>
        <Snippet codeString={codeString3} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>Custom CSS variables provide a convenient way to manage and reuse values across your stylesheets. By defining variables for colors, sizes, and other properties, you can create more maintainable and flexible CSS code.</p>
      </article>
    </div>
  );
}

export default Tutorial;
