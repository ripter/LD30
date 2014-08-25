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
  , delay: 5
  , levelScale: 1

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

		this.timer = new ig.Timer();
    this.timer.set(1);
  }
  , update: function() {
    var delta = this.timer.delta();
    var maxLen = ig.levelCount * this.levelScale;
    var entities, shouldSpawn;

    if (delta > 0) {
      entities = ig.game.getEntitiesByType('EntityTank');
      shouldSpawn = entities.length < maxLen;

			if (shouldSpawn) {
		    this.spawn();
			}

			this.timer.set(0| Math.random() * this.delay);
    }

    this.parent();
  }

  , spawn: function() {
    var x = this.pos.x;
    var y = this.pos.y;

    ig.game.spawnEntity('EntityTank', x, y);
  }

});
});