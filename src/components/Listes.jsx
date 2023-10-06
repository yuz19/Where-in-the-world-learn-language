import React,{useContext} from 'react'
import Data from '../data.json'
import CardCountry from './CardCountry'
 
function Listes({formatNumberWithCommas}) {

  return (
    <div className='listes flex flex-wrap   justify-center gap-20 w-screen overflow-hidden'>
         {
         Data.map(
            (value,key)=>(
            <CardCountry country={value}   key={key}  formatNumberWithCommas={formatNumberWithCommas} data={Data}/>
            )
         )
         }
     
    </div>
  )
}

export default Listes