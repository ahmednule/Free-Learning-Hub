import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic HTML Example</title>
</head>
<body>
  
  <!-- Header Section -->
  <header>
    <h1>Welcome to Our Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <!-- Main Content Section -->
  <main>
    <!-- About Section -->
    <section>
      <h2>About Us</h2>
      <article>
        <h3>Our Mission</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <article>
        <h3>Our Team</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
    </section>
  
    <!-- Services Section -->
    <section>
      <h2>Services</h2>
      <article>
        <h3>Web Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <article>
        <h3>Graphic Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
    </section>
  </main>
  
  <!-- Sidebar Section -->
  <aside>
    <h2>Advertisement</h2>
    <p>Check out our special offer!</p>
  </aside>

  <!-- Footer Section -->
  <footer>
    <p>&copy; 2024 Your Company</p>
    <nav>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </nav>
  </footer>
  
  </body>
  </html>`;

  return (
    <div>
      <h1 className='font-semibold text-2xl md:text-3xl underline underline-offset-[16px] pb-10'>Semantic HTML</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
      <p>Semantic HTML refers to the use of HTML elements that carry meaning beyond their visual presentation. Semantic elements provide a clear structure to web documents, making it easier for both humans and machines to understand the content.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        <p>Here&apos;s an overview of semantic HTML:</p>
        <h4 className='text-xl font-semibold'>&lt;header&gt;</h4>
        <p>The <span className='code'>&lt;header&gt;</span> element represents introductory content at the beginning of a document or section. It typically contains headings, logos, navigation menus, and other introductory elements.</p>
        <h4 className='text-xl font-semibold'>&lt;nav&gt;</h4>
        <p>The <span className='code'>&lt;nav&gt;</span> element represents a section of navigation links, such as menus or lists of links to other pages or parts of the same page.</p>
        <h4 className='text-xl font-semibold'>&lt;main&gt;</h4>
        <p> The <span className='code'>&lt;main&gt;</span> element contains the primary content of a document. It excludes content that is repeated across multiple pages, such as navigation menus or footers.</p>
        <h4 className='text-xl font-semibold'>&lt;section&gt;</h4>
        <p>The <span className='code'>&lt;section&gt;</span> element defines a section of a document, typically with a heading. It groups related content together, such as chapters, articles, or different parts of a page.</p>
        <h4 className='text-xl font-semibold'>&lt;article&gt;</h4>
        <p>The <span className='code'>&lt;article&gt;</span> element represents a self-contained piece of content that could be distributed and reused independently, such as a blog post, news article, or forum post.</p>
        <h4 className='text-xl font-semibold'>&lt;aside&gt;</h4>
        <p>The <span className='code'>&lt;aside&gt;</span> element represents content that is tangentially related to the main content of the page, such as sidebars, pull quotes, or advertisements.</p>
        <h4 className='text-xl font-semibold'>&lt;footer&gt;</h4>
        <p>The <span className='code'>&lt;footer&gt;</span> element represents a footer for its nearest sectioning content or the nearest ancestor sectioning content if there is none. It typically contains information about the author, copyright notices, links to related content, or contact information.</p>
        <h4 className='text-xl font-semibold'>&lt;figure&gt; and &lt;figure&gt;</h4>
        <p>The <span className='code'>&lt;figure&gt;</span> element represents self-contained content, such as images, videos, or code snippets, with an optional caption provided by the <span className='code'>&lt;figcaption&gt;</span> element.</p>
        <h4 className='text-xl font-semibold'>&lt;blockquote&gt;</h4>
        <p>The <span className='code'>&lt;blockquote&gt;</span> element indicates that the enclosed text is a longer quotation from another source.</p>
        <h4 className='text-xl font-semibold'>&lt;cite&gt;</h4>
        <p>The <span className='code'>&lt;cite&gt;</span> element represents the title of a work (e.g., a book, a movie, or a song), or the name of its author.</p>
        <h4 className='text-xl font-semibold'>&lt;time&gt;</h4>
        <p>The <span className='code'>&lt;time&gt;</span> element represents a specific period in time or a duration, such as dates, times, or durations of time.</p>
        <p>Using semantic HTML elements not only improves the accessibility and SEO of web pages but also enhances the readability and maintainability of the code. By choosing elements that accurately represent the content&apos;s meaning, developers can create more structured, understandable, and interoperable web documents.</p>
      </article>
    </div>
  );
}

export default Tutorial;
