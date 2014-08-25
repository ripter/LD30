ig.module(
  'game.entities.spawnerMob'
).requires(
  'impact.entity'
).defines(function() {
EntitySpawnerMob = ig.Entity.extend({
  _wmDrawBox: true
  , _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
  , collides: ig.Entity.COLLIDES.NEVER
  , size: {x: 32, y: 32}
  , delayMin: 2
  , delayMax: 7
  , delayStart: 1
  , levelScale: 1

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

		this.timer = new ig.Timer(this.delayStart);
  }
  , update: function() {
    var delta = this.timer.delta();
    var maxLen = ig.levelCount * this.levelScale;
    var spawnType = this.spawnType;
    var entities, shouldSpawn, delay;

    if (delta > 0) {
      entities = ig.game.getEntitiesByType(spawnType);
      shouldSpawn = entities.length < maxLen;

			if (shouldSpawn) {
		    this.spawn();
			}

      delay = ig.game.randomNumber(this.delayMin, this.delayMax);
			this.timer.set(delay);
    }

    this.parent();
  }

  , spawn: function() {
    var x = 0;
    var y = this.pos.y;
    //var shouldFlip = ig.game.rollDice('1d2') === 2;
    var shouldFlip = true;
    var spawnType = this.spawnType;

    if (shouldFlip) {
			x = ig.game.collisionMap.pxWidth - this.size.x;
    }

    ig.game.spawnEntity(spawnType, x, y);
  }
});
});