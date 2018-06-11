var express = require("express")

var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/static'))



app.get('/', function(request, response){
    response.send("<h1> Click on one of the images in the following link: </h1> <a href='http://localhost:8008/dogs'> DOGGIES! </a> ")
})

app.get('/dogs', function(request, response){
    response.render('dogs')
})

app.get('/dog1', function(request, response){

    var dogInfo = [
        {
        name: "Molly",
        nickname: "Molly Bear",
        picture: 'http://localhost:8008/images/dog1.jpg',
        food: "Human food",
        age: 3,
        spots: ['inside only!']}
    ]



    response.render('details', {x: dogInfo})
})
app.get('/dog2', function(request, response){

    var dogInfo = [
        {
        name: "Mona",
        nickname: "Dog Dog",
        picture: 'http://localhost:8008/images/dog2.jpg',
        food: "chicken",
        age: 5,
        spots: ["bed ", "couch"]}
    ]



    response.render('details', {x: dogInfo})
})

app.get('/dog3', function(request, response){

    var dogInfo = [
        {
        name: "Boo",
        nickname: "BooBoo",
        picture: 'http://localhost:8008/images/dog3.jpg',
        food: "Dog Food",
        age: 3,
        spots: ["carpet",' bed']}
    ]


    

    response.render('details', {x: dogInfo})
})

app.listen(8008, function(){
    console.log("listening on port 8008")
    console.log("go to http://localhost:8008/")
})