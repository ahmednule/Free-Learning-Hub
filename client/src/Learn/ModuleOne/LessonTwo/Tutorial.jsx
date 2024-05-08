import React from 'react'

const Tutorial = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl md:text-3xl underline underline-offset-[16px] pb-10'>Roles of HTML & CSS</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) serve as the backbone of web development, playing pivotal roles in crafting captivating and functional web pages.</p>
        <p>TML, often referred to as the foundation of any website, provides the structural framework for content on the web. It acts as the architectural blueprint, delineating the layout and organization of various elements such as text, images, and links on a webpage. Utilizing a system of tags, HTML marks up the content, instructing the browser on how to render each element. For instance, the <span className='cs dark:dcs'>&lt;p&gt;</span> tag signifies a paragraph, while <span className='cs dark:dcs'>&lt;img&gt;</span> represents an image.</p>
        <p>On the other hand, CSS emerges as the aesthetic engine that enhances the visual appeal of a website. Comparable to paint and decor adorning a building, CSS serves to style HTML elements, dictating their appearance on the screen. It offers a plethora of styling options, allowing designers to define colors, fonts, spacing, layout, and more, thereby breathing life into the HTML structure. With CSS, a mundane text document can be transformed into a visually captivating page that captures the user's attention.</p>
        <p>When HTML and CSS collaborate, they synergize to produce web pages that are both functional and visually enticing. While HTML lays the groundwork by providing the essential structure, CSS adds the creative flair that elevates the user experience. They constitute the cornerstone for individuals aspiring to venture into web development or establish their online presence. Acquiring proficiency in HTML equips one with the ability to publish content on the web, while mastering CSS empowers them to craft aesthetically pleasing designs.</p>
        <p>In essence, HTML and CSS are not just languages; they are the catalysts that propel the digital realm forward, enabling individuals to express their creativity and share information on a global scale.</p>
      </article>
    </div>
  )
}

export default Tutorial