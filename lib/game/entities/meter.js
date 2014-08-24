ig.module(
  'game.entities.meter'
).requires(
  'impact.entity'
  , 'impact.font'
).defines(function(){
EntityMeter = ig.Entity.extend({
  _wmDrawBox: true
  , _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
  , font: new ig.Font( 'media/meter.font.png' )

  , size: {x: 32, y: 32}
  , gravityFactor: 0

  , draw: function() {
    var text = '' + this.label + this.text;

    this.font.draw(text, this.pos.x, this.pos.y);
    this.parent();
  }
});
});