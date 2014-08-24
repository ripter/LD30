ig.module(
  'game.entities.enemySpawner'
).requires(
  'impact.entity',
  'game.entities.bounds',
  'game.entities.helicopter'
).defines(function() {

  EntityEnemySpawner = EntityBounds.extend({
    size: {
      x: 32,
      y: 32
    },
    _wmDrawBox: true,
    timer: new ig.Timer(),
    limit: 5,
    init: function(x, y, settings) {
      this.difficulty = ig.levelCount;
      this.timer.set(this.limit);
      this.parent(x, y, settings);
    },

    update: function() {
      this.parent();
      if (this.timer.delta() > 0) {
        this.timer.set(this.getRandomInt(3, 8));
        this.spawnHelicopter();
      }
    },

    getRandomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    spawnHelicopter: function() {

      var randomHeight = this.getRandomInt(85, 130);
      var bounds = this.getBounds();
      var helicopter = {
        type: EntityHelicopter,
        x: bounds.visibleRight,
        y: randomHeight
      };

      var settings = [{accel: { x:1000 }, direction: bounds.visibleLeft, flip: true}, {accel:{x:-1000}, direction: bounds.visibleRight, flip: false}];
      var picker = settings[this.getRandomInt(0,1)];

      ig.game.spawnEntity(helicopter.type, picker.direction, randomHeight, picker);
    },
    spawnTank: function() {},
    spawnSoliders: function() {}
  });
});
