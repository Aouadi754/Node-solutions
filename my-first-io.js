const fs = require('fs')
read=fs.readFileSync(process.argv[2]).toString().split('\n')
console.log(read.length-1)