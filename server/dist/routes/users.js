"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import bcrypt from 'bcryptjs';
var bcrypt = require('bcrypt');
var router = express_1.default.Router();
var Meals = require('../Schemas/MealsSchema');
var User = require('../Schemas/UserSchema');
var Meal = require('../Schemas/MealsSchema');
var Order = require('../Schemas/OrderSchema');
router.post('/signup', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var meals, _a, firstName, lastName, email, password, saltRounds, salt, user, addmeals;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    meals = {
                        name: "Jellof Rice",
                        price: "#2000",
                        resturant: "dtcfyv4676ras7687grsdf69efds78a7sf9erawfs78eafseawa"
                    };
                    _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password;
                    saltRounds = 10;
                    salt = bcrypt.genSaltSync(saltRounds);
                    password = bcrypt.hashSync(password, salt);
                    user = { firstName: firstName, lastName: lastName, email: email, password: password };
                    return [4 /*yield*/, User.create(user)];
                case 1:
                    addmeals = _b.sent();
                    res.send("ok");
                    return [2 /*return*/];
            }
        });
    });
});
router.post('/getmeals', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var meals, mealName, addmeals;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    meals = {
                        name: "Jellof Rice",
                        price: "#2000",
                        resturant: "dtcfyv4676ras7687grsdf69efds78a7sf9erawfs78eafseawa"
                    };
                    mealName = req.body.mealName;
                    return [4 /*yield*/, Meal.find({ "name": { $regex: mealName, $options: 'i' } })];
                case 1:
                    addmeals = _a.sent();
                    res.send(addmeals);
                    return [2 /*return*/];
            }
        });
    });
});
router.post('/makeorder', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var meals, findMeal, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    meals = {
                        customer: "613d7d6fa6caca3d44ff41bf",
                        // price : "#2000",
                        // resturant : "613d8102cdee3848ce9e63bf",
                        meal: "613da1f6ef65ace82ffc50a1"
                    };
                    return [4 /*yield*/, Meal.findOne({ "_id": meals.meal })];
                case 1:
                    findMeal = _a.sent();
                    console.log(findMeal);
                    // const resturant = findMeal.resturant
                    meals["resturant"] = findMeal.resturant;
                    meals["price"] = findMeal.price;
                    return [4 /*yield*/, Order.create(meals)];
                case 2:
                    result = _a.sent();
                    res.send(result);
                    return [2 /*return*/];
            }
        });
    });
});
router.post('/orders', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, resturant, orders, total;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.body.id;
                    resturant = id;
                    return [4 /*yield*/, Meals.find({ resturant: "613d8102cdee3848ce9e63bf" })];
                case 1:
                    orders = _a.sent();
                    if (orders) {
                        total = orders.reduce(function (acc, val) {
                            var price = val.price.split('');
                            price.shift();
                            return acc + parseInt(price.join(''));
                        }, 0);
                        res.json({
                            total: total,
                            orders: orders
                        });
                    }
                    else {
                        res.json({
                            total: 0,
                            orders: "You dont have any current order"
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
});
router.post('/signin', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, check;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, email = _a.email, password = _a.password;
                    return [4 /*yield*/, User.findOne({ email: email })];
                case 1:
                    check = _b.sent();
                    // res.send(check)
                    if (check) {
                        // let passCheck = bcrypt.compare()
                        bcrypt.compare(password, check.password, function (err, rest) {
                            if (err)
                                return (err);
                            if (rest) {
                                res.send("Logged in");
                            }
                            else {
                                res.send("Incorrect Usernames and Password");
                            }
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
});
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;
