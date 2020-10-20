    const input = document.getElementById('inputText')
    const forecast = document.getElementById('forecast')
    const location1  = document.getElementById('location')

 document.querySelector('form').addEventListener('submit' , (e)=>{
    e.preventDefault()
      
       fetch(`http://localhost:3000/weather?address=${input.value}`).then((response)=>{
           
               // forecast.textContent = 'Loading...'
                location.textContent = ''
            response.json().then((data)=>{
                if (data.error){
                    
                    forecast.textContent = "Please enter a valid address"

                    return
                }
               const currentForecast  = `Overview: ${data.response.description} , Temperature: ${data.response.temperature}°C , Chances of rain: ${data.response.presp}%`
              forecast.textContent = currentForecast
              location1.textContent = `Location: ${data.location}`
            })
})

})