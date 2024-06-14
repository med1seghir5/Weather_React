import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Weather() {

  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [warning, setWarning] = useState(null);

  const handleInput = () => {
    const foundItem = data.find(item => item.id === parseInt(input));

    if (foundItem) {
      setWeatherInfo(foundItem);

      if (foundItem.Warning && foundItem.Warning.war === true) {
        setWarning(foundItem.Warning);
      } else {
        setWarning(null);
      }
    } else {
      setWeatherInfo({ wilaya: 'not found' });
      setWarning(null);
    }

    setInput('');
  };

  useEffect(() => {
    axios.get('./FakeApi.json')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='bg-gradient-to-r from-[#47BBE1] to-[#0093D1] text-[#ffff] min-h-screen'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center space-x-3 p-4'>
          <input 
            type='number' 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            className='text-black rounded-xl text-center w-64'
          />
          <button onClick={handleInput} className='rounded-lg'><img src='./Pic/search_24px.svg' alt='Search logo' /></button>
        </div>

        <div className='p-10'>
          {weatherInfo && (
            <>
              {weatherInfo.wilaya !== 'not found' && (
                <div className='p-4'>
                  <div className='flex flex-col items-center space-y-6 text-center'>
                    <p className='text-center text-7xl font-poppins font-bold'>{weatherInfo.wilaya}</p>
                    <img src={weatherInfo.Pic} alt={weatherInfo.description} className='h-56'/>
                    <p className='font-mono font-semibold text-6xl'>{weatherInfo.temperature}</p>
                    <p className='font-mono font-semibold text-3xl sm:font-mono sm:font-semibold sm:text-4xl'>{weatherInfo.description}</p>
                  </div>
                  
                  <div className='flex flex-col items-center text-center font-mono font-bold text-3xl p-8'>
                    <div className='flex flex-row items-center'>
                      <img src='./Pic/hum.svg' className='h-16' alt='logo'/> 
                      | {weatherInfo.humidity}
                    </div>
                    <div className='flex flex-row items-center text-center'>
                      <img src='./Pic/windy.svg' className='h-16' alt='logo' />
                      | {weatherInfo.vent}
                    </div>
                  </div>
                </div>
              )}
              {warning && (
                <div className='flex flex-col items-center text-center space-y-3 font-mono font-semibold bg-opacity-75 bg-red-600 rounded-3xl shadow-slate-600 shadow-xl pt-4 px-4'>
                  <h1 className='text-5xl sm:text-6xl'>Warning</h1>
                  <h1 className='text-xl'>{warning.Newweather}</h1>
                  <h1 className='text-xl'>{warning.Time}</h1>
                  <img src={warning.NewPic} alt='Warning' />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

