ig.module(
  'game.entities.soldier'
).requires(
  'impact.entity'
  , 'game.entities.mob'
).defines(function() {
EntitySoldier = EntityMob.extend({
  size: {x: 64, y: 64}
  , animSheet: new ig.AnimationSheet('media/soldier_run.png', 64, 64)
  , checkAgainst: ig.Entity.TYPE.A
  , speed: 40
  , maxVel: {x: 100, y: 100}
  , points: 1
  , damage: 1
  , fireRate: 1
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