ig.module(
  'game.entities.player'
).requires(
  'impact.entity'
).defines(function() {

EntityPlayer = ig.Entity.extend({
  size: {x: 64, y: 64}
  , animSheet: new ig.AnimationSheet('media/player.png', 64, 64)
  , accelWalk: 1200
	, maxVel: {x: 400, y: 800}
	, friction: {x: 800, y: 0}
  , jump: 500
  , type: ig.Entity.TYPE.A
  , inventory: []

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [1, 0, 1]);

    // global ref
    ig.player = this;
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

    if (this.standing && ig.input.state('jump')) {
      this.vel.y = -this.jump;
    }

    this.parent();
  }

  , addInventory: function(item) {
    this.inventory.push(item);
  }

});
});