ig.module(
	'game.entities.levelTimer'
)
.requires(
  'game.entities.meter'
)
.defines(function(){
EntityLevelTimer = EntityMeter.extend({
  timer: new ig.Timer()
  , label: 'Time: '

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

		this.timer.set(this.limit);
    this.isRunning = true;
  }

  , update: function() {
    var delta = this.timer.delta();

    // don't do anything when idle
    if (!this.isRunning) {
			this.parent();
      return;
		}

    // set the display text
    this.text = 0 | -delta;

    if (delta > 0) {
      this.isRunning = false;
      // Time up! DIE
			ig.player.kill();
		}

    this.parent();
  }
});
});