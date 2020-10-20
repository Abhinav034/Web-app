const request = require('request')

const geocode = (address , callback) =>{

    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=pk.eyJ1IjoiYWJoaTAzNCIsImEiOiJja2Z6b3B4NXEyY2ExMnNzM2NjM3czbDY3In0.93sxekj1gTBiyvHOfC1Yqg&limit=1`

    request({url:url , json:true} , (error , response) =>{

        if (error){
            callback('Unable to connect to internet' , undefined)
        }else if (response.body.features.length === 0 ){
            callback('Invalid location' , undefined)
        }else{
        
            callback(undefined , {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode