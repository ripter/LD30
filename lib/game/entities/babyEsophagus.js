ig.module(
  'game.entities.babyEsophagus'
).requires(
  'impact.entity'
).defines(function() {
EntityBabyEsophagus = ig.Entity.extend({
  _wmDrawBox: true
  , _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
  , size: {x: 32, y: 100}
});
});