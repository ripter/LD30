ig.module(
    'game.entities.helicopter'
).requires(
    'impact.entity',
    'game.entities.bounds'
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

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
            var accel = this.accelWalk;
            this.accel.x = settings.accel.x;
            this.anims.idle.flip.x = settings.flip;
        },
        update: function() {
          this.checkBounds();
          this.parent();
        }
    });
});
