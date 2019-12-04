class Scene8 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene8' });
    }

    preload() {
        
        this.load.image('S8','assets/S8.jpg');
        
    }

    create () {

        this.add.image(0, 0, 'S8').setOrigin(0, 0);
       
       

        console.log("This is S8");

    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        

        spaceDown.on('down', function(){
        this.scene.stop("Scene8");
        this.scene.start("Scene9");
        }, this );
       
    

    }

 





}
