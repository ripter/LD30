ig.module(
  'game.entities.soldier'
).requires(
  'impact.entity',
  'game.entities.bounds'
).defines(function() {

  EntitySoldier = EntityBounds.extend({
    size: {
      x: 128,
      y: 64
    },
    animSheet: new ig.AnimationSheet('media/man_run.png', 64, 64),
    accelWalk: 800,
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    shouldCheckBounds: true,
    timer: new ig.Timer(),
    init: function(x, y, settings) {
      this.parent(x, y, settings);

      this.addAnim('idle', .2, [0, 1, 0]);
      this.addAnim('walkleft', 0.07, [0, 1, 0]);
      this.addAnim('walkright', 0.7, [0, 1, 0]);
      this.addAnim('dead', 1, [1]);
      this.humanMove = Math.floor(Math.random() * 20) + 1;
      this.timer.set(4);
      this.movin = 0;
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
        this.timer.set(this.getRandomInt(2,5));
      }

      if (soldier > player) {
        var totDist = soldier - player;

        this.currentAnim = this.anims.walkleft;
        this.accel.x = -accel;

        if (totDist < 300) {

          this.currentAnim = this.anims.idle;
          this.accel.x = 0;
          return;
        }
      } else if (soldier < player) {
        this.currentAnim = this.anims.walkright;
        this.accel.x = accel;

      } else if (dist < 300) {
        this.currentAnim = this.anims.idle;
        this.accel.x = 0;

        if (dist < 300) {
          this.currentAnim = this.anims.idle;
          this.accel.x = 0;

        }
      }
      this.parent();
    },
    check: function(other) {
      this.kill();
    }
  });
});
