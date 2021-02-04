const db = require('../models/index')
const User = require('../models/User')
const Inventory = require('../models/Inventory');

module.exports = {
    index,
    addOrder,
    placeOrder
    
}

function index (req, res, next){
    User.find({}, function(err, users){
        console.log('redirecting to /index from user controller')
        res.render('user/index',{
         users,
         user:req.user
        })
    })
}


function placeOrder(req,res){
   
    //needs to take the basket
    //needs to pass it to the home page 
    //home page needs to render a card with the order

    User.findById(req.user._id,( err, foundUser ) => {
        if(err) console.log(err)
        console.log("PLACEORDER FoundUser" , foundUser)


        
        console.log("WE MADE IT TO THE PLACEORDER CONTROLLER")
        res.render('user/index', {foundUser})
      });

   

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