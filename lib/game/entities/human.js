ig.module(
  'game.entities.human'
).requires(
  'impact.entity'
).defines(function() {

EntityHuman = ig.Entity.extend({
  size: {x: 10, y: 16}
  , animSheet: new ig.AnimationSheet('media/player.png', 15, 20)
  , accelWalk: 800
  , type: ig.Entity.TYPE.B
  , checkAgainst: ig.Entity.TYPE.A

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [1]),
	this.addAnim('walk', 2, [1]);
  }

  , update: function() {
    var accel = this.accelWalk;

    if (ig.input.state('left')) {
			this.accel.x = -accel;
    }
    else if (ig.input.state('right')) {
		  this.accel.x = accel;
	  }
    else {
			this.accel.x = 0;
		}

    this.parent();
  }

  , check: function(other) {
    other.addInventory('HUE-MAN');
    this.kill();
  }
});
});
