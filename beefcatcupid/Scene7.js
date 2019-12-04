class Scene7 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene7' });
    }

    preload() {
        
        this.load.image('S7','assets/S7.jpg');
        
    }

    create () {

        this.add.image(0, 0, 'S7').setOrigin(0, 0);
       
       

        console.log("This is S7");

    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        

        spaceDown.on('down', function(){
        this.scene.stop("Scene7");
        this.scene.start("level1");
        }, this );
       
    

    }

 





}
