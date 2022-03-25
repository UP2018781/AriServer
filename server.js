const express = require('express');
const app = express();
const port = 8080;

async function returnText(req,res){
    res.send('https://www.pornhub.com/');
}

app.use(express.static('public'));
app.get('/text',returnText)

app.listen(port,()=>{console.log(`server listening on port ${port}`)})
