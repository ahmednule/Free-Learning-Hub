import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<iframe src="https://www.example.com"></iframe>`;
  const codeString2 = `<iframe src="https://www.example.com" width="600" height="400"></iframe>`;
  const codeString3 = `<iframe src="https://www.example.com" scrolling="no"></iframe>`;
  const codeString4 = `<iframe src="https://www.example.com" frameborder="0"></iframe>`;
  const codeString5 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Embedding Iframes</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>An iframe, or inline frame, is an HTML element used to embed another document within the current HTML document. This allows you to display content from other websites or resources directly on your webpage.</p>

        <h4 className='text-xl font-semibold'>Basic Syntax</h4>
        <p>To embed an iframe, you use the <span className='code'>&lt;iframe&gt;</span> tag with the <span className='code'>src</span> attribute specifying the URL of the content you want to embed.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Customizing Iframe Attributes</h4>
        <p>You can customize various attributes of the iframe to control its appearance and behavior:</p>
        
        <h5 className='text-lg font-semibold'>Width and Height</h5>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Scrolling</h5>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Border</h5>
        <Snippet codeString={codeString4} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Embedding Videos</h5>
        <p>One common use case for iframes is embedding videos from platforms like YouTube or Vimeo. Simply paste the embed code provided by the platform into the iframe tag:</p>
        <Snippet codeString={codeString5} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Security Considerations</h4>
        <p>When embedding content from external sources, ensure that you trust the source to prevent security risks such as cross-site scripting (XSS) attacks.</p>
        
        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>Iframes are a versatile tool for integrating external content into your website. By understanding how to use iframes effectively and responsibly, you can enhance the user experience and add valuable functionality to your web pages.</p>
      </article>
    </div>
  );
}

export default Tutorial;
