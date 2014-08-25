ig.module(
  'game.entities.windowHuman'
).requires(
  'impact.entity'
).defines(function() {
EntityWindowHuman = ig.Entity.extend({
  size: {x: 64, y: 64}
  , animSheet: new ig.AnimationSheet('media/windowHuman.png')

  , init: function(x, y, settings) {
    var shouldFlip = 0| Math.random() * 2;

    this.parent(x, y, settings);
    this.addAnim('idle', 1, [0, 1]);

    if (shouldFlip === 1) {
      this.currentAnim.flip.x = true;
    }
  }
});
});