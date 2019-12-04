class level1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'level1' });
        

    }

preload() {


    this.load.image('bg1', 'assets/lv1bg.png');
    this.load.image('groundLayer1', 'assets/ground1.png');
    this.load.image('arrow', 'assets/arrow.png');
    this.load.image('level1', 'assets/Level1.png');
    this.load.image('heart', 'assets/heart.png');
    
    this.load.atlas('cat', 'assets/catwalk.png', 'assets/catwalk.json');
    this.load.atlas('teena', 'assets/teena.png', 'assets/teena.json');
    this.load.atlas('teenb', 'assets/teenb.png', 'assets/teenb.json');


}

create() {

    this.arrowcounter = 15;
    this.destroy = 0;
    this.teencount = 0;
    this.timer = 0;
    // this.timer++

    console.log("You at LV01")

    this.add.image(0,0,'bg1').setOrigin(0,0);
    this.add.image(60,30, 'level1');
    this.life1 = this.add.image(984,30,'heart');
    this.life2 = this.add.image(944,30,'heart');
    this.life3 = this.add.image(904,30,'heart');
    this.life4 = this.add.image(864,30,'heart');
    this.life5 = this.add.image(824,30,'heart');
    this.life6 = this.add.image(784,30,'heart');
    this.life7 = this.add.image(744,30,'heart');
    this.life8 = this.add.image(704,30,'heart');
    this.life9 = this.add.image(664,30,'heart');
    this.arrowcount = this.add.image(964,80, 'arrow');
    // this.add.text(894,70, this.arrowcounter, {fontSize:'24px', fill: '#000'});
    this.groundLayer = this.physics.add.staticGroup();
    this.groundLayer.create(511,606, 'groundLayer1').setScale(1).refreshBody();
    

    this.life1.setScale(0.7);
    this.life2.setScale(0.7);
    this.life3.setScale(0.7);
    this.life4.setScale(0.7);
    this.life5.setScale(0.7);
    this.life6.setScale(0.7);
    this.life7.setScale(0.7);
    this.life8.setScale(0.7);
    this.life9.setScale(0.7);

    this.lifeA = 0;
    this.lifeB = 0;


    

    // Cat codes
    this.cat = this.physics.add.sprite(200, 200, 'cat');
    this.cat.setBounce(0.1); 
    this.cat.body.setSize(this.cat.width*0.3, this.cat.height*0.8);
    this.cat.setCollideWorldBounds(true);   
    this.cat.setPosition(500, 200); 
    this.physics.add.collider(this.groundLayer, this.cat);


    this.timedEvent = this.time.addEvent({
        delay: 3000,
        callback: this.createTeenA,
        callbackScope: this,
        repeat: 4
    })

    this.timedEvent = this.time.addEvent({
        delay: 3000,
        callback: this.createTeenB,
        callbackScope: this,
        repeat: 4
    })

    this.anims.create({
        key:'walk',
        frames:this.anims.generateFrameNames('cat', {
            prefix:'catwalk_', 
            start:1, 
            end:9, 
            zeroPad:2
        }),
        frameRate:15,
        repeat: -1
        });

        
     this.anims.create({
    key:'idle',
    frames: [{key:'cat', frame:'catwalk_01'}],
    frameRate:10,
    });

    this.anims.create({
        key:'fly',
        frames:this.anims.generateFrameNames('cat', {
            prefix:'catwalk_', 
            start:10, 
            end:21, 
            zeroPad:2}),
        frameRate:10,
        repeat: -1
    });

     this.anims.create({
         key:'teenawalk',
         frames: this.anims.generateFrameNames('teena',{
             prefix: 'teena_',
             start:1,
             end:10,
             zeroPad:2}),
             frameRate:15,
             yoyo:true,
             repeat:-1
         })

         this.anims.create({
            key:'teenbwalk',
            frames: this.anims.generateFrameNames('teenb',{
                prefix: 'teenb_',
                start:1,
                end:10,
                zeroPad:2}),
                frameRate:15,
                yoyo:true,
                repeat:-1
            })
     
            this.arrowcounted = this.add.text(894,70, '15', {fontSize:'24px', fill: '#000'});
            this.killcount = this.add.text(20,60, 'Kill count: 0' , {fontSize:'20px', fill: '#000'});
           

    this.keyW = this.input.keyboard.addKey(87);
    this.keyA = this.input.keyboard.addKey(65);
    this.keyD = this.input.keyboard.addKey(68);

   var key2 = this.input.keyboard.addKey(50);

   key2.on('down',function(){
    this.scene.start("level2");
}, this );

var key3 = this.input.keyboard.addKey(51);

   key3.on('down',function(){
    this.scene.start("level3");
}, this );


    this.control = 0;
    this.limit = 0;

 

}

