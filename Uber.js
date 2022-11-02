class Uber {
    constructor(distance,rate,waitingperiod,from,to,price){
        this.distance=distance;
        this.rate=rate;
        this.waitingperiod= waitingperiod;
        this.from=from;
        this.to=to;
        this.price=price;
    }
    setDistance(dist){
        this.distance=dist;
    }
    getRideDetails(){
        return(`The destination displacement of the ride from ${this.from} to ${this.to} is ${this.distance} km and price per km is ${this.rate} Rs with a waiting period per 5min is ${this.waitingperiod} Rs`)
}
getPrice(){
let price =(this.distance * this.rate) + (5*this.waitingperiod)
console.log("Uber Price is") 
return price;
}
    }


let uber1 = new Uber (250, 20, 10,"erode","chennai");
uber1.setDistance(250);

console.log(uber1.getRideDetails())
console.log(uber1.getPrice())