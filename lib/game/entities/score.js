ig.module(
  'game.entities.score'
).requires(
  'game.entities.meter'
).defines(function() {
EntityScore = EntityMeter.extend({
  font: new ig.Font('media/godzilla.font.png')
  , label: '+'
  , points: 1
  , timer: new ig.Timer()
  , velFloat:  100
  , timeFloat: 2

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.timer.set(this.timeFloat);
    this.text = this.points;
    this.vel.y = -this.velFloat;
  }

  , update: function() {

    if (this.timer.delta() > 0) {
      this.kill();
    }

    this.parent();
  }
});
});