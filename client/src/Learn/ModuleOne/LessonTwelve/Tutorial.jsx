import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<style>
  .font-family {
    font-family: 'Arial, sans-serif';
  }
  .font-size {
    font-size: 20px;
  }
  .font-weight {
    font-weight: bold;
  }
  .font-style {
    font-style: italic;
  }
  .line-height {
    line-height: 1.5;
  }
  .letter-spacing {
    letter-spacing: 2px;
  }
  .text-transform {
    text-transform: uppercase;
  }
</style>`;
  const codeString2 = `<div class="font-family">This text uses Arial font.</div>`;
  const codeString3 = `<div class="font-size">This text has a font size of 20px.</div>`;
  const codeString4 = `<div class="font-weight">This text is bold.</div>`;
  const codeString5 = `<div class="font-style">This text is italic.</div>`;
  const codeString6 = `<div class="line-height">This text has a line height of 1.5.</div>`;
  const codeString7 = `<div class="letter-spacing">This text has a letter spacing of 2px.</div>`;
  const codeString8 = `<div class="text-transform">This text is uppercase.</div>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Font Styling</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Font styling in CSS allows you to control the appearance of text on your web pages. By using various CSS properties, you can set the font family, size, weight, style, line height, letter spacing, and text transformation. Here&apos;s how you can style fonts using CSS:</p>

        <h4 className='text-xl font-semibold'>Font Family</h4>
        <p>The <span className='code'>font-family</span> property specifies the typeface for text. You can provide a list of fonts to ensure a fallback if the preferred font is not available.</p>
        <Snippet codeString={codeString1} lang={'css'} title={'CSS'} />
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Font Size</h4>
        <p>The <span className='code'>font-size</span> property sets the size of the text. You can use different units like pixels (px), em, rem, percentages, etc.</p>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Font Weight</h4>
        <p>The <span className='code'>font-weight</span> property sets the thickness of the text. Common values are normal, bold, and numeric values ranging from 100 to 900.</p>
        <Snippet codeString={codeString4} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Font Style</h4>
        <p>The <span className='code'>font-style</span> property sets the style of the text. Common values are normal, italic, and oblique.</p>
        <Snippet codeString={codeString5} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Line Height</h4>
        <p>The <span className='code'>line-height</span> property sets the height between lines of text. It can be set using unitless values, percentages, or length values.</p>
        <Snippet codeString={codeString6} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Letter Spacing</h4>
        <p>The <span className='code'>letter-spacing</span> property sets the space between characters. It helps to improve the readability of text.</p>
        <Snippet codeString={codeString7} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Text Transform</h4>
        <p>The <span className='code'>text-transform</span> property controls the capitalization of text. Common values are uppercase, lowercase, and capitalize.</p>
        <Snippet codeString={codeString8} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Combining Font Properties</h4>
        <p>You can combine multiple font properties to achieve the desired text styling. Here is an example that combines several font properties:</p>
        <Snippet codeString={`<style>
  .combined {
    font-family: 'Verdana, sans-serif';
    font-size: 18px;
    font-weight: 600;
    font-style: oblique;
    line-height: 1.8;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
</style>
<div class="combined">This text combines multiple font properties.</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Best Practices</h4>
        <p>When styling fonts, consider the following best practices:</p>
        
        <h5 className='text-lg font-semibold'>Web Safe Fonts</h5>
        <p>Use web-safe fonts or include fallback fonts to ensure text displays correctly across different devices and browsers.</p>

        <h5 className='text-lg font-semibold'>Accessibility</h5>
        <p>Ensure the text size, spacing, and style enhance readability and accessibility for all users.</p>

        <h5 className='text-lg font-semibold'>Consistency</h5>
        <p>Maintain consistency in font styling throughout your website to create a cohesive look and feel.</p>

        <p>By mastering font styling, you can significantly improve the visual appeal and readability of your web content. Use the right combination of font properties to create engaging and accessible text for your users.</p>
      </article>
    </div>
  );
}

export default Tutorial;
