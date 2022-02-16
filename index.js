var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/UsersDB",{useNewUrlParser:true})

const newUserLogInSchema=new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    phoneNumber:Number
})

const User= mongoose.model("User",newUserLogInSchema);



//newUser.save();
//mongoose.connection.close();




app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render(__dirname+"/public/wad.html",{UserName:""});
})
app.get("/AboutUs",function(req,res){
    res.sendFile(__dirname+"/public/AboutUs.html")
})
app.get("/SignIn",function(req,res){
    res.sendFile(__dirname+"/public/signin.html")
})

app.post("/SignIn",function(req,res){


    // User.updateOne({name:"Yashas"},{$set: {password:"12345678"}},function(err){
    //     if(err){}
    //     else
    //     {
    //         console.log("updated")
    //     }
    // })

   User.findOne({name :req.body.userName,password:req.body.password1},function(err,username){
       if(err){console.log("ERROR HAS OCCURED ")}
       else
       {
           if(username==null)
           {
                res.write("USER NOT FOUND")
                res.send();
           }
           else
           {
              console.log("USER FOUND ")
              res.render(__dirname+"/public/wad.html",{UserName:req.body.userName});
           }
           
       }
   })

})

app.get("/SignUp",function(req,res){
    res.sendFile(__dirname+"/public/signup.html")
})

app.post("/SignUp",function(req,res){

    
    User.findOne({name :req.body.name},function(err,username){
        if(err){console.log("ERROR HAS OCCURED ")}
        else
        {
            if(username==null)
            {
               //console.log("USER NOT FOUND ")
                const user=new User({
                    name:req.body.name,
                    password:req.body.password,
                    email:req.body.email,
                    phoneNumber:req.body.phoneNo
                
                })
                user.save()
                res.render(__dirname+"/public/wad.html",{UserName:req.body.name});

            }
            else
            {
               ///redirect to same page saying user already exits 
               //use EJS
                
               console.log("USER ALREADY EXISTS1")
               res.write("USER ALREADY EXISTS")
               res.send();
            }
            
        }
    
    })
    
    
    
  
    

  
})
app.get("/Booking",function(req,res){
    res.sendFile(__dirname+"/public/Booking-Pre.html")
})
app.post("/Booking",function(req,res){
   
    res.write(req.body.City1);
    res.send();
})
app.listen(3000,function(){console.log("Sever Listening at 3000");});