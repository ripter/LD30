ig.module(
  'game.entities.score'
).requires(
  'game.entities.meter'
).defines(function() {
EntityScore = EntityMeter.extend({
  font: new ig.Font('media/godzilla.font.png')
  , label: '+'
  , text: '9,000'
});
});