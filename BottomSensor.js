class BottomSensor extends Sensor{
    tick(who){
        // this.x + 5, this.y + this.height
        this.x = who.x+5;
        this.y = who.y+who.height;
    }
}