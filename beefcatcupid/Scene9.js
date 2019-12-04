class Scene9 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene9' });
    }

    preload() {
        
        this.load.image('S9','assets/S9.jpg');
        
    }

    create () {

        this.add.image(0, 0, 'S9').setOrigin(0, 0);
       
       

        console.log("This is S9");

    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        

        spaceDown.on('down', function(){
        this.scene.stop("Scene9");
        this.scene.start("level2");
        }, this );
       
    

    }

 





}
