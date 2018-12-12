const express = require("express");
const path =  require("path");
const app = express();

app.use(express());
//app.use(express().json());
app.use("/", express.static(`${__dirname}/dist`));

/*app.use(express.static(path.join(__dirname,'dist')));
console.log('Inside server js ', path.join(__dirname,'dist'));
app.get('/*',function(req,res){
res.sendFile(path.join(__dirname,'dist','index.html'))
});*/
var port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0',()=>{console.log("app is up!!")})
