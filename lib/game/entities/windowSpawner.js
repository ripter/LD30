ig.module(
  'game.entities.windowSpawner'
).requires(
  'impact.entity'
).defines(function() {
EntityWindowSpawner = ig.Entity.extend({
  _wmDrawBox: true
  , _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
  , size: {x: 32, y: 32}
  , gravityFactor: 0
  , collides: ig.Entity.COLLIDES.NEVER

  , init: function(x, y, settings) {
    this.parent(x, y, settings);
  }

  , ready: function() {
    var data = ig.game.buildingMap;

    // Add people into windows
    // data.forEach(function() {
		//   console.log('row', arguments);
    // });
  }
});
});