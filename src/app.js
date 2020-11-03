const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./Utils/geocode')
const weather = require('./Utils/weather')
const currencyCoverter = require('./Utils/currency')
const port = process.env.PORT || 8080
const app = express()

// paths in the folders
const publicPath = path.join(__dirname , '../public')
const viewsPath = path.join(__dirname , '../views')
const partialPath = path.join(__dirname , '../partials')

//to setup handlebars and the path
app.set('view engine' , 'hbs')
app.set('views' , viewsPath)
hbs.registerPartials(partialPath)


// to use static data
app.use(express.static(publicPath))


app.get('' , (req , res)=>{
    res.render('index' , {
        title: 'Weather'
    })
})
app.get('/about' , (req , res)=>{
    res.render('about' , {
        title: 'Currency covert',
       
    })
})
app.get('/currency' , (req,res)=>{
    if (!req.query.convert){
        return res.send({
            error: 'Error'
        })
    }


    const fromTo = req.query.convert

   currencyCoverter(fromTo , (error , response)=>{
       if (error){
          res.send(error)
          return
       }
        res.send(response)
   })

   
    

})
app.get('/help' , (req , res)=>{
    res.render('help' , {
        title: 'Help',
        message: 'How can we help you ?'
    })
})

app.get('/weather' , (req,res)=>{

    if (!req.query.address){
        return res.send({
            error: 'Address is mandatory'
        })
    }
    const address = req.query.address

    geocode(address , (error , {latitude , longitude , location} = {})=>{    // object destructuring otherwise - response
            if (error){
                res.send(error)
                return
            }
            
            weather(latitude , longitude , (error , response)=>{  // used destructured constants otherwise - response.latitude , response.longitude
                if (error){
                    res.send(error)
                    return
                }

                res.send({
                    response: response,
                    location: location
                })
            })


    })
})
app.get('/help/*' , (req , res)=>{

    res.render('404page' , {
        title: '404 Help page not found !!'
    })

})
app.get('*' , (req , res)=>{

    res.render('404page' , {
        title: '404 page not found !!'
    })

})

app.listen(port , ()=>{
console.log(`server started at port: ${port}`)
})