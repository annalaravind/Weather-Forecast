import React, { useState } from 'react';
import './React.css';
import { BsSearch } from 'react-icons/bs';

const WeatherApp = () => {

    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [windSpeed, setWindSpeed] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e2d7418c2c0cabc9be2b9ed602fa84b`)
            .then((convert) => convert.json())
            .then((data) => {
                const kelvin = data.main.temp;
                const celsius = kelvin - 273.15;
                setTemp(`Temperature in ${city}\n is ${Math.round(celsius)} °C`);
                const humidity = data.main.humidity;
                setHumidity(`Humidity - ${humidity}`);
                const windSpeed = data.wind.speed;
                setWindSpeed(`WindSpeed - ${windSpeed}`);
                setCity("");
                // setTemp("Temperature in "+" \n "+city+" "+Math.round(celsius)+" °C ");
            })
            .catch((error) => { console.log(error) });
    }

    const changeHandler = (e) => {
        setCity(e.target.value);
    }


    return (
        <div className='weather_back'>
            <div className='weather'>
                <form className="form" onSubmit={submitHandler}>
                    <input type='search'
                        name='search'
                        value={city}
                        onChange={changeHandler}
                    />
                    <button type='submit'>
                        <BsSearch className='logo' />
                    </button>
                    <div className='result'>
                        <span>
                            {temp}<br />
                            {humidity}<br />
                            {windSpeed}<br />
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WeatherApp;