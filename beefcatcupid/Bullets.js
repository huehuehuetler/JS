class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet');
    }

    // fireRight(x, y) {
    //     this.body.reset(x, y);
    //     this.body.setAllowGravity(false);
        
    //     this.setActive(true);
    //     this.setVisible(true);
    //     this.enableBody();
    //     this.setVelocityX(400);

    //     console.log('bullet (x,y) ', this.x, this.y);
    // }

    // fireLeft(x, y) {
    //     this.body.reset(x, y);
    //     this.body.setAllowGravity(false);
        
    //     this.setActive(true);
    //     this.setVisible(true);
    //     this.enableBody();
    //     this.setVelocityX(-400);

    //     console.log('bullet (x,y) ', this.x, this.y);
    // }

    fireRotate(x, y) {
        var mouseX = game.input.mousePointer.x;
        var mouseY = game.input.mousePointer.y;


        this.body.reset(x, y);
        this.body.setAllowGravity(false);
        this.angle= Phaser.Math.Angle.BetweenPoints(cat.x, cat.y, mouseX, mouseY);
        this.setRotation(this.angle+Math.PI/2);
        this.setActive(true);
        this.setVisible(true);
        this.enableBody();
        this.setVelocity(80);

        console.log('bullet (x,y) ', this.x, this.y);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        // Reset the bullets when it reaches end of screen
        if (this.x > 2600) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 20,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        });
    }

    // fireBulletLeft(x, y) {
    //     let bullet = this.getFirstDead(false);

    //     if (bullet) {
    //         bullet.fireLeft(x, y);
    //         bullet.flipX = true;
    //     }
    // }

    // fireBulletRight(x, y) {
    //     let bullet = this.getFirstDead(false);

    //     if (bullet) {
    //         bullet.fireRight(x, y);
    //         bullet.flipX = false;
    //     }
    // }

    fireBulletRotate(x, y, angle) {
        var mouseX = game.input.mousePointer.x;
        var mouseY =  game.input.mousePointer.y;
        
        let bullet = this.getFirstDead(false);

        if (bullet) {
            bullet.fireRotate(cat.x, cat.y);
           
        }
    }

}