ig.module(
	'game.entities.bodyMeter'
)
.requires(
  'game.entities.meter'
)
.defines(function(){
EntityBodyMeter = EntityMeter.extend({
  label: 'Need: '

  , update: function() {
    this.text = ig.player.bodiesNeeded;

    this.parent();
  }
});
});