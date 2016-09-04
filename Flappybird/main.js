/**
 * Created by Administrator on 2016/9/4.
 */
    define(function(require) {
        var $=require("jquery");

        var Bird = require('./Bird');
        var Land = require('./Land');
        var loadImages = require('./loadImages');
        var Pipe = require('./Pipe');
        var Sky = require('./Sky');

        loadImages(imgUrls, function (imgEls) {

            // 主逻辑：分为两部分
            // 1. 创建对象
            // TODO: 创建小鸟的对象
            var gameover=false;
            var grade=0;
            var bird=new Bird(150, 150, imgEls.birds, 0, 0.0005);

            var sky1=new Sky(0, imgEls.sky,-0.1);
            var sky2=new Sky(800, imgEls.sky,-0.1);
            sky1.setCount(2);

            var land1=new Land(0,imgEls.land,-0.1);
            var land2=new Land(336,imgEls.land,-0.1);
            var land3=new Land(672,imgEls.land,-0.1);
            var land4=new Land(1008,imgEls.land,-0.1);


            land1.setCount(4);

            var pipe=new Pipe(300,imgEls.pipe2,imgEls.pipe1,-0.1);
            var pipe1=new Pipe(500,imgEls.pipe2,imgEls.pipe1,-0.1);
            var pipe2=new Pipe(700,imgEls.pipe2,imgEls.pipe1,-0.1);
            var pipe3=new Pipe(900,imgEls.pipe2,imgEls.pipe1,-0.1);
            var pipe4=new Pipe(1100,imgEls.pipe2,imgEls.pipe1,-0.1);

            pipe.setGapAndCount(200,5);

            //添加上升事件
            cvs.addEventListener('click',function(){
                bird.speed = -0.3;
            });


            var lastTime = Date.now();
            var looper = function () {

                var now = Date.now();
                var dt = now - lastTime;
                lastTime = now;

                ctx.clearRect(0, 0, 800, 600);

                // TODO：调用小鸟的update和draw函数，让小鸟动起来
                sky1.update(dt);
                sky2.update(dt);

                sky1.draw();
                sky2.draw();

                pipe.update(dt);
                pipe1.update(dt);
                pipe2.update(dt);
                pipe3.update(dt);
                pipe4.update(dt);
                pipe.draw();
                pipe1.draw();
                pipe2.draw();
                pipe3.draw();
                pipe4.draw();

                land1.update(dt);
                land2.update(dt);
                land3.update(dt);
                land4.update(dt);

                land1.draw();
                land2.draw();
                land3.draw();
                land4.draw();

                bird.update(dt);
                bird.draw();

                if (bird.y > 488 - 45 / 2 || bird.y < 0 - 45 / 2) {
                    gameover = true;
                }

                gameover = gameover || pipe.hightTest(bird.x , bird.y );
                gameover = gameover || pipe1.hightTest(bird.x, bird.y );
                gameover = gameover || pipe2.hightTest(bird.x , bird.y );
                gameover = gameover || pipe3.hightTest(bird.x , bird.y );
                gameover = gameover || pipe4.hightTest(bird.x , bird.y );


                if(!gameover){
                    //gameover为false执行下面的代码 进行循环
                    requestAnimationFrame(looper);
                }

            };
            requestAnimationFrame(looper);

        })


    });