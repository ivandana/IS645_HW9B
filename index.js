// Load the Express package as a module
const express = require("express");

// Access the main Express object
const app = express();

const multer = require("multer");
const upload = multer();

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(express.static("public"));
app.use(express.static("css"));

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});
//for ex1
app.get("/ex1", (request, response) => {
    response.sendFile(`${__dirname}/views/ex1.html`);
});
app.post("/ex1",upload.array(), (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    response.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${email}`);
});

// ex2
app.get("/api/countries",(request,response)=>{
    response.sendFile(`${__dirname}/views/ex2.html`);
});


// 
app.post("/api/countries",jsonParser, (request, response) => {
    const name = request.body.name;
    const number = request.body.countries.length;
    response.send(`Your name is ${name} and you visited ${number} countries. Keep Travelling!`);
});

//ex3
app.get("/api/articles", (request, response) => {
    response.sendFile(`${__dirname}/views/ex3.html`);
});
const arrayArticles=[];
app.post("/api/articles",upload.array(),(request,response)=>{
    const title=request.body.title;
    const content=request.body.content;

    const articles = {title: title, content: content}
    arrayArticles.push(articles);
    response.send(`New article added successfully with title "${title} and ID ${array.length}`);
    
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});
  