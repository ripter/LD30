ig.module(
    'game.entities.tank'
).requires(
    'impact.entity'
).defines(function() {

    EntityTank = ig.Entity.extend({
        size: {
            x: 128,
            y: 64
        },
        animSheet: new ig.AnimationSheet('media/tank.png', 128, 64),
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
            var accel = this.accelWalk;
            this.accel.x = settings.accel.x;
            this.anims.idle.flip.x = settings.flip;
        },
        update: function() {
          this.parent();
        }
    });
});
