const express = require('express')
const app = express();
app.use((req,res,next)=>{
console.log(req.url);
next();
});
app.use((req,res,next)=>{
console.log(req.method);
       next();
});
app.get("/",(req,res,next)=>{
  console.log("Contact /",req.method);
  res.send("<p> Hello my name is lavkush</p>")
})
app.get("/contact-us",(req,res,next)=>{
  console.log("Contact /-us",req.method);
  res.send(`
    <h1>Enter your details</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder=" Enter your name"/>
    <input type="text" name="E-mail" placeholder=" Enter your E-mail"/>
    <input type="submit"/>
    </form>
        `)
})
app.post("/contact-us",(req,res,next)=>{
  res.send("<p> THank you</p>")
})

// app.use((req,res,next)=>{
//   res.send("<p> Hello my name is lavkush</p>")
// });

app.listen(3001);