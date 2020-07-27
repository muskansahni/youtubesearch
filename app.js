var express= require("express");
var app= express();
var bodyParser=require("body-parser");
var cors=require("cors");
var youtube=require("youtube-search");
const { response } = require("express");
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());
app.use(cors());
app.get("/search",function(req,res){

});
app.post("/search",function(req,res){
const keyword= req.body.keyword;
var options = {
    maxResults: 10,
    key: 'AIzaSyCm6D4vD14w2JpR9JnuZYlaoPf5bsXSplY'
  };
 youtube(keyword,options, async function(err,data){
     if(err){
         console.log(err);
     }
     else{
  
        await res.json(data);
     }
 });
  
  
   
});
app.listen(3000,function(){
    console.log("started");
})
