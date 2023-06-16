class TopSensor extends Sensor{
    tick(who){
        //this.x + 5, this.y - 3
        this.x = who.x+5;
        this.y = who.y-3;
    }
    
}