ig.module(
    'game.entities.enemySpawner'
).requires(
    'impact.entity'
).defines(function() {

EntityEnemySpawner = ig.Entity.extend({
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: true,

        init: function (x, y, settings) {
          this.parent(x, y, settings);
        },
        waiting: false,

        spawnHelicopter: function() {

          if (this.waiting) {
            return;
          }

          setTimeout(function () {
            ig.game.spawnEntity(EntityHelicopter, 1036, 120);
          }, 2000);

          this.waiting = true;

        },

        update: function() {
            var helicopter = ig.game.getEntityByName('helicopter');
            if (!helicopter) {
                this.spawnHelicopter();
            }
            this.parent();
        }
    });
});
