import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<style>
  .table-container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  .table th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
</style>`;

  const codeString2 = `<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>30</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>25</td>
        <td>jane@example.com</td>
      </tr>
    </tbody>
  </table>
</div>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Table Designing</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Tables are a fundamental part of HTML for displaying structured data. Let&apos;s create a stylish and responsive table using HTML and CSS:</p>

        <h2 className='text-xl font-semibold'>1. Basic Table Structure</h2>
        <p>Start by defining the basic structure of the table:</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />

        <h2 className='text-xl font-semibold'>2. Styling the Table</h2>
        <p>Apply CSS styles to enhance the appearance of the table:</p>
        <Snippet codeString={codeString1} lang={'css'} title={'CSS'} />

        <h2 className='text-xl font-semibold'>3. Understanding the Styles</h2>
        <p>In the CSS code above:</p>
        <ul className='list-disc list-inside'>
          <li><span className='code'>.table-container</span>: Styles the container of the table with width, margin, padding, and border.</li>
          <li><span className='code'>.table</span>: Styles the table itself with border-collapse and width properties.</li>
          <li><span className='code'>th</span> and <span className='code'>td</span>: Styles the table header and data cells with border, padding, and text alignment.</li>
        </ul>

        <h2 className='text-xl font-semibold'>4. Responsive Design</h2>
        <p>To make the table responsive, you can use media queries to adjust its layout for different screen sizes.</p>
        <Snippet codeString={`@media (max-width: 768px) {
  .table-container {
    width: 100%;
  }
}`} lang={'css'} title={'CSS'} />

        <h2 className='text-xl font-semibold'>5. Additional Features</h2>
        <p>You can further enhance the table by adding features like sorting, filtering, or pagination using JavaScript libraries or frameworks like React or Vue.js.</p>

        <h2 className='text-xl font-semibold'>Conclusion</h2>
        <p>With this tutorial, you&apos;ve learned how to create a stylish and responsive table using HTML and CSS. Tables are versatile and can be customized to suit various design requirements.</p>

        <p>Experiment with different styles and functionalities to create tables that enhance the usability and visual appeal of your web pages.</p>
      </article>
    </div>
  );
}

export default Tutorial;
