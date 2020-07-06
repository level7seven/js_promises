// Async code example 

const { wrapSync } = require("async");


console.log("Start")

setTimeout(() => {
    console.log("We are in the timeout")
}, 2000);

console.log("End")


// Async

console.log("start")

function loginUser(email, password, callback) {
    setTimeout(() => {
        callback( { userEmail: email } );
    }, 1500);
}

const user = loginUser('raf@wrapSync.pl', 123456, (user) => {
    console.log(user) // callback body 
});


console.log("finish")