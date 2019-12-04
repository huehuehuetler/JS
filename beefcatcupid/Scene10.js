class Scene10 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene10' });
    }

    preload() {
        
        this.load.image('S10','assets/S10.jpg');
        
    }

    create () {

        this.add.image(0, 0, 'S10').setOrigin(0, 0);
       
       

        console.log("This is S10");

    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        

        spaceDown.on('down', function(){
        this.scene.stop("Scene10");
        this.scene.start("Scene11");
        }, this );
       
    

    }

 





}
