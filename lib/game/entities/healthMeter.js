ig.module(
	'game.entities.healthMeter'
)
.requires(
  'game.entities.meter'
)
.defines(function(){
EntityHealthMeter = EntityMeter.extend({
  label: 'Health: '

  , update: function() {
    this.text = ig.player.health;
    this.parent();
  }
});
});