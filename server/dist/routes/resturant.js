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
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var Meals = require('../Schemas/MealsSchema');
var Resturant = require('../Schemas/ResturantSchema');
var Order = require('../Schemas/OrderSchema');
router.post('/signup', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var meals, _a, firstName, lastName, email, password, resturantName, resturantLocation, saltRounds, salt, user, addmeals;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    meals = {
                        name: "Jellof Rice",
                        price: "#2000",
                        resturant: "dtcfyv4676ras7687grsdf69efds78a7sf9erawfs78eafseawa"
                    };
                    _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, resturantName = _a.resturantName, resturantLocation = _a.resturantLocation;
                    saltRounds = 10;
                    salt = bcrypt.genSaltSync(saltRounds);
                    password = bcrypt.hashSync(password, salt);
                    user = { firstName: firstName, lastName: lastName, email: email, password: password, resturantName: resturantName, resturantLocation: resturantLocation };
                    return [4 /*yield*/, Resturant.create(user)];
                case 1:
                    addmeals = _b.sent();
                    res.send(addmeals);
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
                    return [4 /*yield*/, Resturant.findOne({ email: email })];
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
                    else {
                        res.send("incorrect Details");
                    }
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
                    return [4 /*yield*/, Order.find({ resturant: "613d8102cdee3848ce9e63bf" })];
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
router.get('/addmeal', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var meals, addmeals;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    meals = {
                        name: "Jellof Rice",
                        price: "#2000",
                        resturant: "613d8102cdee3848ce9e63bf"
                    };
                    return [4 /*yield*/, Meals.create(meals)];
                case 1:
                    addmeals = _a.sent();
                    res.send("ok");
                    return [2 /*return*/];
            }
        });
    });
});
router.put('/deliver', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, update;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.body.id;
                    return [4 /*yield*/, Order.findOneAndUpdate({ "_id": id }, { $set: { status: "Delivered" } })];
                case 1:
                    update = _a.sent();
                    res.send(update);
                    return [2 /*return*/];
            }
        });
    });
});
module.exports = router;
