class Food{
    constructor(x,y){
        var options={
            density:0.5,
            
        }
        this.body=Bodies.rectangle(x,y,100,100,options);
        World.add(world,this.body);

        this.width=100
        this.height=100

        this.image=loadImage("images/bur_bottom.png");

        console.log(this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

    }
}