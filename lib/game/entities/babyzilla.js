ig.module(
  'game.entities.babyzilla'
).requires(
  'impact.entity'
).defines(function() {
EntityBabyzilla = ig.Entity.extend({
  size: {x:220, y:200}
  , animSheet: new ig.AnimationSheet('media/babyzilla.png', 220, 220)
  , accelWalk: 900
  , maxVel: {x: 800, y: 800}
  , gravityFactor: 0
  , bodiesNeeded: 5
  , zIndex: 9000
  , collides: ig.Entity.COLLIDES.PASSIVE

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);

    ig.player = this;
  }

  , update: function() {
    var accel = this.accelWalk;

    if (ig.input.state('left')) {
      this.flip = false;
      this.accel.x = -accel;
    }
    else if (ig.input.state('right')) {
      this.flip = true;
      this.accel.x = accel;
    }

    this.parent();

    this.mouth.pos.x = this.pos.x;
    this.mouth.pos.y = this.pos.y;
  }

  , kill: function() {
    this.mouth.kill();
		this.parent();
  }

  // Need to hook up our mouth!
  , ready: function() {
    this.mouth = ig.game.getEntityByName('babyMouth');
  }
});
});