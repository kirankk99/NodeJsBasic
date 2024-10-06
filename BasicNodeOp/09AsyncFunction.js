let a = 10;
let b = 20;

// console.log(a + b);  // this is the synchronous method
// Normally js code execute in the tob down manner or like one by one line.
// But in some cases , functions need more time to execute but other functions doesn't . 
// to avoid from blocking nature of other functions execution async is introduced which help
// in other priority fun or less time required functions execution and return the output of the
// async function after its process complete.
// to make it asynchronous method

const returnBdata = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);  // resolve with a value to update b
  }, 1000);
});

returnBdata.then((data) => {
  b = data;
  console.log(`second log with b value ${a} + ${b}`, a + b);// exicuted second and wait for the return from the prpomise
});

console.log(`first log with b value ${a} + ${b}`, a + b);// this console will be exicuted first 
