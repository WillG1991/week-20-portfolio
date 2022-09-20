import React from 'react'
import WeatherApp from '../../assets/img/weather.png'


function Weather() {

  return (
    <section className="my-5" >
    <h2 id="about" class="text-center">5 Day Forecast</h2>
    
    <div className="my-2 borderBox">
    
    <div class="container">
  <div class="row">
    <div class="col">
    <img className="selfie" src={WeatherApp} alt="5 day forecast"/>
    </div>
    <div class="col">
     <h4>
     Website that allows user to search 5 day forecast.
      </h4> 
    </div>
  </div>
</div>
</div>
  </section>
  )
}

export default Weather