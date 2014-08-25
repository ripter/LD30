ig.module(
  'game.entities.helicopter'
).requires(
  'game.entities.mob'
).defines(function() {
EntityHelicopter = EntityMob.extend({
  size: {x: 156, y: 64}
  , offset: {x:100, y:0}
  , animSheet: new ig.AnimationSheet('media/copChopper.png', 256, 64)
  , gravityFactor: 0
  , speed: 30
  , maxVel: {x: 130, y: 0}
  , points: 1000
  , damage: 2
  , fireRate: 5
  , health: 10

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);

		console.log('Helicopter', this.pos.x, this.pos.y);
  }

  , isLoaded: function() {
    return ig.game.rollDice('1d6', [1, 6]);
  }
});
});
/*
  EntityHelicopter = EntityBounds.extend({
    size: {
      x: 64,
      y: 16
    },
    animSheet: new ig.AnimationSheet('media/helicopter.png', 64, 16),
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    gravityFactor: 0,
    shouldCheckBounds: true,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('idle', 1, [0]);
      var accel = this.accelWalk;
      this.timer = new ig.Timer(2);
      this.accel.x = settings.accel.x;
      this.anims.idle.flip.x = settings.flip;
    },

    getRandomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    update: function() {
      if (this.timer.delta() > 0) {
        ig.game.spawnEntity(EntityBullet, (this.pos.x - 6), (this.pos.y - 6));
        this.timer.set(this.getRandomInt(2,3));
      }
      this.parent();
    },
    check: function(other) {
        // this.kill();
    },
    points: 100
  });
ig.EntityPool.enableFor(EntityHelicopter);
});
*/