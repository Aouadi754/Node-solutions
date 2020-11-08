const fs = require('fs')
read=fs.readFile(process.argv[2],(err, data)=> {if (err) {console.log(err.message)} else {console.log(data.toString().split('\n').length-1)} })
