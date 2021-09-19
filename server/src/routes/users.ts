import express, { Request, Response, NextFunction } from 'express'
// import bcrypt from 'bcryptjs';
const bcrypt = require('bcrypt');
const router = express.Router();
const Meals = require('../Schemas/MealsSchema')
const User = require('../Schemas/UserSchema')
const Meal = require('../Schemas/MealsSchema')
const Order = require('../Schemas/OrderSchema')

router.post('/signup', async function( req:Request, res:Response, next:NextFunction) {

    let meals = {
        name : "Jellof Rice",
        price : "#2000",
        resturant : "dtcfyv4676ras7687grsdf69efds78a7sf9erawfs78eafseawa"
    }

    let {firstName, lastName, email, password} = req.body
    // password = 2

    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds);
    password = bcrypt.hashSync(password, salt);


     let user =  {firstName, lastName, email, password}
    const addmeals = await User.create(user);

    res.send("ok")

})


router.post('/getmeals', async function( req:Request, res:Response, next:NextFunction) {

  let meals = {
      name : "Jellof Rice",
      price : "#2000",
      resturant : "dtcfyv4676ras7687grsdf69efds78a7sf9erawfs78eafseawa"
  }

  let {mealName} = req.body
  // password = 2

  


  //  let user =  {firstName, lastName, email, password}
  // let mealregex = /meal/
  const addmeals = await Meal.find({ "name" : { $regex: mealName, $options: 'i' }});

  res.send(addmeals)

})
router.post('/makeorder', async function( req:Request, res:Response, next:NextFunction) {
interface meals {
  customer: String
  resturant?: String
  meal: String
  price?: String
}
  let meals:meals = {
      customer : "613d7d6fa6caca3d44ff41bf",
      // price : "#2000",
      // resturant : "613d8102cdee3848ce9e63bf",
      meal: "613da1f6ef65ace82ffc50a1"
  }

  // let {mealName} = req.body
  // password = 2

  const findMeal = await Meal.findOne({"_id" : meals.meal})
  console.log(findMeal)
  // const resturant = findMeal.resturant
  meals["resturant"] = findMeal.resturant
  meals["price"] = findMeal.price

  let result = await Order.create(meals)

  res.send(result)

})
router.post('/orders', async function( req:Request, res:Response, next:NextFunction) {
  //   let {customer, price, resturanta, meal, status } = req.body
     
      let {id} = req.body
      let resturant = id
      let orders = await Meals.find({resturant:"613d8102cdee3848ce9e63bf"})
  
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
router.post('/signin', async function( req:Request, res:Response, next:NextFunction) {
  
  let { email, password} = req.body

  let check = await User.findOne({email:email});
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
  }


})


/* GET users listing. */
router.get('/', function( req:Request, res:Response, next:NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;

