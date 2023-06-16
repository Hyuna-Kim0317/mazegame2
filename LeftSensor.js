class LeftSensor extends Sensor{
    tick(who){
        //this.x - 3, this.y + 10
        this.x=who.x-3;
        this.y=who.y+10;
    }
}