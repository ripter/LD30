ig.module(
  'game.entities.bam'
).requires(
  'impact.entity'
  , 'game.entities.score'
  , 'game.entities.windowHuman'
).defines(function() {
EntityBam = ig.Entity.extend({
  size: {x: 18, y:18}
  , animSheet: new ig.AnimationSheet('media/bam.png', 18, 18)
  , gravityFactor: 0
  , checkAgainst: ig.Entity.TYPE.B
  , processed: false
  , damage: 1
  , points: 10

  , init: function(x, y, settings) {
    // round pos to the tile
    x = (0| x/64) * 64;
    y = (0| y/64) * 64;
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);
  }

  , update: function() {
    // We need to skip our first update
    // so check() has a chance to run
    if (!this.processed) {
      this.parent();
      this.processed = true;
      return;
    }

    this.smashTile();
    this.kill();
    this.parent();
  }

  , check: function(other) {
    other.receiveDamage(this.damage);
  }

  , smashTile: function() {
    var map = ig.game.buildingMap;
    var collisionMap = ig.game.collisionMap;
    var x = this.pos.x;
    var y = this.pos.y;
    var currentTile = map.getTile(x, y);
    var currentCollision = collisionMap.getTile(x, y);
    var tile = currentTile;

    // Don't change air or end tiles
    if (currentTile === 0 || this.isEndTile(currentTile)) {
      return;
    }

    // Damnage the wall!
    currentTile += 1;

    // People can come out of broken windows
    if (this.isBrokenWindow(currentTile)) {
      if (ig.game.rollDice('2d6', [2, 7, 12])) {
        ig.game.spawnEntity(EntityWindowHuman, x, y);
      }
    }

    // did we turn it into an endTile?
    if (this.isEndTile(currentTile)) {
      // Add a standable platform
      collisionMap.setTile(x, y+64, 12);
      // Points for mass distruction!
      ig.game.spawnEntity(EntityScore, x, y, {
        points: this.points
      });
    }

    map.setTile(x, y, currentTile);
  }

  , isEndTile: function(tileId) {
    return (tileId % 5) === 0;
  }

  , isBrokenWindow: function(tileId) {
    var brokenWindowIds = [13, 14];

    return _.contains(brokenWindowIds, tileId);
  }

  , shouldSpawnWindowHuman: function() {
    var dice = [2, 7, 12];
    var roll = ig.game.rollDice('2d6', [2, 7, 12]);
    var win = _.contains(dice, roll);

    return win;
  }
});
});