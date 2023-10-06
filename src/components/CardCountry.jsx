import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Context} from '../App'

function CardCountry({country,formatNumberWithCommas,data}) {

  const [countryInfo,setCountryInfo,BorderInfo, setBorderInfo] = useContext(Context);
    useEffect(()=>{
       
        setBorderInfo([])
    },[])
    const searchName = (search) => {
        if (Array.isArray(search.borders)) {
          search.borders.map((code) => {
            data.map((value) => {
              if (value.alpha3Code === code) {
                setBorderInfo((prevBorderInfo) => [...prevBorderInfo, value.name]);
              }
            });
          });
        }
      };
      
    useEffect(() => {
        localStorage.setItem('borderInfo', JSON.stringify(BorderInfo));
        
      }, [BorderInfo]);

    // const { countryName } = useParams();
      
  return (
    <Link to={'/'+country.name}  >
    <div className='card bg-DarkBlue w-80 shadow-lg rounded-md overflow-hidden text-white cursor-pointer' onClick={()=>{
                searchName(country)
        // When setting countryInfo in the context
        localStorage.setItem('countryInfo', JSON.stringify(country));

        localStorage.setItem('borderInfo', JSON.stringify(BorderInfo));

        
        setCountryInfo(country)
        }}>
        <div className='flag'>
            <img src={country.flag} alt=""  className='object-cover w-screen h-48'/>
        </div>
        <div className='description flex flex-col gap-6 px-8 pt-5 pb-10'>
            <h1 className='nameC text-xl font-bold '>{country.name}</h1>
            <div className=' font-light'>
                <p><span className='font-semibold'>Populations:</span> {formatNumberWithCommas(country.population)}</p>
                <p><span className=' font-semibold'>Region:</span> <span className='nameR'>{country.region}</span></p>
                <p><span className=' font-semibold'>Capital:</span><span className='nameCa'>{country.capital}</span> </p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default CardCountry