const os = require('os')
// info about system upon run time in seconds
// console.log(os.uptime());

// info about current user 

const user = os.userInfo();

// console.log(user);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);