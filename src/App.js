import React, {useState} from "react";
import axios from "axios";

function App() {
  const[data,setData]=useState({})
  const [location,setLcocation]=useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9526b8e065072662a6f617ba8a54deb6`
  const searchLocation=(event)=>{
    if (event.key ==='Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLcocation('')
  }
  }
  return (

    
    <div className="App">
      <div className="search">
        <input
        value={location}
        onChange={event=>setLcocation(event.target.value)}
        onKeyPress={searchLocation}
        type="text"/>
      </div>
      
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1>:null}
            

          </div>
          <div className="description">
            {data.weather? <p>{data.weather[0].main}</p>:null }
            
          </div>
        </div>

        {data.name!==undefined&&
        
        <div className="bottom">
          <div className="feels">
            {data.main? <p className="bold">{data.main.feels_like.toFixed()}°F</p>:null}
            <p>feels like</p>
            </div>
            <div className="humidity">
            {data.main? <p className="bold">{data.main.humidity}%</p>:null}

              <p>humidity</p>

            </div>
            <div className="wind">
            {data.wind? <p className="bold">{data.wind.speed}MPH</p>:null}

              <p>Wind speed</p>
            </div>
        </div>
}</div>

 
    </div>
  );
}

export default App;
