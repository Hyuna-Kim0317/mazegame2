class GameBg{
    constructor(container, width, height,x,y,velX,velY){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        //스타일적용
        this.div=document.createElement("div");
        this.div.src=this.src;
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.container.appendChild(this.div);
    }
    tick(){
        if (this.x <= -1400) {
            this.x = -1400;
        } 
        if (this.x >= 0) {
            this.x = 0;
            
        }

        if(this.y <= -1100){
            this.y = -1100;
        }
        if(this.y >= 0){
            this.y = 0;
        }

            this.x+=this.velX;
            this.y+=this.velY;        

    }

    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";        
    }
}