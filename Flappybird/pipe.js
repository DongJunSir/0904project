    define(function(require,exports,module){
        function Pipe(x,img1,img2,speed){
            this.x=x;
            this.img1=img1;
            this.img2=img2;
            this.speed=speed;
            this.r=Math.random()*150+150;

        }

        module.exports=Pipe;

        Pipe.prototype.draw=function(){
            ctx.drawImage(
                this.img1,this.x,this.r-420);
            ctx.drawImage(
                this.img2,this.x,this.r+150);
        }

        Pipe.prototype.setGapAndCount=function(gap,count){
            Pipe.gap=gap;
            Pipe.count=count;
        }

        Pipe.prototype.update=function(dt){

            this.x=this.x+this.speed * dt;
            if(this.x<=-52){

                this.x=this.x+Pipe.count * Pipe.gap;

                this.r=Math.random()*150+150;
            }
        }

        Pipe.prototype.hightTest=function(x,y){
            //判断小鸟的x和y与管子的x和y之间的关系
            return (x > this.x && x < this.x + 52)
                && (!(y > this.r && y < this.r + 150));

        }
    });
