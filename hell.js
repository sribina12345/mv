const express = require("express");
const app = express();
app.get("/", function(request, response){
  //response.send("hello");
  console.log(request);
});
app.listen(3000, function(){
    console.log("server started");
});
 