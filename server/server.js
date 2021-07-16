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

let allPosts =  [ { 
    id: "stringId", 
    imgSrc: "https://static.toiimg.com/photo/67896140.cms",
    author:'Jimmy', 
    title:"First post", 
    content:"content of the post , could be longer but thats it for now",
    comments: [
        {  user : "first commenter", text:"very good post. Thanks for sharing!!"}
    ]
},
{ 
    id: "stringId1", 
    imgSrc: "https://qymatix.de/wp-content/uploads/2017/02/facts-sales-B2B.png",
    author:'Kim', 
    title:"Second post", 
    content:"content of the post , could be longer but thats it for now",
    comments: [
        { user : "first commenter", text:"very good post. Thanks for sharing!!"},
        { user : "second commenter", text:"very good post. Thanks for sharing!!"},
        { user : "third commenter", text:"very good post. Thanks for sharing!!"}
       
    ]
}
]

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

app.post('/allPosts/add-comment',function (request, response){
    allPosts.filter( (post) =>
        post.id === request.body.id ? post.comments.push(request.body.comment):""
    )
});

app.listen(PORT, function () {});

