ig.module(
  'game.entities.helicopter'
).requires(
  'impact.entity',
  'game.entities.bounds',
  'game.entities.bullet'
).defines(function() {

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
    timer: new ig.Timer(),
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('idle', 1, [0]);
      var accel = this.accelWalk;
      this.timer.set(2);
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
    }
  });
});
