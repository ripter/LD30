ig.module(
  'game.entities.windowSpawner'
).requires(
  'impact.entity'
  , 'game.entities.windowHuman'
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
    var map = ig.game.getMapByName('building');
    var data = map.data;
    var size = map.tilesize;

    // Add people into windows
    data.forEach(function(row, y) {
      row.forEach(function(tileId, x) {
        // 26 is open window
        if (tileId === 26) {
          ig.game.spawnEntity(EntityWindowHuman, x * size, y * size);
        }
      });
    });

    ig.game.sortEntitiesDeferred();
  }
});
});