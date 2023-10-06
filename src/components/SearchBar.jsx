import React from 'react'

function SearchBar() {
  const searchd = () =>{
    const searchbox =document.getElementById( "search-items").value.toUpperCase();
    
    const list=document.querySelectorAll(".card");
    
      
    for(var i=0;i<list.length;i++){
      let matchName=list[i].getElementsByClassName('nameC')[0];
      let matchRegion=list[i].getElementsByClassName('nameR')[0];
      let matchCapital=list[i].getElementsByClassName('nameCa')[0];
      console.log(matchRegion)
  
      if(matchName){
       let textvalueName=matchName.textContent ||matchName.innerHTML;
       let textvalueRegion=matchRegion.textContent ||matchRegion.innerHTML;
       let textvalueCa=matchCapital.textContent ||matchCapital.innerHTML;

        if (
          textvalueName.toUpperCase().includes(searchbox) ||
          textvalueRegion.toUpperCase().includes(searchbox) ||
          textvalueCa.toUpperCase().includes(searchbox)
        ) {
          list[i].style.display = "";
        } else {
          list[i].style.display = "none";
        }

        }
        
      }
    }
  return (
    <div className='search-bar flex items-center bg-DarkBlue rounded-md w-[550px] px-4 max-xl:w-2/3 max-sm:mx-0 max-sm:w-3/4 py-4 mx-20 my-14'>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mr-4 ml-3 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"   />
        </svg>

        <input type="text" id='search-items' className='bg-DarkBlue w-full focus:outline-none text-white' autoComplete="off" placeholder='Search for a country...' onChange={searchd}/>

    </div>
  )
}

export default SearchBar