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
  , timeFloat: 1

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.timer.set(this.timeFloat);
    this.text = this.points;
    ig.score += this.points;

    // Use the camera to figure out the real x pos
    this.originX = this.pos.x
    this.adjustForCamera();
    this.vel.y = -this.velFloat;

  }

  , update: function() {
    // don't move as the camera moves
    this.adjustForCamera();

    if (this.timer.delta() > 0) {
      this.kill();
    }

    this.parent();
  }

  , adjustForCamera: function() {
    this.pos.x = 0| this.originX - ig.game.camera.pos.x;
  }
});
});