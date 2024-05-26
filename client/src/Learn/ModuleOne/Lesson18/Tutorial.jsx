import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">`;

  const codeString2 = `// Install Tailwind CSS via npm
npm install tailwindcss`;

  const codeString3 = `// Include Tailwind CSS in your project
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Introduction to Tailwind CSS Framework</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Tailwind CSS is a highly customizable CSS framework that provides utility classes to rapidly build modern and responsive web interfaces. Let&apos;s get started with Tailwind CSS:</p>

        <h4 className='text-xl font-semibold'>Installation</h4>
        <p>You can install Tailwind CSS via CDN or npm:</p>
        <Snippet codeString={codeString1} lang={'html'} title={'CDN'} />
        <Snippet codeString={codeString2} lang={'bash'} title={'npm'} />

        <h4 className='text-xl font-semibold'>Usage</h4>
        <p>Include Tailwind CSS in your project&apos;s CSS file:</p>
        <Snippet codeString={codeString3} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Basic Usage</h4>
        <p>Start using Tailwind CSS utility classes directly in your HTML:</p>
        <Snippet codeString={`<div class="p-4 bg-gray-200 rounded-lg shadow-md">
  <h1 class="text-xl font-semibold text-gray-800">Welcome to Tailwind CSS</h1>
  <p class="text-gray-600">Build beautiful interfaces with ease!</p>
</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Key Features</h4>
        <ul className='list-disc list-inside'>
          <li>Utility-first approach: Apply styles using utility classes.</li>
          <li>Responsive design: Create layouts with built-in breakpoint classes.</li>
          <li>Customizable: Extend or override default styles to match your design.</li>
          <li>Developer-friendly: Boost productivity with rapid development.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Customization Options</h4>
        <p>You can customize Tailwind CSS by modifying the <code>tailwind.config.js</code> file:</p>
        <Snippet codeString={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#FF4500', // Custom primary color
      },
      fontFamily: {
        'custom': ['Montserrat', 'sans-serif'], // Custom font family
      },
    },
  },
}`} lang={'javascript'} title={'JavaScript'} />

        <h4 className='text-xl font-semibold'>Additional Resources</h4>
        <ul className='list-disc list-inside'>
          <li><a className='linkOne' href="https://tailwindcss.com/docs">Official Documentation</a></li>
          <li><a className='linkOne' href="https://play.tailwindcss.com">Tailwind Play</a> - Interactive playground for experimenting with Tailwind CSS.</li>
          <li><a className='linkOne' href="https://tailwindcss.com/community">Community Resources</a> - Connect with the Tailwind CSS community for support and inspiration.</li>
          <li><a className='linkOne' href="https://github.com/tailwindlabs/tailwindcss">GitHub Repository</a> - Explore the source code and contribute to Tailwind CSS.</li>
        </ul>

        <p>With Tailwind CSS, you can streamline your web development workflow and create beautiful, responsive interfaces with ease.</p>
      </article>
    </div>
  );
}

export default Tutorial;
