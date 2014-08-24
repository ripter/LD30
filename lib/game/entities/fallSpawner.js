ig.module(
  'game.entities.fallSpawner'
).requires(
  'impact.entity'
  , 'game.entities.fallHuman'
).defines(function() {
EntityFallSpawner = ig.Entity.extend({
  _wmDrawBox: true
  , _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
  , size: {x: 32, y: 32}
  , gravityFactor: 0
  , timer: new ig.Timer()

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.timer.set(1);
  }

  , update: function() {
    var x = this.pos.x;
	  var y = this.pos.y;
    var width = this.size.x;

		// pick a random x
    x = Math.random() * (width - x) + x;

    if (this.timer.delta() > 0) {
		  ig.game.spawnEntity(EntityFallHuman, x, y);
      this.timer.set(1);
    }

    this.parent();
  }
});
});