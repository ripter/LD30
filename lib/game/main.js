ig.module(
  'game.main'
)
.requires(
  'impact.game'
  , 'impact.font'

  , 'plugins.camera'

  , 'game.entities.player'
  , 'game.entities.bam'
  , 'game.entities.bullet'
  , 'game.entities.babyzilla'
  , 'game.entities.enemySpawner'
  , 'game.levels.test2'
  , 'game.levels.city1'
  , 'game.levels.belly'
)
.defines(function(){

Rampage = ig.Game.extend({

  //clearColor: '#FF851B',
  clearColor: '#fff'
  , gravity: 800

  // Load a font
  , font: new ig.Font( 'media/04b03.font.png' )


  , init: function() {
    ig.input.bind( ig.KEY.UP_ARROW, 'jump');
    ig.input.bind( ig.KEY.DOWN_ARROW, 'drop');
    ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
    ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
    ig.input.bind( ig.KEY.SPACE, 'punch');
    // Initialize your game here; bind keys etc.
    //this.loadLevel( LevelTest2 );
    this.loadLevel( ig.copy(LevelCity1) );

    // Entities will modify the map
    ig.game.buildingMap = ig.game.getMapByName('building');

    ig.inventory = [];
    ig.levelCount = 1;
    ig.score = 0;
    this.gameOver = false;
  }

  , update: function() {
    // Update all entities and backgroundMaps
    this.parent();

    // Camera follows the player
    this.camera.follow( ig.player );

    if (this.gameOver) {
      ig.system.setGame(EndGame);
    }
  }

  , draw: function() {
    // Draw all entities and backgroundMaps
    this.parent();

    this.camera.draw();
  }

  , loadLevel: function(data) {
    this.parent(data);

    this.setupCamera();
  }

  , setupCamera: function() {
    var player = ig.player;
    var offsetX = ig.system.width/3;
    var offsetY = player.pos.y + player.size.y;
    // Set up the camera. The camera's center is at a third of the screen
    // size, i.e. somewhat shift left and up. Damping is set to 3px.
    this.camera = new ig.Camera( offsetX, offsetY, 3);

    // The camera's trap (the deadzone in which the player can move with the
    // camera staying fixed) is set to according to the screen size as well.
    this.camera.trap.size.x = ig.system.width/5;
    this.camera.trap.size.y = ig.system.height/3;

    // The lookahead always shifts the camera in walking position; you can
    // set it to 0 to disable.
    this.camera.lookAhead.x = ig.system.width/6;

    // Set camera's screen bounds and reposition the trap on the player
    this.camera.max.x = 2048; //ig.game.collisionMap.pxWidth; //1024;
    this.camera.max.y = 768;
    this.camera.set( ig.player );
  }

  , rollDice: function(dice, winners) {
    var reg = (/(\d*)d(\d+)([+-]?\d*)/)
        , match = reg.exec(dice)
        , count = parseInt(match[1], 10) || 1
        , max = parseInt(match[2], 10)
        , modifier = parseInt(match[3], 10) || 0
        , result = 0
        ;

    if (Number.isNaN(max)) {
        throw new Error('Number of sides on dice not specified. ' + dice);
    }

    while (count--) {
        result += 0 | ((Math.random() * max) + 1)
    }

    result += modifier;

    if (typeof winners === 'undefined') {
      return result;
    }

    return _.contains(winners, result);
  }

  , randomNumber: function(min, max) {
    return 0| Math.random() * (max - min) + min;
  }
});

EndGame = ig.Game.extend({
  init: function() {
    this.image = new ig.Image('media/end_screen.png');
    this.font = new ig.Font( 'media/title.font.png' );
    ig.input.bind( ig.KEY.ENTER, 'start');
  }

  , draw: function() {
    var x = ig.system.width/2;
    var y = 642;

    this.parent();

    this.image.draw(0, 0);
    this.font.draw(ig.score, x, y, ig.Font.ALIGN.CENTER);
    this.font.draw('Press Enter to Restart', x, y+64, ig.Font.ALIGN.CENTER);
  }

  , update: function() {
    this.parent();

    if (ig.input.pressed('start')) {
      ig.system.setGame(Rampage);
    }
  }
});

StartGame = ig.Game.extend({
  init: function() {
    this.image = new ig.Image('media/start_screen.png');

    ig.input.bind( ig.KEY.SPACE, 'start');
  }

  , draw: function() {
    this.parent();

    this.image.draw(0, 0);
  }

  , update: function() {
    this.parent();

    if (ig.input.pressed('start')) {
      ig.system.setGame(Rampage);
    }
  }
});

BabyGame = ig.Game.extend({
  gravity: 800
  , timer: new ig.Timer()
  , clearColor: null

  , init: function() {
    this.image = new ig.Image('media/bg_stomach.png');

    ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
    ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');

    this.loadLevel( LevelBelly );
    ig.inventory = ['human', 'human'];
    this.timer.set(1);
  }

  , update: function() {


    this.parent();
  }
  , draw: function() {
    this.image.draw(0, 0);
    this.parent();
  }
});

// Start the Game with 60fps, a resolution of 1024x768, scaled
// up by a factor of 1
ig.main( '#canvas', StartGame /*BabyGame*/, 60, 1024, 768, 1 );

});
