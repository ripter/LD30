ig.module(
  'game.entities.fallHuman'
).requires(
  'impact.entity'
  , 'impact.entity-pool'
).defines(function() {
EntityFallHuman = ig.Entity.extend({
  size: {x: 43, y:72}
  , type: ig.Entity.TYPE.B
  , animSheet: new ig.AnimationSheet('media/fallingGuy.png', 43, 72)
  , zIndex: 2
  , collides: ig.Entity.COLLIDES.LITE

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);
  }
});

ig.EntityPool.enableFor(EntityFallHuman);
});