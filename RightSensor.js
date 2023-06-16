class RightSensor extends Sensor{
    tick(who){
        //this.x + this.width, this.y + 10
        this.x = who.x+who.width;
        this.y = who.y+10;
    }    
}