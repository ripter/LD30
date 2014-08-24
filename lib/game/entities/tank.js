ig.module(
  'game.entities.tank'
).requires(
  'impact.entity',
  'game.entities.bounds'
).defines(function() {

EntityTank = EntityBounds.extend({
  size: {x: 128, y: 64},
  accelWalk: 100,
  animSheet: new ig.AnimationSheet('media/tank.png', 128, 64),
  type: ig.Entity.TYPE.B,
  checkAgainst: ig.Entity.TYPE.A,
  shouldCheckBounds: true,
  timer: new ig.Timer(),
  points: 100,
  init: function(x, y, settings) {
    this.parent(x, y, settings);
    this.addAnim('idle', 1, [0]);
    this.addAnim('walkleft', 1, [0]);
    this.addAnim('walkright', 1, [0]);
    var accel = this.accelWalk;
    this.accel.x = settings.accel.x;
    this.anims.idle.flip.x = settings.flip;
    this.timer.set(4);
  },

  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  update: function() {
    var accel = this.accelWalk,
      player = ig.player.pos.x,
      dist = this.distanceTo(ig.player),
      soldier = this.pos.x;

    if (this.timer.delta() > 0) {
      ig.game.spawnEntity(EntityBullet, (this.pos.x - 6), (this.pos.y - 6));
      this.timer.set(this.getRandomInt(2,4));
    }

    if (soldier > player) {
      var totDist = soldier - player;

      this.currentAnim = this.anims.walkright;
      this.accel.x = -accel;

      if (totDist < 150) {

        this.currentAnim = this.anims.idle;
        this.accel.x = 0;
        return;
      }
    } else if (soldier < player) {
      this.currentAnim = this.anims.walkleft;
      this.accel.x = accel;

      if (dist < 150) {
        this.currentAnim = this.anims.idle;
        this.accel.x = 0;
      }
    }

    this.parent();
  },

  check: function(other) {
    //this.kill();
  }
});

});
