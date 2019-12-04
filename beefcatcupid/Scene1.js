class Scene1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene1' });
    }

    preload() {
        this.load.image('S1', 'assets/S1.jpg')
    
        
    }

    create () {

        this.S1 = this.add.image(0, 0, 'S1').setOrigin(0, 0);
       
       
       

        console.log("This is S1");

        var spaceDown = this.input.keyboard.addKey('SPACE');
        

        spaceDown.on('down', function(){
        this.scene.stop("Scene1");
        this.scene.start("Scene2");
        }, this );
        
      

    }

   
      
    }








