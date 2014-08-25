ig.module(
  'game.entities.helicopter'
).requires(
  'game.entities.mob'
).defines(function() {
EntityHelicopter = EntityMob.extend({
  size: {x: 64, y: 16}
  , animSheet: new ig.AnimationSheet('media/helicopter.png', 64, 16)
  , checkAgainst: ig.Entity.TYPE.A
  , gravityFactor: 0
  , speed: 30
  , maxVel: {x: 130, y: 0}
  , points: 1000
  , damage: 1
  , fireRate: 1
  , health: 1

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);
  }

  , isLoaded: function() {
    return ig.game.rollDice('1d3', [1]);
  }

  , check: function(other) {
    this.receiveDamage(1);
  }
});
});