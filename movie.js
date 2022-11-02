//a) write a constuctor for the class movie 

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if(this.rating==null){
            return this.rating="PG";
     }
     else{
        return this.rating=rating;
     }
    }
    getDetails(){
        return(`The title of the movie is ${this.title} by the production of ${this.studio}.Rating of the movie is ${this.rating}`)
    }
    
}

let movie1 = new Movie ("Forrest Gump","The Tisch Company","PG14");
console.log(movie1.getDetails());


//b. "PG" as default when no rating is provided
class Movie1{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if(this.rating==null){
            return this.rating="PG";
     }
     else{
        return this.rating=rating;
     }
    }
    getDetails(){
        return(`The title of the movie is ${this.title} by the production of ${this.studio}.Rating of the movie is ${this.rating}`)
    }
    
}

let movie2 = new Movie1 ("Forrest Gump","The Tisch Company");
console.log(movie2.getDetails());


//c.  Write a method getPG

class Movie2{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if(this.rating==null){
            return this.rating="PG";
     }
     else{
        return this.rating=rating;
     }
    }
    
    getPG(array){
        //return(`The title of the movie is ${this.title} by the production of ${this.studio}.Rating of the movie is ${this.rating}`)
        var result=array.filter((element)=>element.rating=="PG")
        return result
    }
    
}

var movie3 = new Movie2 ("Forrest Gump","The Tisch Company","PG12");
var movie4 = new Movie2 ("The Shawshank Redumption","Castle Rock Entertainment","PG19");
var movie5 = new Movie2 ("Cast Away","20th Century Fox Dream Works Pictures","PG");
var movie6 = new Movie2 ("Into the Wild","Paramount Vantage River Road Entertainment Square");

var array=[movie3,movie4,movie5,movie6]

console.log(movie3.getPG(array));


//d.  Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


class Movie3{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if(this.rating==null){
            return this.rating="PG";
     }
     else{
        return this.rating=rating;
     }
    }
    getDetails(){
        return(`The title of the movie is ${this.title} by the production of ${this.studio}.Rating of the movie is ${this.rating}`)
    }
    
}

let movie7 = new Movie ("Casino Royale","Eon Productions","PG­13");
console.log(movie7.getDetails());






