const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))


var submissions = []


app.get('/', function(req,res){
    res.render('index.ejs', {
        submissions : submissions
    })
})



app.post('/', function(req,res){
    

    let submission = {
        name: req.body.name,
        input: req.body.submission
    }

    submissions.push(submission)
    console.log(submission.input)
    console.log(submissions)
    res.redirect('/')
})




app.listen(6964, '127.0.0.1', function(){
    console.log("Server Running")
})