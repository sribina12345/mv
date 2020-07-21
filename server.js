const express = require("express");
const app = express();
app.get("/", function(req, res){
  res.send("<h1>heloo,wolrd</h1>");
  //console.log(request);
});
app.get("/contact",function(req,res){
    res.send("contact: sribinac@gmail.com")
});
app.get("/about",function(req,res){
    res.send("about:   i am sribina i love reading")
});
app.get("/hello", function(req,res){
    res.send("<ul><li>cofee</li><li>tea</li><li>powder</li></ul>")
});
app.listen(3000, function(){
    console.log("server started");
});

