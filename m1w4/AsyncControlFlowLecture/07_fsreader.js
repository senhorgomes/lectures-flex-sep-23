//fs? Filesystem?
//A node module that allows us to interact with the file system
const fs = require("fs");

let totalNumber = 0;
fs.readFile("./data1.txt", 'utf-8', (err, data) => {
    if(err){
        console.log("Error:", err)
    }
    totalNumber += Number(data);
    console.log(totalNumber)

    fs.readFile("./data2.txt", 'utf-8', (err, data) => {
        if(err){
            console.log("Error:", err)
        }
        totalNumber += Number(data);
        console.log(totalNumber)

        fs.readFile("./data3.txt", 'utf-8', (err, data) => {
            if(err){
                console.log("Error:", err)
            }
            totalNumber += Number(data);
            console.log(totalNumber)
        });
    });
});

