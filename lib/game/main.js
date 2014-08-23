ig.module(
  'game.main'
)
.requires(
  'impact.game'
  , 'impact.font'

  , 'game.entities.player'
  , 'game.entities.player2'
  , 'game.entities.human'
  , 'game.entities.bam'

  , 'game.levels.test3'
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
    this.loadLevel( LevelTest3 );

    // Entities will modify the map
    ig.game.buildingMap = _.where(ig.game.backgroundMaps, {name: 'building'})[0];
  }

  , update: function() {
    // Update all entities and backgroundMaps
    this.parent();

    // Add your own, additional update code here
  }

  , draw: function() {
    // Draw all entities and backgroundMaps
    this.parent();


    // Add your own drawing code here
    var x = ig.system.width/2,
      y = ig.system.height/2;

    //this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
  }
});


// Start the Game with 60fps, a resolution of 1024x768, scaled
// up by a factor of 1
ig.main( '#canvas', Rampage, 60, 1024, 768, 1 );

});
