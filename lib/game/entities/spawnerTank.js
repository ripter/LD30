ig.module(
  'game.entities.spawnerTank'
).requires(
  'impact.entity'
).defines(function() {

EntitySpawnerTank = ig.Entity.extend({
  _wmDrawBox: true
  , _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
  , collides: ig.Entity.COLLIDES.NEVER
  , size: {x: 32, y: 32}
  , timer: new ig.Timer()

  , init: function(x, y, settings) {
    this.parent(x, y, settings);
    this.timer.set(1);

  }
  , update: function() {
    var delta = this.timer.delta();
    var maxLen = ig.levelCount * 1;
    var entities, shouldSpawn;

    if (delta > 0) {
      entities = ig.game.getEntitiesByType('EntityTank');
      shouldSpawn = entities.length < maxLen;

			if (shouldSpawn) {
		    this.spawn();
			}

    }

    this.parent();
  }

  , spawn: function() {
    var x = 0;
    var y = this.pos.y;

    console.log('spawning tank');
    ig.game.spawnEntity('EntityTank', x, y);
  }

});
});