import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>`;
  const codeString2 = `<video width="560" height="315" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`;
  const codeString3 = `<video width="560" height="315" controls>
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video tag.
</video>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Video Embedding</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Embedding videos into your web pages allows you to enrich your content with multimedia elements. There are multiple ways to embed videos, depending on the source and format of the video.</p>

        <h4 className='text-xl font-semibold'>YouTube Videos</h4>
        <p>To embed YouTube videos, you can use the <span className='code'>&lt;iframe&gt;</span> tag with the video&apos;s embed URL:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>HTML5 Video</h4>
        <p>You can also embed videos directly into your web pages using HTML5 video elements. Provide multiple video formats for broader browser compatibility:</p>
        
        <h5 className='text-lg font-semibold'>MP4 Format</h5>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>WebM Format</h5>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        
        <p>Ensure to include a fallback message for browsers that do not support the video tag, informing users to upgrade their browsers or providing alternative content.</p>
        
        <h4 className='text-xl font-semibold'>Video Controls</h4>
        <p>Adding the <span className='code'>controls</span> attribute to the video element enables standard video playback controls (play, pause, volume, etc.), allowing users to interact with the video.</p>
        
        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>Embedding videos enhances user engagement and provides valuable visual content to your web pages. By leveraging platforms like YouTube or directly embedding HTML5 video elements, you can effectively integrate videos into your website.</p>
      </article>
    </div>
  );
}

export default Tutorial;
