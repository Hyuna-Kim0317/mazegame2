class Enemy extends GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);
    
        this.leftSensor = new LeftSensor(this.container,3,30,this.x-3,this.y+10,"");
        this.rightSensor = new RightSensor(this.container, 3, 30, this.x+this.width, this.y+10, "");
        this.topSensor=new TopSensor(this.container, 30, 3, this.x+5, this.y-3, "");
        this.bottomSensor=new BottomSensor(this.container, 30, 3, this.x+5, this.y+this.height, "");
    
     //  this.sensorArray=new Array(4);
    }
    
    //적의 왼쪽 센서와 벽돌의 충돌 체크
    leftCheck(){
        for(let i=0; i<brickArray.length;i++){
            let result = collisionCheck(this.leftSensor, brickArray[i]);
            if(result){
                //console.log("좌측 닿음");
                this.x=brickArray[i].x + brickArray[i].width+4;
                break;
            }
        }
    }

    //적의 오른쪽 센서와 벽돌의 충돌 체크
    rightCheck(){
        for(let i=0; i<brickArray.length;i++){
            
            let result = collisionCheck(this.rightSensor, brickArray[i]);
            if(result){
                //console.log("우측 닿음");
                this.x=brickArray[i].x - this.width-4;
                break;
            }
        }        
    }
    //적과 위쪽 센서와 벽돌의 충돌 체크
    topCheck(){
        for(let i=0; i<brickArray.length;i++){           
            let result = collisionCheck(this.topSensor, brickArray[i]);
            if(result){
                //console.log("위쪽 닿음");
                this.y=brickArray[i].y + brickArray[i].height+4;
                break;
            }
        }        
    }
    
    //적과 아래쪽 센서와 벽돌의 충돌 체크
    bottomCheck(){
        for(let i=0; i<brickArray.length;i++){          
            let result = collisionCheck(this.bottomSensor, brickArray[i]);
            if(result){
                //console.log("아래쪽 닿음");
                this.y=brickArray[i].y - this.height-4;
                break;
            }
        }        
    }
    hitCheck(){
        
        for(let i=0; i<digArray.length;i++){
            let result= collisionCheck(this, digArray[i]);
            if(result){
                console.log(i+" 번째 함정과 충돌");
                
                //화면에서 적 제거
                this.container.removeChild(this.img);

                let myIndex = enemyArray.indexOf(this); //적 제거
                enemyArray.splice(myIndex,1);   //적이 소속된 배열에서 제거

                //화면에서 함정 제거
                this.container.removeChild(digArray[i].img);
    
                let youIndex = digArray.indexOf(digArray[i]);
                digArray.splice(youIndex,1);
                

            }
            
            break;
    
        }
    }

    tick(){
        
        this.leftSensor.tick(this);
        this.leftSensor.render();
        
        this.rightSensor.tick(this);
        this.rightSensor.render();
        
        this.topSensor.tick(this);
        this.topSensor.render();
        
        this.bottomSensor.tick(this);
        this.bottomSensor.render();
        
        
        if (this.x >= 2445) {
            this.x = 2445;
        } 
        if (this.x <= 0) {
            this.x = 0;
            
        }
        
        if(this.y >= 1945){
            this.y = 1945;
        }
        if(this.y <= 0){
            this.y = 0;
        }
        
        this.x+=this.velX;
        this.y+=this.velY;  

        
        
    }
    render(){        
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";  
        this.hitCheck();
        this.leftCheck();
        this.rightCheck();
        this.topCheck();
        this.bottomCheck();
        moveMiniMap();
    }
}