const express = require('express');
import { Request, Response, NextFunction } from "express";
const bcrypt = require('bcrypt');
const router = express.Router();
const Meals = require('../Schemas/MealsSchema')
const Resturant = require('../Schemas/ResturantSchema')
const Order = require('../Schemas/OrderSchema')

router.post('/signup', async function( req:Request, res:Response, next:NextFunction) {

    let meals = {
        name : "Jellof Rice",
        price : "#2000",
        resturant : "dtcfyv4676ras7687grsdf69efds78a7sf9erawfs78eafseawa"
    }

    let {firstName, lastName, email, password, resturantName, resturantLocation} = req.body
    // password = 2

    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds);
    password = bcrypt.hashSync(password, salt);


     let user =  {firstName, lastName, email, password, resturantName, resturantLocation}
    const addmeals = await Resturant.create(user);

    res.send(addmeals)

})

router.post('/signin', async function( req:Request, res:Response, next:NextFunction) {
  
  let { email, password} = req.body

  let check = await Resturant.findOne({email : email});
  // res.send(check)
  if(check){
    // let passCheck = bcrypt.compare()
    bcrypt.compare(password, check.password, (err:Error, rest:any) => {
      if (err) return (err);
      if(rest){
        res.send ("Logged in");
      }else{
        res.send("Incorrect Usernames and Password")
      }
     });
  }else{
      res.send("incorrect Details")
  }


})




router.post('/orders', async function( req:Request, res:Response, next:NextFunction) {
  
    let {id} = req.body
    let resturant = id
    let orders = await Order.find({resturant:"613d8102cdee3848ce9e63bf"})

    if(orders){
        let total = orders.reduce((acc:any,val:any)=>{
            let price = val.price.split('')
            price.shift()
            return acc + parseInt(price.join(''))
        }, 0)
        res.json ({
            total : total,
            orders : orders
        })
    }else{
        res.json({
            total : 0,
            orders : "You dont have any current order"
        })
    }
  
  })


router.get('/addmeal', async function( req:Request, res:Response, next:NextFunction) {

    let meals = {
        name : "Jellof Rice",
        price : "#2000",
        resturant : "613d8102cdee3848ce9e63bf"

    }
    const addmeals = await Meals.create(meals);
    res.send("ok")

})

router.put('/deliver', async function( req:Request, res:Response, next:NextFunction) {

    let {id} = req.body
    // {age: 17}, {$set:{name:"Naomi"}}
    let update = await Order.findOneAndUpdate({"_id":id},{$set:{status:"Delivered"}})
    res.send(update)
})

module.exports = router