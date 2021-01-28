class Ground{
    constructor(x, y, width, height){
       var options = {
  
     isStatic : true

      }
  
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  
    }
  
  
    display(){
       
      //creating a shape and storing the position of the shape in a variable
      var pos = this.body.position;
      
      //shape of the ground
      rectMode(CENTER);
  
      //for creating ground
      rect(pos.x, pos.y, this.width, this.height);

      //adding color
      fill("brown");
    }
  };