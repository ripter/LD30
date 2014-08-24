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

    checkBounds: function() {
      var self = this;
      var bounds = self.getBounds();
      if (this.pos.x < bounds.visibleLeft || this.pos.x > bounds.visibleRight) {
        this.kill();
        console.log('killed');
      }
    }
  });
});