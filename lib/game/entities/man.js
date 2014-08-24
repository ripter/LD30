ig.module(
  'game.entities.man'
).requires(
  'impact.entity',
  'game.entities.bounds',
  'impact.entity-pool'
).defines(function() {

  EntityMan = EntityBounds.extend({
    size: {
      x: 128,
      y: 64
    },
    animSheet: new ig.AnimationSheet('media/man_run.png', 64, 64),
    accelWalk: 800,
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    shouldCheckBounds: true,
    flip: false,

    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.accel.x = 800;
      this.addAnim('walkright', 1, [0, 1, 0]);
      this.humanMove = Math.floor(Math.random() * 20) + 1;
      this.timer =  new ig.Timer(4);
    },
    getRandomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    update: function() {
      var width = 1024;
      var myMarginLeft = (width/2) - this.pos.x;
      var playerMarginLeft = (width/2) - ig.player.pos.x;

      if (myMarginLeft > playerMarginLeft) {
        this.currentAnim.flip.x = true;
        if (myMarginLeft < (width/2)) {
          this.currentAnim.flip.x = true;
        }
      } else {
        this.currentAnim.flip.x = false;
      }
      this.parent();
    },
    check: function(other) {
      this.kill();
    },
    points: 100
  });
ig.EntityPool.enableFor(EntityMan);
});
