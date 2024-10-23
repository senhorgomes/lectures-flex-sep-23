const net = require("net");

const client = net.createConnection({host: "localhost", port: 3000}, ()=> {

    client.setEncoding("utf-8");
    // Once the client is connected to the server, we can send data to the server
    client.write("Hey, I'm definitely NOT a bot")

})

client.on("data", (data)=> {
    console.log(data);
})