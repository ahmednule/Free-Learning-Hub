import React from 'react'

const Tutorial = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl md:text-3xl underline underline-offset-[16px] pb-10'>Overview of HTML & CSS</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>HTML and CSS serve as the bedrock of web development, providing the essential tools for crafting captivating web pages.</p>
        <p>HTML, or HyperText Markup Language, functions much like a blueprint for a house. It builds up the structure and content of your web page through the use of tags, defining elements such as headings, paragraphs, and images. Essentially, HTML serves as the framework that holds the entire page together.</p>
        <p>On the other hand, CSS, which stands for Cascading Style Sheets, can be likened to the paint and decorations adorning a house. It bestows style upon your HTML elements, enabling you to infuse them with colors, fonts, and layouts. With CSS, you can transform a plain HTML document into a visually stunning webpage, elevating its aesthetic appeal.</p>
        <p>Here’s a simple analogy: If you were making a robot, HTML would be the parts you assemble, and CSS would be the paint job and clothes that make it look great.</p>
        <p>Together, HTML and CSS synergize to empower you to create websites that seamlessly blend functionality with aesthetics. While HTML furnishes the content and structure of your webpage, CSS embellishes it with style, ensuring that the content is not only informative but also visually appealing.</p>
        <p>Mastering HTML and CSS constitutes the initial stride towards embarking on a journey as a web developer. Armed with these indispensable tools, you can commence building your own websites, tailoring blog templates to your liking, or even forging a career in web design. Indeed, they are the cornerstone of the web, and acquiring proficiency in them unlocks a realm of digital creativity and opportunities.</p>
      </article>
    </div>
  )
}

export default Tutorial