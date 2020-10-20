const request = require('request')

const weather = (lat,long , callback)=>{

    const url = `http://api.weatherstack.com/current?access_key=f57b7d2f486be92116728c59a19d2274&query=${lat},${long}`

    request({url:url , json:true} , (error , response) => {
        if (error){
            callback('Unable to connenct to internet' , undefined)
        }else if (response.body.success === false){
            callback('Unable to fetch location' , undefined)
        }
        else{
            callback(undefined , {
                description : response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                presp: response.body.current.precip
            })
        }
    })

}
module.exports = weather