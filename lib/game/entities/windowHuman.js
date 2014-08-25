ig.module(
  'game.entities.windowHuman'
).requires(
  'impact.entity'
  , 'game.entities.score'
).defines(function() {
EntityWindowHuman = ig.Entity.extend({
  size: {x: 64, y: 64}
  , animSheet: new ig.AnimationSheet('media/windowHuman.png', 64, 64)
  , gravityFactor: 0
  , zIndex: 1
  , type: ig.Entity.TYPE.B
  , health: 1
  , points: 100

  , init: function(x, y, settings) {
    var shouldFlip = 0| Math.random() * 2;

    this.parent(x, y, settings);
    this.addAnim('idle', 1, [0, 1]);

    if (shouldFlip === 1) {
      this.currentAnim.flip.x = true;
    }
  }

  , kill: function() {
    var x = this.pos.x;
    var y = this.pos.y;

    if (this.health > 0) {
			this.parent();
			return;
	  }

    ig.game.spawnEntity(EntityScore, x, y, {
      points: this.points
    });
    this.parent();
  }
});
});