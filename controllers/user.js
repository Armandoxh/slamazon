const db = require('../models/index')
const User = require('../models/User')
const Inventory = require('../models/Inventory');
const Order = require('../models/Order')
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

module.exports = {
    index,
    addOrder,
    placeOrder
    
}

function index (req, res){
  

        User.findById(req.user._id).populate('basket')
        .populate( 'orders').exec(function(err, foundUser){
            // console.log("Found user" , foundUser)
           if(err) return console.log(err)
           
         
        res.render('user/index',{
         foundUser
        })


       
        // console.log(foundUser.orders)
        
        foundUser.basket={}
        foundUser.save()
    })
}


function placeOrder(req,res){
   
    // let newOrder = copyBasket(req.user._id,req.user.basket)
  
    let copiedBasketIDS = copyBasket(req.user.basket)

    console.log(copiedBasketIDS)

    let newOrder = new Order()
    for (let i = 0; i < copiedBasketIDS.length; i++) {
        newOrder.pendingOrders.push(copiedBasketIDS[i])
    }
    //instead of pushing the order to the user object push the ref to the order!!_!_!_!_
    console.log(newOrder)
    

    // newOrder.save()
    Order.create(newOrder, function(err, result) {
        if (err) {
        } 
        console.log("RESULT" , result)
      });


    //   Order.findById(newOrder._id).populate('pendingOrders').exec(function(err, foundOrder){
    //         if(err) console.log(err)
    //         console.log(foundOrder)
    //   })

      
   
     //may have to split() this
    //  req.user.orders.push(found.basket)
        // console.log("basket at the start of /placeorder: " , found.basket)
        // console.log("orders at the beginning of /placeorder after push:" ,req.user.orders)
        // console.log("pending orders at the start of /placeorer: ", found.orders.pendingOrders)
        //   console.log("Order that was created in the first findOne before populate: ", newOrder)
        //   found.orders.push(newOrder)
        //   console.log("oAFTER ORDERS GOT PUSHED TO USER: " ,req.user)
        // newOrder.update()
        // found.update()
  
    User.findById(req.user._id)
    // .updateOne(
    //     { _id: req.user._id },
    //     { $push: { orders: foundUser.basket } })
    .populate('basket')
    .exec(function(err, foundUser){
        foundUser.orders.push(mongoose.mongo.ObjectId(newOrder._id))
        // console.log("Found user" , foundUser.basket)

       if(err) return console.log(err)
    //    foundUser.orders.push(foundUser.basket._id)
//   console.log("Order in the second findOne (with the populate on basket and orders:" ,foundUser.orders)
  // console.log("ORDERS", foundUser.orders)

  

  User.findById( req.user._id ).populate('orders'  ,'pendingOrders').exec(function(err,found){
      if(err) return console.log(err)
      console.log("Found INSIDE POPULATE OF USERS" , found.pendingOrders)

 
  foundUser.basket={}
  foundUser.save()
  console.log("found users orders after push" , found, req.user.orders)

  res.render('user/index',{
    foundUser,
    found
   })
})

})
      
//601c7c54d1132c5542e6a998
    // console.log("code after the render")
  }

  const copyBasket = function(basket){
        let copiedInventoryIDS = []
        for (var key in basket) {
            if (basket.hasOwnProperty(key)) {
              item = basket[key];
              copiedInventoryIDS.push(item)
            }
          }
  return copiedInventoryIDS;
  
  
}



function addToBasket(req,res,next){

    console.log ( "ADD TO bASKET REDIRECT OF USER CONTROLLER")
    console.log("REQ: " , req)
    console.log("RES : " , res)

  //   const basket = new db.Basket();
  console.log("2341234123412341234")
  
    User.find({},function(err, foundUser){
      if(err) return console.log(err)
  
      // foundBasket.items.push(req.body.itemID)
      // foundBasket.save()
    //  foundUser.basket.push(req.body.itemID)

      console.log("Found User:" ,foundUser[0].basket)
      foundUser[0].basket.push(req.body.itemID)
      console.log("req.user: ", req.user)
      console.log("FOUND BASKET ITEMS: ", foundUser)
      console.log("req - body: ", req.body, )
      foundUser[0].save()
      
    
      res.render('user/marketplace', {foundUser});
  
    })
  //   basket.save(function(err) {
  //       // one way to handle errors
  //       if (err) return res.redirect('/users/marketplace');
  //       console.log(basket);
  //       // for now, redirect right back to new.ejs
  //       res.redirect('/users/marketplace');
  //     });

  // res.redirect('user/marketplace')
    

  
}


function addOrder(req,res,next){
    req.user.orders.push(req.body);
    req.user.save(function(err){
        res.redirect('/index')

    })
}