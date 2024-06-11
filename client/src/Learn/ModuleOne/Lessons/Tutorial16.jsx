import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `// Install UI Library via Package Manager
npm install ui-library`;

  const codeString2 = `// Import UI Library CSS
import 'ui-library/dist/ui-library.css';

// Import UI Library Components
import { Button, Input, Navbar } from 'ui-library';`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>UI Library Integration</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Integrating a UI library into your web project can significantly speed up development by providing pre-styled components and design patterns. Here&apos;s how you can integrate a UI library into your project:</p>

        <h4 className='text-xl font-semibold'>Install the UI Library</h4>
        <p>Start by installing the UI library using your preferred package manager (such as npm or yarn):</p>
        <Snippet codeString={codeString1} lang={'bash'} title={'Terminal'} />

        <h4 className='text-xl font-semibold'>Import Library Styles and Components</h4>
        <p>Next, import the CSS file and the desired components from the UI library into your project:</p>
        <Snippet codeString={codeString2} lang={'jsx'} title={'JavaScript'} />

        <h4 className='text-xl font-semibold'>Usage Example</h4>
        <p>Once imported, you can use the components provided by the UI library in your JSX code:</p>
        <Snippet codeString={`<Navbar>
  <Navbar.Brand>My Website</Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Item>About</Navbar.Item>
    <Navbar.Item>Contact</Navbar.Item>
    <Navbar.Item>Login</Navbar.Item>
  </Navbar.Menu>
</Navbar>

<Input type="text" placeholder="Enter your name" />

<Button variant="primary">Submit</Button>`} lang={'jsx'} title={'JavaScript'} />

        <p>With the UI library integrated into your project, you can easily create a consistent and visually appealing user interface by leveraging its components and styles.</p>

        <h4 className='text-xl font-semibold'>Benefits of UI Library Integration</h4>
        <ul className='list-disc list-inside'>
          <li>Speeds up development with pre-styled components.</li>
          <li>Promotes consistency in design across the project.</li>
          <li>Reduces the need for custom styling and development.</li>
          <li>Provides responsive and accessible components out of the box.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Considerations</h4>
        <p>When choosing a UI library, consider factors such as community support, documentation quality, customization options, and compatibility with your project requirements.</p>

        <p>By integrating a UI library into your project, you can streamline the development process and create a professional-looking user interface with minimal effort.</p>
      </article>
    </div>
  );
}

export default Tutorial;
