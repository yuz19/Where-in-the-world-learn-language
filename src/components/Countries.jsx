import React from 'react'
import SearchBar from './SearchBar'
import Listes from './Listes'
function Home({formatNumberWithCommas}) {
  return (
    <div className='List-country max-sm:flex max-sm:flex-col max-sm:items-center '>
      <SearchBar/>
      <Listes formatNumberWithCommas={formatNumberWithCommas}/>
    </div>
  )
}

export default Home