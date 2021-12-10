
module.exports = class BroadCaster {
    interval;
    broadCastData;
    broadCastInterval;
    socket;
    eventName;

    constructor(interval, socket, eventName, data) {
        this.interval = interval;
        this.socket = socket;
        this.eventName = eventName;
        this.broadCastData = data;
    }


    startBroadCast(callback){
        this.broadCastInterval = setInterval(() => {
            this.socket.emit(this.eventName,this.broadCastData)
            console.log("Event emitted")
        }, this.interval);
    }
}