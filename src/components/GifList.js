import React from 'react';

function GifList({ gifs }) {


    const images = gifs.map((gif) =>  <img key={Math.random} src={gif} alt={gif} />)

  return(
    <div>
        {images}
    </div>
  )
}

export default GifList;
