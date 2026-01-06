function Add(arg1, arg2){
return arg1+arg2;
}
function Sub(arg1, arg2){
return arg1-arg2;
}
function Reminer(arg1, arg2){
return arg1%arg2;
}
function Multi(arg1, arg2){
return arg1*arg2;
}
function Divide(arg1, arg2){
return arg1/arg2;
}
// now exports these functions
module.exports={Add, Sub, Multi, Divide, Reminer}