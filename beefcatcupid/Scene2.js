class Scene2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene2' });
    }

    preload() {
        
        this.load.image('S2','assets/S2.jpg');
        
    }

    create () {

        this.add.image(0, 0, 'S2').setOrigin(0, 0);
       
       

        console.log("This is S2");

    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        

        spaceDown.on('down', function(){
        this.scene.stop("Scene2");
        this.scene.start("Scene3");
        }, this );
        
      
       

    }






}
