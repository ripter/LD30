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
    var x = this.pos.x;
	  var y = this.pos.y;
    var currentTile = map.getTile(x, y);

    // Normal wall
	  if (currentTile > 0 && currentTile < 3) {
      map.setTile(x, y, currentTile + 1);
	  }

    this.parent();
	  this.kill();
  }


});
});