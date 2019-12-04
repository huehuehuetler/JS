
let config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 640,
    backgroundColor: '#000055',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y:400
            },
            debug: false
        }
    },
    //scene: [mainScene, main2Scene, storyScene, story2Scene, level1]
    scene: [titleScene, Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11, Scene12, level1, level2, level3]
// main2Scene, storyScene, story2Scene, level1, level2, level3, gameoverScene

};

let game = new Phaser.Game(config);



