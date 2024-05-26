import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Responsive Design with Tailwind CSS</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>One of the key features of Tailwind CSS is its support for responsive design out of the box. Let&apos;s explore how to create responsive layouts using Tailwind&apos;s built-in breakpoint utility classes:</p>

        <h4 className='text-xl font-semibold'>Breakpoint Classes</h4>
        <p>Tailwind CSS provides breakpoint utility classes for various screen sizes:</p>
        <Snippet codeString={`<!-- Extra small devices (phones) -->
<div class="block sm:hidden">Hidden on Small Screens</div>

<!-- Small devices (tablets) -->
<div class="hidden sm:block md:hidden">Hidden on Medium Screens</div>

<!-- Medium devices (desktops) -->
<div class="hidden md:block lg:hidden">Hidden on Large Screens</div>

<!-- Large devices (large desktops) -->
<div class="hidden lg:block">Hidden on Extra Large Screens</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Responsive Spacing</h4>
        <p>Adjust spacing based on screen size:</p>
        <Snippet codeString={`<!-- Responsive margin -->
<div class="m-4 md:m-8 lg:m-12">Responsive Margin</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Responsive Typography</h4>
        <p>Change text size and font weight responsively:</p>
        <Snippet codeString={`<!-- Responsive font size -->
<div class="text-base md:text-lg lg:text-xl">Responsive Text Size</div>

<!-- Responsive font weight -->
<div class="font-semibold md:font-bold">Responsive Font Weight</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Responsive Grid Layouts</h4>
        <p>Create responsive grid layouts with grid and flexbox utility classes:</p>
        <Snippet codeString={`<!-- Responsive grid layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Customizing Breakpoints</h4>
        <p>You can customize Tailwind CSS breakpoints in the <code>tailwind.config.js</code> file:</p>
        <Snippet codeString={`// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
}`} lang={'javascript'} title={'JavaScript'} />

        <p>By utilizing Tailwind CSS&apos;s responsive utility classes, you can ensure that your web designs adapt seamlessly to various screen sizes and devices, providing an optimal viewing experience for users.</p>
      </article>
    </div>
  );
}

export default Tutorial;
