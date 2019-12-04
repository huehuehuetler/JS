class Scene5 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene5' });
    }

    preload() {
        
        this.load.image('S5','assets/S5.jpg');
        
        
    }

    create () {

        this.add.image(0, 0, 'S5').setOrigin(0, 0);
       
       

        console.log("This is S5");

        var spaceDown = this.input.keyboard.addKey('SPACE');
        var enterDown = this.input.keyboard.addKey('ENTER');

        spaceDown.on('down', function(){
        this.scene.stop("Scene5");
        this.scene.start("Scene6");
        }, this );
        
        enterDown.on('down',function(){
            this.scene.stop("Scene5");
            this.scene.start("level1");
        }, this );
       

    }








}
