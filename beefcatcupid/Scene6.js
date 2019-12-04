class Scene6 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Scene6' });
    }

    preload() {
       
        this.load.image('S6','assets/S6.jpg');
        
        
    }

    create () {

        this.add.image(0, 0, 'S6').setOrigin(0, 0);
       
       

        console.log("This is S6");

    
        var spaceDown = this.input.keyboard.addKey('SPACE');
        var enterDown = this.input.keyboard.addKey('ENTER');

        spaceDown.on('down', function(){
        this.scene.stop("Scene6");
        this.scene.start("Scene7");
        }, this );
       
        enterDown.on('down',function(){
            this.scene.stop("Scene6");
            this.scene.start("level1");
        }, this );

    }

 






}
