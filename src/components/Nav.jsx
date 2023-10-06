import React from 'react'

function Nav() {
  return (
    <div className='nav-bar bg-DarkBlue  border-b-4 border-gray-800 text-white px-20 py-6 max-sm:px-5   flex justify-between '>

        <div className='logo text-2xl max-md:text-xl  max-sm:text-sm '>
            <h1>Where in the world?</h1>
        </div>

        <div className='Mode flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
            <p className='pl-4 text-l max-sm:text-sm '>Dark Mode</p>

        </div>

    </div>
  )
}

export default Nav