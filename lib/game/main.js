ig.module(
  'game.main'
)
.requires(
  'impact.game'
  , 'impact.font'

  , 'plugins.camera'

  , 'game.entities.player'
  , 'game.entities.player2'
  , 'game.entities.human'
  , 'game.entities.bam'
  , 'game.entities.helicopter'
  , 'game.levels.test2'
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
    this.loadLevel( LevelTest2 );

    // Entities will modify the map
    ig.game.buildingMap = ig.game.getMapByName('building');

		ig.game.levelCount = 1;
  }

  , update: function() {
    // Update all entities and backgroundMaps
    this.parent();

		// Camera follows the player
		this.camera.follow( ig.player );
  }

  , draw: function() {
    // Draw all entities and backgroundMaps
    this.parent();

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
    this.camera = new ig.Camera( offsetX, offsetY, 3);//ig.system.width/5, ig.system.height/5, 3 );

    // The camera's trap (the deadzone in which the player can move with the
    // camera staying fixed) is set to according to the screen size as well.
    this.camera.trap.size.x = ig.system.width/5;
    this.camera.trap.size.y = ig.system.height/3;

    // The lookahead always shifts the camera in walking position; you can
    // set it to 0 to disable.
    this.camera.lookAhead.x = ig.system.width/6;

    // Set camera's screen bounds and reposition the trap on the player
    this.camera.max.x = 1024; //this.collisionMap.pxWidth - ig.system.width;
    this.camera.max.y = 768; //this.collisionMap.pxHeight - ig.system.height;
    this.camera.set( ig.player );
  }
});


// Start the Game with 60fps, a resolution of 1024x768, scaled
// up by a factor of 1
ig.main( '#canvas', Rampage, 60, 1024, 768, 1 );

});
