var game = {

    data:{
        score:0
    },

    "onload": function(){
        
        if(!me.video.init("juego", 560, 272, true, "auto")){
            
            alert("El navegador no soporta canvas html5");
            return;

        }

        if(document.location.hash === "#debug"){
   
            window.onReady(function(){
                me.plugin.register.defer(this, debugPanel, "debug");
            });           
   
        }
        

        me.debug.renderHitBox = true;

        me.audio.init("mp3,ogg");
        me.loader.onload = this.loaded.bind(this);
        me.loader.preload(game.resources);
        me.state.change(me.state.LOADING);
    
    },


    "loaded": function(){
        //me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        me.pool.register("jackie", game.Jackie);

        me.input.bindKey(me.input.KEY.SPACE, "jump", true);
        me.input.bindKey(me.input.KEY.RIGHT, "run", true);
        me.input.bindKey(me.input.KEY.Z, "roll", true);
        me.input.bindKey(me.input.KEY.X, "kick", true);

        me.state.change(me.state.PLAY);
    
    }


}
