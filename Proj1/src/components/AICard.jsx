import React from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils';

import Masonry from 'react-masonry-css';






const AICard = ({data, index}) => {
    const {prompt,src, width, height, id} = data;
    
  return (
      <div className={`rounded-xl w-[300px] group relative shadow-card hover:shadow-cardhover card`}>
        <img src={src} alt={prompt} className="object-cover rounded-xl" />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] bg-opacity-75 bg-gradient-to-[#10131f] m-2 p-4 rounded-md">
        {prompt===null ? (
          <p className="text-white text-sm overflow-y-auto prompt">AI generated image, lexia AI, pexel AI, Dall-E, Open AI</p>

        ):(
            <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        )}

          <div className="mt-5 flex justify-between items-center gap-2">
            <button type="button" onClick={() => downloadImage(id, src)} className="outline-none bg-transparent border-none">
              <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
            </button>
          </div>
        </div>
      </div>
  )
}

export default AICard