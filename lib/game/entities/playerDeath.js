ig.module(
  'game.entities.playerDeath'
).requires(
  'impact.entity'
  , 'game.entities.playerGhost'
).defines(function() {
EntityPlayerDeath = ig.Entity.extend({
  size: {x: 116, y: 136}
  , animSheet: new ig.AnimationSheet('media/player.png', 136, 136)
  , collides: ig.Entity.COLLIDES.NEVER

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [6]);
    this.timer = new ig.Timer(5);

    ig.game.spawnEntity('EntityPlayerGhost', this.pos.x, this.pos.y);
  }

  , update: function() {
    var delta = this.timer.delta();

    if (delta > 0) {
      ig.game.gameOver = true;
    }

    this.parent();
  }
});
});