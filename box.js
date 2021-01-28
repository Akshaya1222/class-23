class Box{
  constructor(x, y, width, height){
     var options = {

       restitution : 0.8, 
       friction : 0.3,
       density : 1.0

    }

  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  
  World.add(world, this.body);

  }


  display(){
     
    //creating a shape and storing the position of the shape in a variable
    var pos = this.body.position;

    //capturing engine body angle
    var angle = this.body.angle;

    //adding new settings to the box

    //adding settings one by one
    push();

    //translate x and y positions
    translate(pos.x, pos.y);

    //help us to rotate the box
    rotate(angle);
    
    //shape of the box
    rectMode(CENTER);

    //for creating box
    rect(0, 0, this.width, this.height);

    //bringing bake to older settings
    pop();
    
  }
};