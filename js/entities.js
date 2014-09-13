game.Jackie = me.ObjectEntity.extend({
    
    init: function(x, y, settings){

        this.parent(x,y,settings);

        //this.setVelocity(4,13);
        
        this.renderable.addAnimation("run", [0,1,2,3,4,5,6,7,8,9], 70);
        this.renderable.addAnimation("roll", [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],70);
        this.renderable.addAnimation("idle", [32,33,33,34,35,36,37,38,39,40,41,42,43],65);
        this.renderable.addAnimation("jump",[48,49,50,51,52,53,54,55,53,49,48], 68);
        this.renderable.addAnimation("kick",[64,65,66,67,68,69,70,71], 70);
        
        this.idle();
        me.input.registerPointerEvent('pointerdown', this, this.run.bind(this), true);

        //me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },


    update: function(dt){


       // this.updateMovement();

        this.handleInput();

        return this.parent(dt);
        
    },



    handleInput: function(){
 
        if(me.input.isKeyPressed('jump')){
           
            this.jump();
        }


        if(me.input.isKeyPressed('roll')){
            
            this.roll();
        
        }

        if(me.input.isKeyPressed('kick')){
            
            this.kick();
        
        }

        if(me.input.isKeyPressed('run')){
            
            this.run();
        
        }


    },



    roll: function(){
               
        this.renderable.setCurrentAnimation("roll", (
            function () {
                this.idle();
            }
        ).bind(this));
    },


    run: function(){
        this.renderable.setCurrentAnimation("run","idle");       
    },

    kick: function(){
        this.renderable.setCurrentAnimation("kick","idle");       
    },


    idle: function(){
        this.renderable.setCurrentAnimation("idle");
    },


    jump: function(){
        this.renderable.setCurrentAnimation("jump","idle");
    }





});
