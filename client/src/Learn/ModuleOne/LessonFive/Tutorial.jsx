import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<a href="https://www.example.com">Visit Example Website</a>`;
  const codeString2 = `<a href="about.html">About Us</a>`;
  const codeString3 = `<a href="#section-id">Jump to Section</a>`;
  const codeString4 = `<a href="https://www.example.com" target="_blank">Visit Example Website</a>`;
  const codeString5 = `<a href="https://www.example.com">
  <img src="image.jpg" alt="Image">
</a>`;

  const codeString6 = `<a href="https://www.example.com"><b>Visit Example Website</b></a>
<a href="https://www.example.com"><i>Visit Example Website</i></a>`;

  return (
    <div>
      <h1 className='font-bold text-2xl md:text-3xl underline underline-offset-[16px] pb-10'>Link Creation</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
      <p>Link creation in HTML is essential for connecting web pages and resources, enabling navigation between different parts of a website or to external content. Here's how to create links using HTML:</p>
        <h4 className='text-xl font-bold'>Basic Link</h4>
        <p>The basic syntax for creating a link is to use the <span className='code'>&lt;a&gt;</span> (anchor) element with the <span className='code'>href</span> attribute to specify the destination URL. This creates a link labeled "Visit Example Website" that, when clicked, takes the user to the "https://www.example.com" website.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />
        <h4 className='text-xl font-bold'>Linking to Local Files</h4>
        <p>You can link to files within your own website directory by specifying the file path in the <span className='code'>href</span> attribute. This link points to a file named "about.html" in the same directory as the current web page.</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />
        <h4 className='text-xl font-bold'>Linking to Sections Within a Page</h4>
        <p>To create a link that jumps to a specific section within the same page, you can use the <span className='code'>id</span> attribute to target the section, and then use the <span className='code'>href</span> attribute with a hash symbol <span className='code'>(#)</span> followed by the <span className='code'>id</span> value. This link jumps to the section with the id <span className='code'>#section-id</span> when clicked.</p>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        <h4 className='text-xl font-bold'>Opening Links in New Tab</h4>
        <p>You can specify that a link should open in a new browser tab or window by adding the <span className='code'>target="_blank"</span> attribute. This ensures that when the link is clicked, the destination page opens in a new tab or window.</p>
        <Snippet codeString={codeString4} lang={'html'} title={'HTML'} />
        <h4 className='text-xl font-bold'>Linking Images</h4>
        <p>Images can also be turned into links by wrapping them with an <span className='code'>&lt;a&gt;</span> element. Clicking on the image will now take the user to the specified URL.</p>
        <Snippet codeString={codeString5} lang={'html'} title={'HTML'} />
        <h4 className='text-xl font-bold'>Linking With Text Formating</h4>
        <p>You can apply text formatting, such as bold or italic, to the link text. You can replace "https://www.example.com" with the actual URL you want to link to and adjust other attributes as needed. By using these techniques, you can create effective and user-friendly navigation throughout your web pages.</p>
        <Snippet codeString={codeString6} lang={'html'} title={'HTML'} />
      </article>
    </div>
  );
}

export default Tutorial;
