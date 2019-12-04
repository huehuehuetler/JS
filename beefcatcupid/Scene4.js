class Scene4 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene4' });
    }

    preload() {
        
        this.load.image('S4','assets/S4.jpg');
        
        
    }

    create () {

        this.add.image(0, 0, 'S4').setOrigin(0, 0);
       
       

        console.log("This is S4");

    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        var enterDown = this.input.keyboard.addKey('ENTER');

        spaceDown.on('down', function(){
        this.scene.stop("Scene4");
        this.scene.start("Scene5");
        }, this );
       
        enterDown.on('down',function(){
            this.scene.stop("Scene4");
            this.scene.start("level1");
        }, this );


    }








}
