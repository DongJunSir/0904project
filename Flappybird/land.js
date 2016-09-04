/**
 * Created by Administrator on 2016/8/22.
 */
    define(function(require,exports,module){

        function Land(x,img,speed){
            this.x=x;
            this.y=488;
            this.img=img;
            this.speed=speed;
        }

        module.exports = Land;

        Land.prototype.draw=function(){
            ctx.drawImage(
                this.img,this.x,this.y);

        }

        Land.prototype.setCount=function(count){
            Land.count=count;
        }

        Land.prototype.update=function(dt){
            //更改位置
            this.x=this.x+this.speed*dt;

            if(this.x<=-336){
                this.x=this.x+336*Land.count;
            }
        }

    });
