import { useState } from 'react';

function GifSearch({ getSearch }) {

    const [searchValue, setSearchValue] = useState('')

    function handleOnChange(e){
        setSearchValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        getSearch(searchValue)
    }

  return(
      <div>
          <form onSubmit={handleSubmit}>
              <label>Enter your search term:
              <input type='text' value={searchValue} name='search' onChange={handleOnChange}/> </label>
              <input type='submit' name='Submit' />
          </form>
      </div>
    )
}

export default GifSearch;
