ig.module(
  'game.entities.babyMouth'
).requires(
  'impact.entity'
).defines(function() {
EntityBabyMouth = ig.Entity.extend({
  size: {x: 220, y: 220}
  , animSheet: new ig.AnimationSheet('media/babyzilla.png', 220, 220)
  , gravityFactor: 0
  , name: 'babyMouth'
  , zIndex: -10
  , collides: ig.Entity.COLLIDES.PASSIVE

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [1]);
  }

  , handleMovementTrace: function(res) {
    // don't check the collision map
  }
});
});