class titleScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'titleScene' });
    }

    preload() {
        this.load.image('titleBg','assets/titleBg.jpg');
        this.load.image('titleText','assets/titleText.png');
        this.load.atlas('cat', 'assets/catwalk.png', 'assets/catwalk.json', );
        this.load.image('button','assets/titlePlay.png');
    }

    create () {

        this.add.image(0, 0, 'titleBg').setOrigin(0, 0);
        this.add.image(230,120, 'titleText').setOrigin(0,0);
        this.button=this.add.image(500,500, 'button').setOrigin(0,0);
        this.cat = this.add.sprite(160, 350, 'cat');
        this.cat2=this.add.sprite(820, 250, 'cat');
        this.cat.setScale(1.5);
        this.cat2.setScale(1.5);
        
        this.button.setInteractive();
        

        console.log("This is titleScene");

        this.anims.create({
            key:'fly',
            frames:this.anims.generateFrameNames('cat', {
                prefix:'catwalk_', 
                start:10, 
                end:21, 
                zeroPad:2
            }),
            frameRate:10,
            repeat: -1
        });

       this.cat.play('fly');
       this.cat2.play('fly');
       this.cat2.flipX = true;

       var key1 = this.input.keyboard.addKey(49);

       key1.on('down',function(){
        this.scene.start("level1");
    }, this );

    var key2 = this.input.keyboard.addKey(50);

       key2.on('down',function(){
        this.scene.start("level2");
    }, this );

    var key3 = this.input.keyboard.addKey(51);

       key3.on('down',function(){
        this.scene.start("level3");
    }, this );

    }

   

update () {

    if (this.input.activePointer.isDown)
    {
        this.scene.stop("titleScene");
        this.scene.start("Scene1");
    }
    




}





    

}
