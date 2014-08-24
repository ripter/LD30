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
        name: 'helicopter',
        animSheet: new ig.AnimationSheet('media/helicopter.png', 64, 16),
        accelWalk: 1000,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        gravityFactor: 0
        ,
        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
        },
        update: function() {
            var accel = this.accelWalk;
            this.accel.x = -accel;
            this.parent();

            if (this.pos.x < -64) {
              this.kill();
            }
        }
    });
});