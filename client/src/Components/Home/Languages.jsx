import Snippet from "../General/Snippet"
import Language from "./Language";

const Languages = () => {

  const codeString = `// JavaScript
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

// DEFAULT ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Hub relaxing on port 3000!');
});`;

  return (
    <div className="flex flex-col lg:flex-row justify-between px-3">
      <div className="lg:max-w-[47%] w-full flex flex-col gap-5">
        <h3 className="text-blue-500">Languages</h3>
        <p className="text-xl sm:text-3xl lg:text-6xl">Pick your <span className="text-blue-500">module</span> and start learning</p>
        <p>Unlock comprehensive learning modules, where simplicity meets depth. Don't miss out on the opportunity to level up your knowledge!</p>
        <div className="lg:pl-3">
          <Language />
        </div>
      </div>
      <div className="w-full lg:w-[47%] mt-12 lg:mt-0">
        <div className="lg:sticky lg:top-20 lg:z-[5]">
          <Snippet
            codeString={codeString}
            lang="javascript"
          />
        </div>
      </div>
    </div>
  )
}

export default Languages