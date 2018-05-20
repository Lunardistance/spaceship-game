//Getting Express to create the serverVV
var express = require('express')
//Getting path to be able to declare the path in path.joinVV
var path = require('path')
//Compresses the code VV
var compression = require('compression')

//initializes server VV
var app = express()
//Initializes the compressionVV
app.use(compression());
//Exposes the pathVV
app.use(express.static(path.join(__dirname, 'public')))
//A route that will redirect all the routes, any request to the public
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


var PORT = process.env.PORT || 5027;
app.listen(PORT, function(){
    console.log('production express server running at:' + PORT)
});