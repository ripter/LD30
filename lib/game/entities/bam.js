ig.module(
  'game.entities.bam'
).requires(
  'impact.entity'
).defines(function() {

EntityBam = ig.Entity.extend({
  size: {x: 18, y:18}
  , animSheet: new ig.AnimationSheet('media/bam.png', 18, 18)
  , gravityFactor: 0

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);
  }

  , update: function() {
    var map = ig.game.buildingMap;
    var collisionMap = ig.game.collisionMap;
    var x = this.pos.x;
	  var y = this.pos.y;
    var currentTile = map.getTile(x, y);
    var currentCollision = collisionMap.getTile(x, y);
    var tile = currentTile;

    // Normal wall
	  if (tile > 0 && tile < 3) {
      currentTile += 1;
	  }

		// Window
		if (tile > 8 && tile < 11) {
      currentTile += 1;
	  }

    // Window #2
		if (tile > 11 && tile < 14) {
      currentTile -= 1;
    }

    // Person in window
    if (tile === 11 || tile === 14) {
		  currentTile = 3;
      ig.player.addInventory('Window Hu-man');
	  }

    // we can stand on rubble
		if (currentTile === 3) {
		  collisionMap.setTile(x, y+30, 12);
		}

    map.setTile(x, y, currentTile);

    this.parent();
	  this.kill();
  }


});
});