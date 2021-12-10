require('dotenv').config()

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const BroadCaster = require('./functions/broadCaster');




app.post('/updateHardwareData', (req,res) => {
  res.send(hardwareData)
})


io.on('connection', (socket) => {

  setInterval(() => {
    tweakData()
  }, 100);

  const broadCaster = new BroadCaster(1000,socket,"hardwareInfoChange",sampleData);
  broadCaster.startBroadCast();
});





server.listen(process.env.SERVER_PORT, () => {
  console.log('listening on ' + process.env.SERVER_PORT);
});



function tweakData(){
  sampleData.CPU.total.temp = randomIntFromInterval(50,53)
  sampleData.CPU.total.load = randomIntFromInterval(10,30)
}

function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


let sampleData = {
  CPU: {
      "name": "AMD Ryzen 5 3600",
      "cores": [
          {
              "name": "CPU Core #1",
              "load": 50,
              "clock": 4075.223,
              "power": 3.2
          },
          {
              "name": "CPU Core #2",
              "load": 0,
              "clock": 0,
              "power": 3.2
          },
          {
              "name": "CPU Core #3",
              "load": "78",
              "clock": "4075,223",
              "power": "3,2"
          },
          {
              "name": "CPU Core #4",
              "load": "0",
              "clock": "0",
              "power": "3,2"
          },
          {
              "name": "CPU Core #5",
              "load": "35",
              "clock": "4000",
              "power": "3,2"
          },
          {
              "name": "CPU Core #6",
              "load": "10",
              "clock": "4000",
              "power": "3,2"
          }
      ],
      "total": {
          "temp": Math.random()*50,
          "load": Math.random()*100
      }
  }
}