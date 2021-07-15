const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 6969;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

let allFriends = [{fName: 'Coach', lName: 'Tim', email: 'tim.broos@becode.org', phone: '0469420666', signatureMove: 'Yeet', language: 'Javascript'}];
let allPosts =  [ { 
    id: 1, 
    author:'Jimmy', 
    title:"First post", 
    content:"content of the post , could be longer but thats it for now",
    comments: [
        { id: 1, user : "first commenter", text:"very good post. Thanks for sharing!!"}
    ]
}]

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.post('/allPosts', function (request, response) {
    allPosts.push(request.body)
});
app.get('/allPosts',function (request, response){
    response.send(allPosts);
});

app.listen(PORT, function () {});
