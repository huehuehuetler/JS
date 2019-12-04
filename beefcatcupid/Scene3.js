class Scene3 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene3' });
    }

    preload() {
        
        this.load.image('S3','assets/S3.jpg');
        
    }

    create () {

        this.add.image(0, 0, 'S3').setOrigin(0, 0);
       
       

        console.log("This is S3");

        var spaceDown = this.input.keyboard.addKey('SPACE');
       

        spaceDown.on('down', function(){
        this.scene.stop("Scene3");
        this.scene.start("Scene4");
        }, this );
      

    }








}
