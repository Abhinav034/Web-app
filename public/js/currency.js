
const input = document.getElementById('amount')
const from = document.getElementById('from')
const to = document.getElementById('to')
const p = document.getElementById('result')
document.querySelector('form').addEventListener('submit' , (e)=>{
    e.preventDefault()

    const inputValue = `${from.value}_${to.value}`
    
    fetch(`http://localhost:3000/currency?convert=${inputValue}`).then((response)=>{
        response.json().then((data)=>{
            if (data.error){
              return  p.innerHTML = data.error
            }
            const multiplier = data[inputValue]
            p.innerHTML = multiplier*input.value
           
        })
    })

    // console.log(input.value)
    // console.log(from.value)
    // console.log(to.value)

})