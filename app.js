const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile('../dist/index.html');
});

app.listen(3000);