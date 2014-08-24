ig.module(
	'game.entities.levelTimer'
)
.requires(
  'game.entities.meter'
)
.defines(function(){
EntityLevelTimer = EntityMeter.extend({
  timer: new ig.Timer()

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

		this.timer.set(this.limit);
  }

  , update: function() {
    this.text = 0 | -this.timer.delta();
    this.parent();
  }
});
});