class Scene11 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene11' });
    }

    preload() {
        
        this.load.image('S11','assets/S11.jpg');
        
    }

    create () {

        this.add.image(0, 0, 'S11').setOrigin(0, 0);
       
       

        console.log("This is S11");

    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        

        spaceDown.on('down', function(){
        this.scene.stop("Scene11");
        this.scene.start("level3");
        }, this );
       
    

    }

 





}
