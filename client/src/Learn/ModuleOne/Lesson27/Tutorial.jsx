import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <h1>Responsive Web Page</h1>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <main class="main-content">
    <section class="content">
      <h2>Welcome to our website</h2>
      <p>This is a sample paragraph to demonstrate responsive design.</p>
    </section>
    <aside class="sidebar">
      <h3>Sidebar</h3>
      <p>This is a sidebar content.</p>
    </aside>
  </main>
  <footer class="footer">
    <p>&copy; 2024 Responsive Design Tutorial</p>
  </footer>
</body>
</html>`;

  const codeString2 = `/* styles.css */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.header {
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 14px 20px;
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}

.content {
  flex: 3;
  padding: 1rem;
}

.sidebar {
  flex: 1;
  padding: 1rem;
  background-color: #f4f4f4;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media (max-width: 768px) {
  .nav a {
    display: block;
    text-align: center;
  }

  .main-content {
    flex-direction: column;
  }

  .content, .sidebar {
    flex: 1;
  }
}

@media (max-width: 480px) {
  .header, .footer {
    padding: 0.5rem;
  }

  .content, .sidebar {
    padding: 0.5rem;
  }
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Responsive Design</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Responsive design ensures that your web pages look good on all devices, from desktops to tablets to smartphones. Using a combination of flexible layouts, media queries, and adaptable images, you can create a responsive design.</p>

        <h4 className='text-xl font-semibold'>HTML Structure</h4>
        <p>Here is an example of a basic HTML structure for a responsive web page. Note the inclusion of the <span className='code'>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span> tag to ensure proper scaling on different devices.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>CSS Styles</h4>
        <p>The following CSS styles create a responsive layout. Flexbox is used for the main content layout, and media queries adjust the layout for different screen sizes.</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Explanation of Key Elements</h4>
        <p>Let&apos;s break down some of the key elements of this responsive design:</p>
        <ul className='list-disc ml-6'>
          <li><strong>Viewport Meta Tag:</strong> Ensures the page scales correctly on different devices.</li>
          <li><strong>Flexbox Layout:</strong> The <span className='code'>.main-content</span> class uses Flexbox to create a flexible and responsive layout for the main content and sidebar.</li>
          <li><strong>Media Queries:</strong> Adjusts the layout based on screen size. For screens smaller than 768px, the navigation links stack vertically, and the main content and sidebar stack vertically. For screens smaller than 480px, padding is reduced for a more compact layout.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>By using flexible layouts and media queries, you can create web pages that provide a great user experience on any device. Responsive design is an essential skill for modern web development, ensuring accessibility and usability across various screen sizes.</p>
      </article>
    </div>
  );
}

export default Tutorial;
