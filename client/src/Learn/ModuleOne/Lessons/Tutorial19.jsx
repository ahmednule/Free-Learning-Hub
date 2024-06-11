import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Tailwind CSS Utility Classes</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Tailwind CSS provides a vast array of utility classes that allow you to apply styles directly to HTML elements. Let&apos;s explore some common utility classes and how to use them:</p>

        <h4 className='text-xl font-semibold'>Spacing</h4>
        <p>Control spacing with margin and padding utility classes:</p>
        <Snippet codeString={`<!-- Margin -->
<div class="m-4">Margin</div>

<!-- Padding -->
<div class="p-4">Padding</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Typography</h4>
        <p>Style text with typography utility classes:</p>
        <Snippet codeString={`<!-- Text color -->
<div class="text-red-500">Red Text</div>

<!-- Font size -->
<div class="text-lg">Large Text</div>

<!-- Font weight -->
<div class="font-semibold">Semibold Text</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Backgrounds</h4>
        <p>Add background colors and images with utility classes:</p>
        <Snippet codeString={`<!-- Background color -->
<div class="bg-blue-200">Blue Background</div>

<!-- Background image -->
<div class="bg-cover bg-center" style="background-image: url('image.jpg');">Background Image</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Flexbox</h4>
        <p>Control layout and alignment with flexbox utility classes:</p>
        <Snippet codeString={`<!-- Flex container -->
<div class="flex">Flex Container</div>

<!-- Flex item alignment -->
<div class="flex items-center justify-center">Centered Flex Item</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Borders</h4>
        <p>Add borders and rounded corners with border utility classes:</p>
        <Snippet codeString={`<!-- Border -->
<div class="border border-gray-500">Border</div>

<!-- Rounded corners -->
<div class="rounded-lg">Rounded Corners</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Responsive Design</h4>
        <p>Apply styles responsively with breakpoint utility classes:</p>
        <Snippet codeString={`<!-- Responsive margin -->
<div class="m-4 md:m-8 lg:m-12">Responsive Margin</div>`} lang={'html'} title={'HTML'} />

        <p>These are just a few examples of the utility classes available in Tailwind CSS. By leveraging these classes effectively, you can quickly create responsive and visually appealing web interfaces.</p>
      </article>
    </div>
  );
}

export default Tutorial;
