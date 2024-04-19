import React from 'react'
import SubFooter from '../../components/SubFooter'
import Footer from '../../components/Footer'

const LessonFour = () => {
  return (
    <div className='px-4 mt-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>Basic HTML Elements</h1>
      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Learning the basic elements of HTML is akin to grasping the fundamental building blocks of web development. These elements form the foundation upon which web pages are constructed, allowing developers to structure content and create meaningful user experiences. Here's an overview of some essential HTML elements:</p>
        <ol className='ml-2 flex flex-col gap-4'>
          <li><span className='font-bold text-[17px]'>1. <span className='cs dark:dcs'>&lt;!DOCTYPE html&gt;</span>:</span> This declaration at the beginning of an HTML document specifies the HTML version being used. It ensures that the browser renders the page correctly.</li>
          <li><span className='font-bold text-[17px]'>2. <span className='cs dark:dcs'>&lt;html&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;html&gt;</span> element wraps the entire HTML document and serves as its root element.</li>
          <li><span className='font-bold text-[17px]'>3. <span className='cs dark:dcs'>&lt;head&gt;</span>:</span> Within the <span className='cs dark:dcs'>&lt;head&gt;</span> element, you include meta-information about the document, such as the page title, character encoding, stylesheets, and scripts. This section is not displayed on the web page itself but contains crucial information for browsers and search engines.</li>
          <li><span className='font-bold text-[17px]'>4. <span className='cs dark:dcs'>&lt;title&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;title&gt;</span> element, nested within the <span className='cs dark:dcs'>&lt;title&gt;</span>, specifies the title of the web page, which appears in the browser's title bar or tab.</li>
          <li><span className='font-bold text-[17px]'>5. <span className='cs dark:dcs'>&lt;body&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;body&gt;</span> element contains the main content of the web page, including text, images, links, and other elements visible to users.</li>
          <li><span className='font-bold text-[17px]'>6. <span className='cs dark:dcs'>&lt;h1&gt; to &lt;h6&gt;</span>:</span> Heading elements denote headings of various levels, with <span className='cs dark:dcs'>&lt;h1&gt;</span> being the highest (most important) and <span className='cs dark:dcs'>&lt;h6&gt;</span> being the lowest. They are used to structure the hierarchical organization of content.</li>
          <li><span className='font-bold text-[17px]'>7. <span className='cs dark:dcs'>&lt;p&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;p&gt;</span> element represents a paragraph of text. It is commonly used to enclose blocks of text within a web page.</li>
          <li><span className='font-bold text-[17px]'>8. <span className='cs dark:dcs'>&lt;a&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;a&gt;</span> (anchor) element defines hyperlinks, allowing users to navigate to other web pages or resources. It is accompanied by an href attribute, specifying the destination URL.</li>
          <li><span className='font-bold text-[17px]'>9. <span className='cs dark:dcs'>&lt;img&gt;</span>:</span> The <span className='cs dark:dcs'>&lt;img&gt;</span> element embeds images within a web page. It requires a src attribute, which specifies the image file's URL, and may include optional attributes like alt (alternative text) and width/height for customization.</li>
          <li><span className='font-bold text-[17px]'>10. <span className='cs dark:dcs'>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</span>:</span> These elements are used to create lists. <span className='cs dark:dcs'>&lt;ul&gt;</span> and <span className='cs dark:dcs'>&lt;ol&gt;</span> represent unordered and ordered lists, respectively, while <span className='cs dark:dcs'>&lt;li&gt;</span> defines individual list items within them.</li>
          <li><span className='font-bold text-[17px]'>11. <span className='cs dark:dcs'>&lt;div&gt;</span> and <span className='cs dark:dcs'>&lt;span&gt;</span>:</span> These are generic container elements used for grouping and styling other elements. <span className='cs dark:dcs'>&lt;div&gt;</span> is a block-level element, while <span className='cs dark:dcs'>&lt;span&gt;</span> is an inline element.</li>
        </ol>
        <p>Mastering these basic HTML elements lays a strong foundation for creating well-structured and semantically meaningful web pages. As you progress in your web development journey, you'll explore more elements and learn how to combine them to build sophisticated layouts and interfaces.</p>
      </article>
      <div>
        <SubFooter
          t1="Setting up IDE"
          l1="/learn/html/l3"
          t2="Text Formating"
          l2="/learn/html/l5"
          reset="/learn/html"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonFour.jsx"
        />
      </div>
      <div className='mt-24'>
        <Footer />
      </div>
    </div>
  )
}

export default LessonFour