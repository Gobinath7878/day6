class Circle{
    constructor(Radius,Color){
        this.radius=Radius;
        this.color=Color;
    }
    Circle(Radius,Color){
        this.radius=Radius;
        this.color=Color;
        console.log("The Radius of Circle is "+this.radius);
        console.log("The Color of the Circle is "+this.color);
    }
    getRadius(){
        console.log("The Radius of Circle is "+this.radius)
    }
    setRadius(Radius){
        this.radius=Radius;
    }
    getColor(){
        console.log("The Color of the Circle is "+this.color);
    }
    setColor(Color){
        this.color=Color;
    }
    getArea(){
        console.log('The Area of Circle is '+(Math.PI*(this.radius*this.radius)))
    }
    getCircumference(){
        console.log('The Circumference of Circle is '+(2*Math.PI*this.radius))
    }

}

const circle = new Circle();
circle.Circle(7,"yellow");
circle.setRadius(1);
circle.getRadius();
circle.setColor("red");
circle.getColor();
circle.getArea();
circle.getCircumference();