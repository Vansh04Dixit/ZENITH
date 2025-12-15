require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const secretKey = process.env.secret_key;
const HoldingsModel = require('./model/HoldingsModel');
const PositionsModel = require('./model/PositionsModel');
const cors = require('cors');
const OrdersModel = require('./model/OrdersModel');
const UserModel = require('./model/UserModel');
const session = require('express-session');
const isAuthenticated = require('./middleware')

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }));
  app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      secure: false, 
      httpOnly: true,
    },
  }));

const startServer = async ()=>{
    await mongoose.connect(uri);
    console.log("DB Connected");
}
startServer();

// app.get('/addpositions', async(req , res)=>{
//     let tempPostionsData = [
//     {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//   ];

//   tempPostionsData.forEach((item)=>{
//        let newPositions = new Position ({
//         product: item.product,
//         name : item.name,
//         qty : item.qty,
//         avg : item.avg,
//         price: item.price,
//         net: item.net,
//         day : item.day,, isAuthenticated
//         isLoss: item.isLoss,
//        })        
//        console.log(newPositions);
//        newPositions.save();
//     })
//     res.send("Data Saved");
// })

app.get('/' , (req , res )=>{
    res.send("App Started")
})

app.get('/check-auth', (req, res) => {
    if (req.session.userId) {
      res.send({ loggedIn: true });
    } else {
      res.send({ loggedIn: false });
    }
});

app.get('/allholdings', isAuthenticated, async(req ,res)=>{
    let allHoldingsData = await HoldingsModel.find({});
    res.json(allHoldingsData);
    // console.log('Below is Data of Holding',allHoldingsData);
})

app.get('/allpositions',isAuthenticated, async(req ,res)=>{
    let allPositionsData = await PositionsModel.find({});
    res.json(allPositionsData);
    // console.log('Below is Data of postions ',allPositionsData)
})

app.post('/neworder' , async(req , res)=>{
    let newOrder = new OrdersModel( {
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    await newOrder.save();
    res.json(newOrder);
})

app.post('/signup', async(req , res)=>{
    let newUser = new UserModel({
        fullName: req.body.fullName,
        email : req.body.email,
        password : req.body.password,
    }) 
    await newUser.save();
    res.json(newUser);
    // console.log(newUser);
})

app.post('/login', async(req , res)=>{
    let fullName = req.body.fullName;
    let pass = req.body.pass;
    let existingUser = await UserModel.findOne({fullName : fullName});

    if(!existingUser){
        return res.status(404).send('User not found');
    }

    if(existingUser.password != pass){
        return res.status(401).send('Incorrect Password');
    }

    req.session.userId = existingUser._id;
    return res.status(200).send('Login successful');
})

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Logout failed');
      }
  
      res.clearCookie('connect.sid');
      return res.status(200).send('Logged out successfully');
    });
  });
  
  
app.get('/seeorders', async(req, res)=>{
    let orders = await OrdersModel.find({});
    res.json(orders);
    // console.log(orders)
})

app.listen(PORT , ()=>{
    console.log("You are ready to go.");
})