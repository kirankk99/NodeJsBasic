//To show how the call stack of node js work in backend to execute the functions of the Node.
console.log(`According to top to down execution nature of the js "1st console print " second must be "log after 0 ms" \n but call stack add delay in function execution \n it execute after the last console.`)
console.log('1st console');

setTimeout(()=>{
console.log('log after 100 ms')
},100);

setTimeout(() => {
    console.log('log after 0 ms');
}, 0);

console.log('2nd console.');

