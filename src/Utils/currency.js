const request = require('request')

const currencyCoverter = (from_To , callback)=>{

    const url = `https://free.currconv.com/api/v7/convert?q=${from_To}&compact=ultra&apiKey=d5424677bd2baca2a671`

request({url:url , json:true} , (error , response)=>{
    if (error){
      return  callback(console.log("Error occurred" , undefined))
    }
      
    callback(undefined , response.body)
})
}

// currencyCoverter('USD_CAD' , (error , response)=>{
//     if (error){
//        return console.log(error)
//     }
//     console.log(response)
// } )

module.exports = currencyCoverter




