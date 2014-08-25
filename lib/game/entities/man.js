ig.module(
  'game.entities.man'
).requires(
  'impact.entity'
  , 'game.entities.mob'
).defines(function() {
EntityMan = EntityMob.extend({
  size: {x: 64, y: 64}
  , animSheet: new ig.AnimationSheet('media/man_run.png', 64, 64)
  , checkAgainst: ig.Entity.TYPE.A
  , speed: 600
  , points: 1
  , damage: 1
  , fireRate: 0
  , health: 1

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', .25, [0, 1, 0]);
  }

  , isLoaded: function() {
    return ig.game.rollDice('1d2') === 1;
  }

  // we can run over soldiers
  , check: function(other) {
    this.receiveDamage(1);
  }
});
});