createTeenA() {
    this.teencount = this.teencount + 1;
    this.teensA = this.physics.add.group();
    this.teensA.create(1000,300, 'teena').setScale(0.8);
    this.teensA.children.iterate(teena=> {
        teena.setSize(teena.width*0.7, teena.height*0.7); 
        teena.setInteractive();
        teena.on('pointerdown', ()=> {
        teena.destroy();
        this.destroy= this.destroy+1;
        this.killcount.setText('Kill count: ' + this.destroy);
        });

        // this.physics.add.collider(teena, this.arrow, this.killTeensA, null, this);
    });
    this.physics.add.collider(this.groundLayer, this.teensA);
    this.physics.add.overlap(this.teensA, this.cat, this.loseALife, null, this);

    this.teensA.children.iterate(teena => {
        teena.play('teenawalk');
    })
this.teensA.setVelocityX(-100);

// this.teencount = this.teencount +1;


}

createTeenB() {
    this.teencount = this.teencount + 1;
    this.teensB = this.physics.add.group();
    this.teensB.create(10,300, 'teenb').setScale(0.8);
    this.teensB.children.iterate(teenb=> {
        teenb.setSize(teenb.width*0.7, teenb.height*0.7); 
        teenb.flipX = true;
        teenb.setInteractive();
        teenb.on('pointerdown', ()=> {
        teenb.destroy();
        this.destroy= this.destroy+1;
        this.killcount.setText('Kill count: ' + this.destroy);
        });
    });
    this.physics.add.collider(this.groundLayer, this.teensB);
    this.physics.add.overlap(this.teensB, this.cat, this.loseBLife, null, this);
    this.physics.add.overlap(this.teensB, this.arrow, this.killTeensB, null, this);
    this.teensB.children.iterate(teenb => {
        teenb.play('teenbwalk');
    })
this.teensB.setVelocityX(100);

}


loseALife(cat,teensA) {

    this.lifeA++;

    if (this.lifeA> 36) {
        this.life9.setAlpha(0);
    }
    if (this.lifeA> 54) {
        this.life8.setAlpha(0);
    }
    if (this.lifeA> 72) {
        this.life7.setAlpha(0);
    }
    if (this.lifeA> 90) {
        this.life6.setAlpha(0);
    }
    if (this.lifeA> 108) {
        this.life5.setAlpha(0);
    }
    if (this.lifeA> 126) {
        this.life4.setAlpha(0);
    }
    if (this.lifeA> 144) {
        this.life3.setAlpha(0);
    }
    if (this.lifeA> 162) {
        this.life2.setAlpha(0);
    }
    if (this.lifeA> 180) {
        this.life1.setAlpha(0);
    }
}

loseBLife(cat,teensB) {

    this.lifeB++;

    if (this.lifeB> 36) {
        this.life9.setAlpha(0);
    }
    if (this.lifeB> 54) {
        this.life8.setAlpha(0);
    }
    if (this.lifeB> 72) {
        this.life7.setAlpha(0);
    }
    if (this.lifeB> 90) {
        this.life6.setAlpha(0);
    }
    if (this.lifeB> 108) {
        this.life5.setAlpha(0);
    }
    if (this.lifeB> 126) {
        this.life4.setAlpha(0);
    }
    if (this.lifeB> 144) {
        this.life3.setAlpha(0);
    }
    if (this.lifeB> 162) {
        this.life2.setAlpha(0);
    }
    if (this.lifeB> 180) {
        this.life1.setAlpha(0);
    }
}

