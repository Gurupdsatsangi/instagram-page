const express=require("express");
const app=express();
const path=require("path");

let port =8080;
app.listen(port,()=>{
  console.log("listening");
})
 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/", (req, res) => {
    res.render("home.ejs");
  });
app.get("/rolldice",(req,res) =>{
  let num = Math.floor(Math.random()*6)+1;
  res.render("rolldice.ejs",{num});
});
app.get("/ig/:username",(req,res)=>{
  let{username}=req.params;
  const instadata=require("./views/data.json");
  const data = instadata[username]
  res.render("instagram.ejs",{data});
})
