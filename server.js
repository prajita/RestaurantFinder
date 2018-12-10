const express = require("express");
const path =  require("path");
const app = express();

app.use(express.static(path.join(__dirname,'dist')));
console.log('Inside server js ', path.join(__dirname,'dist'));
app.get('/*',function(req,res){
res.sendfile(path.join(__dirname,'dist','index.html'))
});
app.listen(3000,()=>{console.log("app is up!!")})
