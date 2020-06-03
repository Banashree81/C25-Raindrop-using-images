class BaseClass{
    constructor(){
        this.x = random(10,width -10);
        this.y = random(10,height -10);
        
        this.image = loadImage("Base.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, random(10,25),random(10,25));
      
    }

    fall(){
        this.y = this.y + random(1,20);
        if(this.y > height){
            this.y = 0;
        }
    }
}