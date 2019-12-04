class Scene12 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene12' });
    }

    preload() {
        
        this.load.image('S12','assets/S12.jpg');
        
    }

    create () {

        this.add.image(0, 0, 'S12').setOrigin(0, 0);
       
       

        console.log("This is S12");

    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        

        spaceDown.on('down', function(){
        this.scene.stop("Scene12");
        this.scene.start("titleScene");
        }, this );
       
    

    }

 





}
