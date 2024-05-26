import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `/* Link States */
a:link {
  color: blue; /* unvisited link */
}

a:visited {
  color: purple; /* visited link */
}

a:hover {
  color: red; /* mouse over link */
}

a:active {
  color: orange; /* active link */
}`;

  const codeString2 = `/* Form Input States */
input:focus {
  background-color: #f0f0f0; /* input element has focus */
}

input:disabled {
  opacity: 0.5; /* disabled input element */
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Pseudo-class Selectors</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Pseudo-class selectors in CSS allow you to style elements based on specific states or conditions that cannot be targeted using regular class or ID selectors. Let&apos;s explore some common pseudo-class selectors:</p>

        <h4 className='text-xl font-semibold'>Link States</h4>
        <p>Pseudo-classes can be used to style links based on their various states:</p>
        <Snippet codeString={codeString1} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Form Input States</h4>
        <p>Form input elements can be styled based on their states as well:</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Other Common Pseudo-classes</h4>
        <ul className='list-disc list-inside'>
          <li><span className='code'>:first-child</span>: Selects the first child of an element.</li>
          <li><span className='code'>:last-child</span>: Selects the last child of an element.</li>
          <li><span className='code'>:nth-child(n)</span>: Selects elements based on their position in a group of siblings.</li>
          <li><span className='code'>:not(selector)</span>: Selects all elements except those matched by the selector.</li>
          <li><span className='code'>:focus</span>: Selects an element that has focus.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Example Explained</h4>
        <p>In the examples provided, we&apos;ve styled various link states and form input states using pseudo-classes. This allows for enhanced user experience by providing visual feedback based on user interactions.</p>

        <h4 className='text-xl font-semibold'>Best Practices for Using Pseudo-classes</h4>

        <h5 className='text-lg font-semibold'>Accessibility</h5>
        <p>Ensure that pseudo-class styles enhance usability and accessibility for all users, especially those using assistive technologies.</p>

        <h5 className='text-lg font-semibold'>Consistency</h5>
        <p>Maintain consistency in pseudo-class styles throughout your website to provide a cohesive user experience.</p>

        <h5 className='text-lg font-semibold'>Test Across Browsers</h5>
        <p>Test pseudo-class styles across different browsers to ensure consistent rendering and behavior.</p>

        <p>By leveraging pseudo-class selectors effectively, you can enhance the interactivity and usability of your web pages, providing users with a more engaging and intuitive experience.</p>
      </article>
    </div>
  );
}

export default Tutorial;
