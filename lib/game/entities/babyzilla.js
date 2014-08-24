ig.module(
  'game.entities.babyzilla'
).requires(
  'impact.entity'
).defines(function() {
EntityBabyzilla = ig.Entity.extend({
  size: {x: 220, y: 220}
  , animSheet: new ig.AnimationSheet('media/babyzilla.png', 220, 220)
  , accelWalk: 900
  , maxVel: {x: 800, y: 800}
  , gravityFactor: 0
  , bodiesNeeded: 5

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
  }
});
});