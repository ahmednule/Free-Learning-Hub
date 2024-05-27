import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Advanced CSS Selectors</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <ul class="nav">
    <li class="nav-item">Home</li>
    <li class="nav-item active">About</li>
    <li class="nav-item">Services</li>
    <li class="nav-item">Contact</li>
  </ul>

  <div class="container">
    <p class="highlight">This is a paragraph with a <span>span element</span>.</p>
    <p>This is another paragraph.</p>
    <p class="highlight">This is a highlighted paragraph.</p>
    <p>This is yet another paragraph with a <span>span element</span>.</p>
  </div>
</body>
</html>`;

  const codeString2 = `/* styles.css */
.nav-item:first-child {
  font-weight: bold;
}

.nav-item:last-child {
  color: red;
}

.nav-item:nth-child(2) {
  background-color: lightgray;
}

.highlight {
  background-color: yellow;
}

.highlight + p {
  color: green;
}

.container > p:nth-of-type(2) {
  font-size: 1.5rem;
}

span {
  color: blue;
}

p > span {
  font-weight: bold;
}

p:not(.highlight) {
  text-decoration: underline;
}

.nav-item.active ~ .nav-item {
  background-color: lightblue;
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Advanced CSS Selectors</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>CSS selectors are used to select and style elements on a web page. Beyond the basic selectors, there are advanced selectors that allow for more precise and powerful targeting of HTML elements. Here are some examples of advanced CSS selectors:</p>

        <h4 className='text-xl font-semibold'>HTML Structure</h4>
        <p>The following HTML structure will be used to demonstrate various advanced CSS selectors:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>CSS Styles with Advanced Selectors</h4>
        <p>The following CSS styles demonstrate various advanced selectors:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Explanation of Advanced Selectors</h4>
        <p>Let&apos;s break down some of the advanced selectors used in the example:</p>
        <ul className='list-disc ml-6'>
          <li><strong>:first-child</strong> - Selects the first child of its parent. In this case, it makes the first <span className='code'>.nav-item</span> bold.</li>
          <li><strong>:last-child</strong> - Selects the last child of its parent. Here, it colors the last <span className='code'>.nav-item</span> red.</li>
          <li><strong>:nth-child(n)</strong> - Selects the nth child of its parent. The second <span className='code'>.nav-item</span> gets a light gray background.</li>
          <li><strong>+</strong> - Selects the next sibling element. The paragraph following a <span className='code'>.highlight</span> class is colored green.</li>
          <li><strong>&gt;</strong> - Selects direct children. The second paragraph of the <span className='code'>.container</span> gets a larger font size.</li>
          <li><strong>:nth-of-type(n)</strong> - Selects the nth child of its type. The second <span className='code'>p</span> tag within <span className='code'>.container</span> gets a larger font size.</li>
          <li><strong>:not()</strong> - Selects elements that do not match the selector inside the parentheses. Paragraphs not having the <span className='code'>.highlight</span> class are underlined.</li>
          <li><strong>~</strong> - Selects subsequent siblings. The <span className='code'>.nav-item</span> siblings following the active item have a light blue background.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>Advanced CSS selectors provide powerful tools for selecting and styling HTML elements with great precision. By mastering these selectors, you can create more sophisticated and dynamic web page designs.</p>
      </article>
    </div>
  );
}

export default Tutorial;
