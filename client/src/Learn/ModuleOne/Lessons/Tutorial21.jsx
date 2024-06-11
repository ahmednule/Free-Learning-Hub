import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Component Styling with Tailwind CSS</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>With Tailwind CSS, you can easily style individual components by applying utility classes directly in HTML. Let&apos;s explore how to style common components using Tailwind CSS:</p>

        <h4 className='text-xl font-semibold'>Buttons</h4>
        <p>Style buttons with Tailwind CSS utility classes:</p>
        <Snippet codeString={`<!-- Primary button -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Primary Button
</button>

<!-- Secondary button -->
<button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
  Secondary Button
</button>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Cards</h4>
        <p>Create card components with Tailwind CSS:</p>
        <Snippet codeString={`<!-- Card -->
<div class="max-w-xs rounded overflow-hidden shadow-lg">
  <img class="w-full" src="image.jpg" alt="Card Image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">Card Description</p>
  </div>
</div>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Forms</h4>
        <p>Style form elements with Tailwind CSS:</p>
        <Snippet codeString={`<!-- Form -->
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
    <p class="text-red-500 text-xs italic">Please choose a password.</p>
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Sign In
    </button>
    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      Forgot Password?
    </a>
  </div>
</form>`} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Navbar</h4>
        <p>Style navigation bars with Tailwind CSS:</p>
        <Snippet codeString={`<!-- Navbar -->
<nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Brand</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
        Home
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
        About
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
        Contact
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>`} lang={'html'} title={'HTML'} />

        <p>By applying Tailwind CSS utility classes directly in HTML, you can easily style individual components and create visually appealing web interfaces with minimal effort.</p>
      </article>
    </div>
  );
}

export default Tutorial;
