ig.module(
  'game.entities.tank'
).requires(
  'game.entities.mob'
  , 'game.entities.explosion'
).defines(function() {
EntityTank = EntityMob.extend({
  size: {x: 128, y: 64}
  , maxVel: {x: 20, y: 20}
  , animSheet: new ig.AnimationSheet('media/tank-damage.png', 128, 64)
  , speed: 10
  , points: 500
  , damage: 5
  , fireRate: 5
  , health: 10

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);
  }

  , isLoaded: function() {
    return ig.game.rollDice('1d4', [1, 2]);
  }
});
});
