ig.module(
  'game.entities.babyPain'
).requires(
  'impact.entity'
).defines(function() {
EntityBabyPain = ig.Entity.extend({
  _wmDrawBox: true
  , _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
  , size: {x: 32, y: 32}
  , gravityFactor: 0
  , checkAgainst: ig.Entity.TYPE.B


  , check: function(other) {
    ig.player.receiveDamage(1);
    other.kill();
  }
});
});