import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<img src="image.jpg" alt="Description of image">`;
  const codeString2 = `<img src="https://www.example.com/image.jpg" alt="Description of image">`;
  const codeString3 = `<img src="image.jpg" alt="Description of image" width="600" height="400">`;
  const codeString4 = `<img src="image.jpg" alt="Description of image" class="responsive">`;
  const codeString5 = `.responsive {
  width: 100%;
  height: auto;
}`
  const codeString6 = `<picture>
  <source media="(min-width: 650px)" srcset="image-large.jpg">
  <source media="(min-width: 465px)" srcset="image-medium.jpg">
  <img src="image.jpg" alt="Description of image">
</picture>`;
  const codeString7 = `<img src="image.jpg" alt="Description of image" loading="lazy">`;
  const codeString8 = `<figure>
  <img src="image.jpg" alt="Description of image">
  <figcaption>Caption for the image</figcaption>
</figure>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Image Embedding</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Embedding images in HTML allows you to enhance your web pages with visual content. Here&apos;s how to embed images using HTML:</p>
        
        <h4 className='text-xl font-semibold'>Basic Image Embedding</h4>
        <p>The basic syntax for embedding an image is to use the <span className='code'>&lt;img&gt;</span> element with the <span className='code'>src</span> attribute to specify the image source and the <span className='code'>alt</span> attribute to provide alternative text for accessibility and SEO purposes. The <span className='code'>alt</span> text is crucial as it describes the image for users who cannot see it.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Embedding External Images</h4>
        <p>You can also embed images hosted on external websites by providing the full URL in the <span className='code'>src</span> attribute. This allows you to include images from other sources in your web page, useful when you want to use images hosted on a CDN or another server.</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Setting Image Dimensions</h4>
        <p>You can control the size of the embedded image by using the <span className='code'>width</span> and <span className='code'>height</span> attributes. This specifies the width and height of the image in pixels. However, it&apos;s often better to control image dimensions using CSS for more flexibility and responsiveness.</p>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Responsive Images</h4>
        <p>To ensure images are responsive and adapt to different screen sizes, you can use CSS classes. Here, we add a class <span className='code'>responsive</span> to the image, which can be defined in your CSS to make the image scale appropriately. A typical responsive image style in CSS might look like this:</p>
        <Snippet codeString={codeString4} lang={'html'} title={'HTML'} />
        <Snippet codeString={codeString5} lang={'css'} title={'CSS'} />
        
        <h4 className='text-xl font-semibold'>Using the &lt;picture&gt; Element</h4>
        <p>The <span className='code'>&lt;picture&gt;</span> element provides more control over which image resource to load based on different conditions, such as screen size. This is useful for responsive design, allowing you to serve different images to different devices.</p>
        <Snippet codeString={codeString6} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Lazy Loading Images</h4>
        <p>Lazy loading defers the loading of images until they are about to enter the viewport. This can improve page load times and performance, especially on pages with many images. You can enable lazy loading by adding the <span className='code'>loading=&quot;lazy&quot;</span> attribute to your <span className='code'>&lt;img&gt;</span> tags.</p>
        <Snippet codeString={codeString7} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Adding Captions to Images</h4>
        <p>To provide additional context or description for an image, you can use the <span className='code'>&lt;figure&gt;</span> and <span className='code'>&lt;figcaption&gt;</span> elements. The <span className='code'>&lt;figure&gt;</span> element is used to group the image and its caption together.</p>
        <Snippet codeString={codeString8} lang={'html'} title={'HTML'} />
        
        <p>By using these techniques, you can create a rich and engaging visual experience on your web pages. Properly embedding and optimizing images is essential for performance, accessibility, and SEO.</p>
      </article>
    </div>
  );
}

export default Tutorial;
