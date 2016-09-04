define(function(require, exports, module){

    function Bird(x, y, img, speed, a) {
        // TODO: 准备小鸟对象所需要的数据
        this.waitTime = 0; // 累积小图等待的时间。
        this.index=0;
        this.x=x;
        this.y=y;
        this.img=img;
        this.a=a;
        this.speed=speed;
    }

    module.exports = Bird;

    Bird.prototype.draw = function(){
        // TODO:绘制小鸟 （不需要有旋转）

        ctx.save();
        var templateDeg = this.speed / 0.3 * Math.PI/6;
        ctx.translate(this.x,this.y);
        ctx.rotate(templateDeg);

        ctx.drawImage(this.img,
            52*this.index,0,52,45,
            -52/2,-45/2,52,45);

        ctx.restore();

    };

    Bird.prototype.update = function (dt) {

        this.waitTime += dt;
        if (this.waitTime >= 100) {
            this.index++;
            if (this.index > 2) {
                this.index = 0;
            }
            this.waitTime -= 100;
        }



        this.speed = this.speed + this.a * dt;
        this.y += this.speed * dt;


    };

});



