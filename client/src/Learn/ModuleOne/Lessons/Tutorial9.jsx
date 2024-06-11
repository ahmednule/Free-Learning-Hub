import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<style>
  body {
    background-color: #f0f0f0; /* Light gray background */
    color: #333; /* Dark gray text */
  }
  h1 {
    color: #4CAF50; /* Green */
  }
  p {
    color: rgb(100, 100, 100); /* Gray using RGB */
  }
  .highlight {
    color: hsl(200, 100%, 50%); /* Bright blue using HSL */
  }
</style>`;
  const codeString2 = `<p style="color: #FF5733;">This is an inline styled text with a hex color.</p>`;
  const codeString3 = `<p class="highlight">This text uses a class with an HSL color.</p>`;
  const codeString4 = `<p class="highlight" style="color: #FF5733;">This text combines class and inline styling.</p>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Color Selection</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Color selection in HTML and CSS is crucial for creating visually appealing and accessible web pages. Here&apos;s how to define and use colors effectively:</p>

        <h4 className='text-xl font-semibold'>Defining Colors</h4>
        <p>Colors in CSS can be defined using several formats: named colors, hexadecimal values, RGB, RGBA, HSL, and HSLA. Here are some examples:</p>
        
        <h5 className='text-lg font-semibold'>Hexadecimal Colors</h5>
        <p>Hexadecimal values are one of the most common ways to define colors in CSS. They start with a hash symbol (<span className='code'>#</span>) followed by six characters (0-9, A-F) representing the red, green, and blue components of the color.</p>
        <Snippet codeString={`color: #FF5733; /* Bright red-orange */`} lang={'css'} title={'CSS'} />
        
        <h5 className='text-lg font-semibold'>RGB Colors</h5>
        <p>RGB values define colors using the red, green, and blue components, with values ranging from 0 to 255.</p>
        <Snippet codeString={`color: rgb(100, 100, 100); /* Gray */`} lang={'css'} title={'CSS'} />
        
        <h5 className='text-lg font-semibold'>HSL Colors</h5>
        <p>HSL values define colors using hue, saturation, and lightness. Hue is an angle (0-360), saturation is a percentage (0-100%), and lightness is also a percentage (0-100%).</p>
        <Snippet codeString={`color: hsl(200, 100%, 50%); /* Bright blue */`} lang={'css'} title={'CSS'} />
        
        <h5 className='text-lg font-semibold'>RGBA and HSLA Colors</h5>
        <p>RGBA and HSLA values are similar to RGB and HSL but include an alpha channel for opacity. The alpha value ranges from 0 (completely transparent) to 1 (completely opaque).</p>
        <Snippet codeString={`color: rgba(255, 87, 51, 0.5); /* Semi-transparent bright red-orange */`} lang={'css'} title={'CSS'} />
        <Snippet codeString={`color: hsla(200, 100%, 50%, 0.5); /* Semi-transparent bright blue */`} lang={'css'} title={'CSS'} />
        
        <h4 className='text-xl font-semibold'>Applying Colors</h4>
        <p>Colors can be applied to HTML elements using inline styles, internal styles, and external styles. Here are some examples:</p>
        
        <h5 className='text-lg font-semibold'>Inline Styles</h5>
        <p>Inline styles are applied directly to HTML elements using the <span className='code'>style</span> attribute.</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>Internal Styles</h5>
        <p>Internal styles are defined within the <span className='code'>&lt;style&gt;</span> element in the <span className='code'>&lt;head&gt;</span> section of an HTML document.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        
        <h5 className='text-lg font-semibold'>External Styles</h5>
        <p>External styles are defined in a separate CSS file and linked to the HTML document using the <span className='code'>&lt;link&gt;</span> element.</p>
        <Snippet codeString={`<link rel="stylesheet" href="styles.css">`} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Combining Styles</h4>
        <p>Styles can be combined to create more specific and flexible designs. For example, you can use class selectors and inline styles together.</p>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        <Snippet codeString={codeString4} lang={'html'} title={'HTML'} />
        
        <h4 className='text-xl font-semibold'>Best Practices for Color Selection</h4>
        <p>When selecting colors, consider the following best practices:</p>
        
        <h5 className='text-lg font-semibold'>Contrast and Readability</h5>
        <p>Ensure sufficient contrast between text and background colors to enhance readability. Use tools like <a className='linkOne' href="https://webaim.org/resources/contrastchecker/">WebAIM&apos;s Contrast Checker</a> to verify contrast ratios.</p>
        
        <h5 className='text-lg font-semibold'>Color Accessibility</h5>
        <p>Consider users with color vision deficiencies. Avoid relying solely on color to convey information. Use text labels, patterns, or icons in addition to color.</p>
        
        <h5 className='text-lg font-semibold'>Consistent Color Scheme</h5>
        <p>Maintain a consistent color scheme throughout your website to create a cohesive and professional look. Use a limited palette of colors that complement each other well.</p>
        
        <h5 className='text-lg font-semibold'>Brand Colors</h5>
        <p>Incorporate brand colors to reinforce brand identity. Use brand guidelines to ensure consistent use of colors across different platforms.</p>

        <p>By understanding and applying these techniques and best practices, you can create visually appealing and accessible web pages. Effective use of color enhances the user experience and supports your website&apos;s overall design goals.</p>
      </article>
    </div>
  );
}

export default Tutorial;
