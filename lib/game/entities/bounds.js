ig.module(
	'game.entities.bounds'
)
.requires(
	'impact.entity'
)
.defines(function() {
EntityBounds = ig.Entity.extend({

    getBounds: function () {
      var bounds = {
        visibleLeft: ig.game.camera.pos.x - 100,
        visibleRight: ig.game.camera.pos.x + 1124
      };

      return bounds;
    },

    update: function() {
      var accel = this.accelWalk;
      this.accel.x = -accel;
      this.parent();
      console.log(ig.game.camera.pos);
    },

    checkBounds: function() {
      console.log('check bounds called');
      var bounds = this.getBounds();

      if (this.pos.x < bounds.visibleLeft || this.pos.x > bounds.visibleRight) {
        that.kill();
      }
    }
  });
});