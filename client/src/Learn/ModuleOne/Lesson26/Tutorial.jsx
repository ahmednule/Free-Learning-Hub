import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`;
  
  const codeString2 = `<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg">
  <source src="audio-file.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`;

  const codeString3 = `<audio controls class="custom-audio">
  <source src="audio-file.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`;

  const codeString4 = `.custom-audio {
  width: 100%;
  outline: none;
}

.custom-audio::-webkit-media-controls-panel {
  background-color: #333;
  border-radius: 10px;
}

.custom-audio::-webkit-media-controls-play-button,
.custom-audio::-webkit-media-controls-current-time-display,
.custom-audio::-webkit-media-controls-time-remaining-display,
.custom-audio::-webkit-media-controls-timeline,
.custom-audio::-webkit-media-controls-volume-slider {
  filter: invert(100%);
}`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Audio Playback in HTML & CSS</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Adding audio playback to your web pages can enhance user experience by providing multimedia content. HTML5 provides a simple way to embed audio files.</p>

        <h4 className='text-xl font-semibold'>Basic Audio Playback</h4>
        <p>To embed an audio file, use the <span className='code'>&lt;audio&gt;</span> element with the <span className='code'>controls</span> attribute to provide built-in playback controls.</p>
        <Snippet codeString={codeString1} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Multiple Audio Formats</h4>
        <p>To ensure compatibility across different browsers, provide multiple audio formats using the <span className='code'>&lt;source&gt;</span> elements within the <span className='code'>&lt;audio&gt;</span> tag.</p>
        <Snippet codeString={codeString2} lang={'html'} title={'HTML'} />

        <h4 className='text-xl font-semibold'>Customizing Audio Playback</h4>
        <p>You can style the <span className='code'>&lt;audio&gt;</span> element using CSS. While full customization is limited, some aspects like the width and border can be styled. For more extensive styling, JavaScript libraries are usually employed.</p>
        <Snippet codeString={codeString3} lang={'html'} title={'HTML'} />
        <Snippet codeString={codeString4} lang={'css'} title={'CSS'} />

        <h4 className='text-xl font-semibold'>CSS for Custom Audio Player</h4>
        <p>The example above shows basic customization of the audio element, including setting its width and adjusting the appearance of media controls using WebKit pseudo-elements.</p>

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>Using the <span className='code'>&lt;audio&gt;</span> element in HTML5 allows you to easily embed audio files in your web pages. By providing multiple formats, you ensure compatibility across different browsers, and CSS offers some basic customization options.</p>
      </article>
    </div>
  );
}

export default Tutorial;
