import { useEffect, useState } from 'react';
import GifList from "./GifList";
import GifSearch from './GifSearch';

function GifListContainer() {

    const [search, setSearch] = useState('')
    const [gifs, setGifs] = useState([])

    function getSearch(term){
        setSearch(term)
    }

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json())
        .then(data => {
            setGifs(data.data.slice(0,3).map(n => n.images.original.url))
        })
    }, [search])
    


  return(
  <div>
      <GifSearch getSearch={getSearch} />
      <GifList gifs={gifs} />
  </div>
  )
  
}

export default GifListContainer;

