import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media Queries Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <h1>Responsive Design with Media Queries</h1>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <main class="main-content">
    <section class="content">
      <h2>Main Content</h2>
      <p>This is the main content area. Resize the browser window to see how the layout changes.</p>
    </section>
    <aside class="sidebar">
      <h3>Sidebar</h3>
      <p>This is the sidebar content.</p>
    </aside>
  </main>
  <footer class="footer">
    <p>&copy; 2024 Media Query Tutorial</p>
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
  position: relative;
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
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Responsive Design with Media Queries</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Media queries in CSS allow you to apply different styles depending on the device&apos;s characteristics, such as screen width, height, resolution, and orientation. This is essential for creating responsive web designs that work on various devices, from desktops to tablets and smartphones.</p>

        <h4 className='text-xl font-semibold'>HTML Structure</h4>
        <p>Here is a basic HTML structure for a responsive web page that includes a header, navigation, main content area, sidebar, and footer.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>CSS Styles and Media Queries</h4>
        <p>The following CSS styles create a responsive layout using Flexbox for the main content and sidebar. Media queries adjust the layout for different screen sizes.</p>
        <Snippet codeString={codeString2} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Explanation of Media Queries</h4>
        <p>Let&apos;s break down the media queries used in this example:</p>
        <ul className='list-disc ml-6'>
          <li><strong>Basic Styles:</strong> The default styles apply to all screen sizes.</li>
          <li><strong>Medium Screens (max-width: 768px):</strong> For screens smaller than 768px, the navigation links stack vertically, and the main content and sidebar stack vertically.</li>
          <li><strong>Small Screens (max-width: 480px):</strong> For screens smaller than 480px, padding is reduced for a more compact layout.</li>
        </ul>

        <h4 className='text-xl font-semibold'>Creating Your Own Media Queries</h4>
        <p>You can create media queries for any screen size and apply different styles based on your design needs. Here&apos;s a general structure for a media query:</p>
        <Snippet codeString={`@media (max-width: 600px) {
  /* Styles for screens smaller than 600px */
}`} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>Media queries are a powerful tool in CSS for creating responsive designs that adapt to different screen sizes and devices. By understanding and using media queries effectively, you can ensure your web pages provide a great user experience across all devices.</p>
      </article>
    </div>
  );
}

export default Tutorial;
