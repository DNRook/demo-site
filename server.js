import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, collection,setDoc,getDoc,updateDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//mongoose setup


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdaI5Ll1WNNg6jT_Z0BSCtQiiE2WNDXg8",
  authDomain: "ecom-project-edf25.firebaseapp.com",
  projectId: "ecom-project-edf25",
  storageBucket: "ecom-project-edf25.appspot.com",
  messagingSenderId: "173979262932",
  appId: "1:173979262932:web:c37caaabbc6c4e0d964041"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);


const app=express();
const port= process.env.PORT || 3000;
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//-----------------------------------middleware------------------------/
//this line allows me to load my static pages in the public folder
//static pages are prerendered pages (i.e. index.html), dynamic pages are rendered from the 
//server side

app.use(express.static('public'));
//express.json() is a built in middleware function in Express. 
//It parses incoming JSON requests and puts the parsed data in req.body.
//enables form sharing
app.use(express.json());

//firebase setup
const db=getFirestore();

//---------------------------------routes----------------------------/

//home route
app.get('/', (req,res)=>{
    //sends the file on this path to the interface
    res.sendFile('index.html',{root:'public'});
})

//add product page route
app.get('/add-product', (req,res)=>{
    //sends the file on this path to the interface
    res.sendFile('add-product.html',{root:'public'});
})

//seller route
app.get('/seller',(req,res)=>{
    res.sendFile('seller.html',{root:'public'})
})
app.post('/seller',(req,res)=>{
    const {username,address, about, number, email}=req.body;
    if (!username.length || !address.length || !about.length || number.length<10) {
       console.log(username,address, about, number, email); 
       //res.json({'alert':'there is something wrong'})
    }
    else{
        const sellers=collection(db, "seller");
        setDoc(doc(sellers,email),req.body).then(data=>{
            const users=collection(db,"users");
            updateDoc(doc(users,email),{
                seller:true
            })
            .then(data=>{
                res.json({'seller':true})
            })
        })
    }
})

//login route
app.get('/login',(req,res)=>{
    res.sendFile('login.html',{root:'public'})
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    if(!email.length|| !password.length){
        res.json({'alert':'fill all the inputs'})
    }
        const users=collection(db,'users');
        getDoc(doc(users,email)).then(user=>{
            if(!user.exists()){
                return res.json({'alert':'user does not exist'})
            }
            else{
                bcrypt.compare(password,user.data().password,(err, result)=>{
                    if(result){
                        let data=user.data();
                        return res.json({
                            username:data.username,
                            email:data.email,
                            seller:data.seller
                        })
                    }
                    else{
                        return res.json({'alert':'wrong password'})
                    }
                })
            }
        })
})

//signup route
app.get('/signup',(req,res)=>{
    res.sendFile('signup.html',{root:'public'});
})


app.post('/signup',async(req, res)=>{

    const {username,password,email,number}=req.body;

    if(username.length<3){
        res.json({'alert':'not valid user'})
    }
    else if(!email.match(validRegex)||email===undefined){
        res.json({'alert':'not valid email'})
    }
    else if(password.length<6){
        res.json({'alert':'not valid password'})
    }
    else if(number.length<10||number.length>10){
        res.json({'alert':'not valid phone number'})
    }
    else
    {
    const users=collection(db,'users');

    getDoc(doc(users,email)).then(user=>{
        if(user.exists()){
            return res.json({'alert':'email already exists'})
        }
        else
        {
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(password,salt,(err,hash)=>{
                    req.body.password=hash;
                    req.body.seller=false;

                    setDoc(doc(users,email),req.body).then(data=>{
                       res.json({
                            username:req.body.username,
                            email: req.body.email,
                            seller:req.body.seller,
                        })
                    })
                })
            })
        }
      })
    }
})


app.listen(port,()=>{
    console.log(`listening on port ${port}...`);
})