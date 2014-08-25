ig.module(
  'game.entities.windowMoss'
).requires(
  'game.entities.windowHuman'
).defines(function() {
EntityWindowMoss = EntityWindowHuman.extend({
  animSheet: new ig.AnimationSheet('media/windowMoss.png', 64, 64)
  , heal: 20
  , points: 300
});
});