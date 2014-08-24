ig.module(
	'game.entities.levelTimer'
)
.requires(
	'impact.entity'
  , 'impact.font'
)
.defines(function(){
EntityLevelTimer = ig.Entity.extend({
	_wmDrawBox: true
	, _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
  , font: new ig.Font( 'media/level_counter.font.png' )

	, size: {x: 32, y: 32}
  , gravityFactor: 0
  , timer: new ig.Timer()

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

		this.timer.set(this.limit);
  }

  , update: function() {
    // Do something when the timer ends
    this.parent();
  }

  , draw: function() {
    var text = 0 | -this.timer.delta();

    this.font.draw(text, this.pos.x, this.pos.y);

    this.parent();
  }
});
});