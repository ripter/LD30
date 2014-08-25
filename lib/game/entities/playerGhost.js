ig.module(
  'game.entities.playerGhost'
).requires(
  'impact.entity'
).defines(function() {
EntityPlayerGhost = ig.Entity.extend({
  size: {x: 116, y: 136}
  , animSheet: new ig.AnimationSheet('media/player.png', 136, 136)
  , gravityFactor: 0

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [8, 9]);

    this.vel.y = -100;
  }
});
});