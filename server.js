const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
const weatherData=require('./Data/weather.json')
app.use(cors());
require('dotenv').config();


app.use(cors())
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})


app.get('/weather/:city', (req, res)=>{
   
    if( req.params.city.toUpperCase()==='AMMAN'){
    res.json(weatherData.find(e=>e.city_name=='Amman'));
    }
    else if (req.params.city.toUpperCase()==='PARIS') {
        res.json(weatherData.find(e=>e.city_name=='Paris'));
    }
    else if(req.params.city.toUpperCase()==='SEATTLE'){
        res.json(weatherData.find(e=>e.city_name=='Seattle'));
    }else{
        res.send('not found this location')
    }
})

app.listen(8000) // kick start the express server to work