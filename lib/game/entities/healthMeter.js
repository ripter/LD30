ig.module(
	'game.entities.healthMeter'
)
.requires(
	'impact.entity'
  , 'impact.font'
)
.defines(function(){
EntityHealthMeter = ig.Entity.extend({
	_wmDrawBox: true
	, _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
  , font: new ig.Font( 'media/level_counter.font.png' )

	, size: {x: 32, y: 32}
  , gravityFactor: 0

  , init: function(x, y, settings) {
    this.parent(x, y, settings);
  }

  , update: function() {
    this.parent();
  }

  , draw: function() {
    var text = ig.player.health;

    text = 'Health: ' + text;
    this.font.draw(text, this.pos.x, this.pos.y);

    this.parent();
  }
});
});