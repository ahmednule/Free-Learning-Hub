import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<div class="iframe-container">
  <iframe src="https://www.example.com" title="Embedded Content" frameborder="0" width="100%" height="400"></iframe>
</div>`;

  const codeString2 = `<style>
  .iframe-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%; /* 16:9 aspect ratio */
  }
  .iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Iframe Embedding</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Learn how to embed external content seamlessly into your web pages using iframes:</p>

        <h2 className='text-xl font-semibold'>Introduction to Iframes</h2>
        <p>An <strong>iframe</strong> (short for inline frame) is an HTML element used to embed another document within the current HTML document. It allows you to display content from another source, such as a web page or media file, directly within your own web page.</p>

        <h2 className='text-xl font-semibold'>Basic Iframe Syntax</h2>
        <p>Embed external content with the <code>&lt;iframe&gt;</code> tag:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h2 className='text-xl font-semibold'>Making Iframes Responsive</h2>
        <p>Ensure iframes adapt to different screen sizes using CSS:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h2 className='text-xl font-semibold'>Understanding Responsive Styles</h2>
        <p>Break down the CSS applied for responsive iframes:</p>
        <ul className='list-disc list-inside'>
          <li><span className='code'>.iframe-container</span>: Creates a responsive container with padding-top maintaining the aspect ratio.</li>
          <li><span className='code'>iframe</span>: Absolute positioning within the container, filling it completely.</li>
        </ul>

        <h2 className='text-xl font-semibold'>Additional Attributes</h2>
        <p>Explore attributes like <code>allowfullscreen</code> or <code>sandbox</code> for enhanced functionality and security.</p>

        <h2 className='text-xl font-semibold'>Security Measures</h2>
        <p>Prioritize security by implementing measures like <code>sandboxing</code> to prevent malicious attacks.</p>

        <h2 className='text-xl font-semibold'>Use Cases</h2>
        <p>Utilize iframes for embedding maps, videos, social media widgets, or external web pages.</p>

        <h2 className='text-xl font-semibold'>Advanced Techniques</h2>
        <p>Explore advanced techniques like communication between parent and child documents or dynamic iframe resizing for enhanced interactivity.</p>
      </article>
    </div>
  );
}

export default Tutorial;
