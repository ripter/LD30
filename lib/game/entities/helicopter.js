ig.module(
    'game.entities.helicopter'
).requires(
    'impact.entity'
).defines(function() {

    EntityHelicopter = ig.Entity.extend({
        size: {
            x: 64,
            y: 16
        },
        animSheet: new ig.AnimationSheet('media/helicopter.png', 64, 16),
        accelWalk: 1000,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        gravityFactor: 0,


        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
        },

        getBounds: function () {
          var bounds = {
            visibleLeft: ig.game.camera.pos.x - 100,
            visibleRight: ig.game.camera.pos.x + 1124
          };

          return bounds;
        },

        inc: 0,

        destroy: function() {
          var bounds = this.getBounds();
          this.inc++;
          if (this.inc > 2) {
            if (this.pos.x < bounds.visibleLeft || this.pos.x > bounds.visibleRight) {
              console.log(this.pos.x, bounds.visibleLeft, this.pos.x, bounds.visibleRight);
              this.kill();
            }
          }
        },

        update: function() {
            var accel = this.accelWalk;


            this.accel.x = -accel;
            this.destroy();
            this.parent();


        }
    });
});