// killTeensA(arrow,teensA) {
//         teensA.destroy();
// }


update() {

this.control++;
this.timer++;
console.log(this.timer)
    if (this.keyW.isDown)
    {
        this.cat.body.setVelocityY(-100);
        this.cat.anims.play('fly', true); 
        this.cat.body.rotation = 0;   
    }

    if (this.keyD.isDown && this.cat.body.onFloor()) {
        this.cat.body.setVelocityX(100);
        this.cat.anims.play('walk', true);
        this.cat.flipX = false;
        this.cat.body.rotation = 0;
    }
        
    else if (this.keyA.isDown && this.cat.body.onFloor()) {
        this.cat.body.setVelocityX(-100);
        this.cat.anims.play('walk', true);
        this.cat.flipX = true;
        this.cat.body.rotation = 0;
    }
    else if (this.cat.body.onFloor()) {
        this.cat.body.setVelocityX(0);
        this.cat.anims.play('idle', true);
        this.cat.body.rotation = 0;
    }

    
     
    else if (this.keyA.isDown)
    {
        this.cat.body.setVelocityX(-200);
        this.cat.anims.play('fly', true); // walk left
        this.cat.flipX = true; // flip the sprite to the left
        this.cat.body.rotation = -30;

    }

    else if (this.keyD.isDown)
    {
        this.cat.body.setVelocityX(200);
        this.cat.anims.play('fly', true);
        this.cat.flipX = false;
        this.cat.body.rotation = 30;
    } 
    
  
     
    
      
    
   
//shoot arrow
if (this.control<2 && this.control>0) {
    this.arrow =  this.physics.add.sprite(this.cat.x,this.cat.y-30, 'arrow');
    this.arrow.rotation = Phaser.Math.Angle.Between(this.cat.x, this.cat.y-30, this.input.activePointer.x, this.input.activePointer.y);
this.physics.moveTo(this.arrow,this.input.activePointer.x,this.input.activePointer.y,3000);
}

//control arrow
if (this.input.activePointer.isDown && this.control>2){
    this.control = -8;
    this.limit = this.limit+1;
}

if (this.limit>15) {
    this.control = 2;
}



//arrow count
if(this.limit == 1) {
    this.arrowcounter = 14;
}
else if(this.limit == 2) {
    this.arrowcounter = 13;
}
else if(this.limit == 3) {
    this.arrowcounter = 12;
}
else if(this.limit == 4) {
    this.arrowcounter = 11;
}
else if(this.limit == 5) {
    this.arrowcounter = 10;
}
else if(this.limit == 6) {
    this.arrowcounter = 9;
}
else if(this.limit == 7) {
    this.arrowcounter = 8;
}
else if(this.limit == 8) {
    this.arrowcounter = 7;
}
else if(this.limit == 9) {
    this.arrowcounter = 6;
}
else if(this.limit == 10) {
    this.arrowcounter = 5;
}
else if(this.limit == 11) {
    this.arrowcounter = 4;
}
else if(this.limit == 12) {
    this.arrowcounter = 3;
}
else if(this.limit == 13) {
    this.arrowcounter = 2;
}
else if(this.limit == 14) {
    this.arrowcounter = 1;
}
else if(this.limit == 15) {
    this.arrowcounter = 0;
}

this.arrowcounted.setText(this.arrowcounter);

if ( this.destroy == 10 ) {
    this.time.delayedCall(2000,function() {
        this.scene.start("Scene8");
  
          },[], this);
        

}


if (this.destroy<10 && this.teencount >7 && this.timer == 1600) {
    this.cameras.main.shake(500);
    this.time.delayedCall(2000,function() {

        this.scene.restart();
    },[], this);
}

if (this.lifeA>180) {
    this.cameras.main.shake(500);
    this.time.delayedCall(2000,function() {

        this.scene.restart();
    },[], this);

}




}



}

    

