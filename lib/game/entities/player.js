ig.module(
  'game.entities.player'
).requires(
  'impact.entity'
).defines(function() {

EntityPlayer = ig.Entity.extend({
  size: {x: 64, y: 64}
  , animSheet: new ig.AnimationSheet('media/player.png', 64, 64)

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [1]);
  }

  , update: function() {

    this.parent();
  }


});
});