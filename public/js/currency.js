
const input = document.getElementById('amount')
const from = document.getElementById('from')
const to = document.getElementById('to')
const p = document.getElementById('result')
document.querySelector('form').addEventListener('submit' , (e)=>{
    e.preventDefault()

    const inputValue = `${from.value}_${to.value}`
    
    fetch(`/currency?convert=${inputValue}`).then((response)=>{
        response.json().then((data)=>{
            if (data.error){
              return  p.innerHTML = data.error
            }
            const multiplier = data[inputValue]
            p.innerHTML = multiplier*input.value
           
        })
    })
})