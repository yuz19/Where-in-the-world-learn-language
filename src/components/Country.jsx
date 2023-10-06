import React, { useContext, useEffect } from 'react';
import { Context } from '../App';

function Country({formatNumberWithCommas}) {
  const [countryInfo,setCountryInfo,BorderInfo, setBorderInfo] = useContext(Context);
 


 useEffect(()=>{
    if(!countryInfo){
        const localCountryInfo = JSON.parse(localStorage.getItem('countryInfo'));
        setCountryInfo(localCountryInfo)
    }
 
 
    const localBordInfo = JSON.parse(localStorage.getItem('borderInfo'));
    console.log(localBordInfo)
    if(BorderInfo.length===0){
     
        
        setBorderInfo(localBordInfo)
    }
 
 },[])

 function  information(){
    return(
        <div className='card    w-full h-2/3 overflow-hidden text-white relative'>
            <div className='bg-DarkBlue shadow-lg rounded-sm  w-24 flex px-4 py-2 absolute left-20 top-10 max-xl:left-7 max-md:left-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                Back
            </div>
            <div className='flex max-md:flex-col max-md:items-center justify-center w-full  mt-20 p-20 max-xl:px-5'>
                <div className='flag w-2/4  max-md:w-fit '>
                    <img src={countryInfo.flag} alt=""  className='object-cover w-full h-96'/>
                </div>
                <div className=' w-2/3 description flex flex-col ml-20  max-md:w-full  max-md:m-0 max-md:px-0 max-xl:ml-5 gap-6 px-8 pt-5 pb-10 '>

                        <h1 className='nameC text-2xl font-bold '>{countryInfo.name}</h1>

                        <div className=' w-2/3 max-md:w-fit max-md:flex-col max-md:gap-10 extrainfo font-light flex  justify-between '>
                            <div className='right'>
                                <p><span className='font-semibold'>Populations: </span> {formatNumberWithCommas(countryInfo.population)}</p>
                                <p><span className=' font-semibold'>Region: </span> <span className='nameR'>{countryInfo.region}</span></p>
                                <p><span className=' font-semibold'>Capital: </span><span className='nameCa'>{countryInfo.capital}</span> </p>
                                <p><span className=' font-semibold'>Sub Region: </span><span className=''>{countryInfo.subregion}</span> </p>
                            </div>
                            <div className='left'>
                                <p><span className=' font-semibold'>Top Level Domain: </span><span className=''>{countryInfo.topLevelDomain}</span> </p>
                                <p><span className=' font-semibold'>Currencies: </span><span className=''>{countryInfo.currencies[0].code}</span> </p>
                                <div className='lang'>
                                    <p><span  className='font-semibold'>Language: </span>
                                    {countryInfo.languages.map((lang, index) => (
                                    
                                        <span className='' key={index}>{lang.name}</span>
                                   
                                    ))}
                                    </p>
                                </div>
                            </div>

            
                        </div>
                        <div className='  mt-16 flex max-xl:block'>
                            <h1 className='text-lg font-semibold    max-xl:pb-5 pr-4'>Border Countries: </h1>
                            <div className='flex gap-5  w-3/4   flex-wrap max-xl:w-96'>
                            {
                                BorderInfo.map((value,index)=>(
                                    <div key={index}  className='bg-DarkBlue shadow-lg rounded-md px-6 py-2 flex justify-center items-center text-sm hover:bg-VDarkBlue hover:border-1 hover:border-white cursor-pointer '>{value}</div>
                                ))
                            }
                            </div>
 

                        </div>
                </div>
            </div>

        </div>
    )
 }
  return (
    <div>
        {countryInfo ? information() : 'Loading...'}
    </div>
  );
}

export default Country;
