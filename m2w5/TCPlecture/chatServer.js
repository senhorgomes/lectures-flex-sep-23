// TCP chat server

//net -> package is built into NodeJS
const arrayOfConnections = [];
const net = require("net");

// Have a way to know when a connection is made to the server
const server = net.createServer((connection)=> {
    // Translate/ set an encoding method
    connection.setEncoding("utf-8");

    // notify that a connection has been made
    console.log("A new user has joined!");
    arrayOfConnections.push(connection);
    // console.log(connection);
    // We haven't created anything to handle incoming data from a connection
    connection.on("data", (data)=> {
        // console.log(data);
        // Upon receiving information
        // Send information back
        // connection.write(data);
        // We want to loop through all the connections, and send data back to them, broadcast the message sent!
        arrayOfConnections.forEach((singleConnection)=> {
            // Check if the user sent the message, we don't want to broadcast it back to them

            // We are comparing two references of an object together
            if(singleConnection !== connection){
                singleConnection.write(data);
            }
        })
        // This connection is only for a single one!
    })


    // notify that a connection has ended
    connection.on("end", ()=>{
        console.log("A user has disconnected!");
    })
});


// We want something to happen once our server is running

server.listen(3000, ()=> {
    console.log("I'm listening!!!")
})