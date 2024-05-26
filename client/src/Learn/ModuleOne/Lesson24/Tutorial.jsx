import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>`;
  const codeString2 = `<svg width="200" height="100">
  <rect x="50" y="20" width="150" height="60" stroke="black" stroke-width="2" fill="blue" />
</svg>`;
  const codeString3 = `<svg width="200" height="100">
  <line x1="50" y1="20" x2="150" y2="80" stroke="black" stroke-width="2" />
</svg>`;
  const codeString4 = `<svg width="200" height="100">
  <polygon points="100,20 150,80 50,80" stroke="black" stroke-width="2" fill="green" />
</svg>`;
  const codeString5 = `<svg width="200" height="100">
  <path d="M50 20 L150 80 L250 20 Z" stroke="black" stroke-width="2" fill="yellow" />
</svg>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>SVG Graphics Integration</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Scalable Vector Graphics (SVG) is an XML-based markup language for describing two-dimensional graphics. SVG images can be scaled to any size without losing quality, making them ideal for responsive web design.</p>

        <h4 className='text-xl font-semibold'>Basic Shapes</h4>
        <p>SVG supports various basic shapes that you can use to create graphics:</p>
        
        <h5 className='text-lg font-semibold'>Circle</h5>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Rectangle</h5>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Line</h5>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Polygon</h5>
        <Snippet codeString={codeString4} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Path</h5>
        <Snippet codeString={codeString5} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Attributes</h4>
        <p>SVG elements have various attributes to control their appearance and behavior, such as <span className='code'>width</span>, <span className='code'>height</span>, <span className='code'>stroke</span>, <span className='code'>stroke-width</span>, and <span className='code'>fill</span>.</p>
        
        <h4 className='text-xl font-semibold'>Integration</h4>
        <p>To integrate SVG graphics into your web pages, you can directly include the SVG code within your HTML or use external SVG files. SVGs can be styled using CSS for further customization.</p>
        
        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>SVG graphics offer a flexible and scalable solution for creating high-quality images and icons on the web. By mastering SVG syntax and attributes, you can enhance the visual appeal and interactivity of your web pages.</p>
      </article>
    </div>
  );
}

export default Tutorial;
