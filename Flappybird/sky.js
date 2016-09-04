    define(function(require,exports,module){
        function Sky(x,img,speed){
            this.x=x;
            this.y=0;
            this.img=img;
            this.speed=speed;
        }

        module.exports=Sky;

        Sky.prototype.draw=function(){
            ctx.drawImage(
                this.img,this.x,this.y);

        }

        Sky.prototype.setCount=function(count){
            Sky.count=count;
        }

        Sky.prototype.update=function(dt){
            //更改位置
            this.x=this.x+this.speed*dt;

            if(this.x<=-800){
                this.x=this.x+800*Sky.count;
            }
        }
    });

