// importing mongoose
const mongoose = require('mongoose');

// db connection
mongoose.connect("mongodb+srv://aleena21ubc210:aleena123@cluster0.op8qmif.mongodb.net/Floralfind")

// .then(()=>{
//     console.log("db is connected");
// })
// .catch((err)=>console.log(err))

// // Schema creation
// // importing Schema
let mongoSchema = mongoose.Schema;

// // intialize schema
const empSchema = new mongoSchema({
// //     ename:String,
// //     eage:Number,
// //     esalary:Number

name:String,
id:Number,
old_price:Number,
new_price:Number,
category:String,
image:String,
});

var empModel = mongoose.model("user",UserSchema);
module.exports=empModel;
