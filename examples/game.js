
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.image('mech', 'assets/titan_mech.png');
    game.load.spritesheet('ms', 'assets/metalslug_mummy37x45.png', 37, 45, 18);

}

function create() {

    sprite = game.add.sprite(500, 100, 'ms');
    sprite.animations.add('walk');
    sprite.animations.play('walk', 50, true);

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    var image = game.add.sprite(0, 0, 'mech');

    //enables all kind of input actions on this image (click, etc)
    image.inputEnabled=true;

    image.events.onInputDown.add(listener,this);

}

function listener () {
    alert('clicked');
}
