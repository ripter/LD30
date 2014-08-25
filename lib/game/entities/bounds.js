ig.module(
  'game.entities.bounds'
)
.requires(
  'impact.entity'
  , 'game.entities.score',
  'game.entities.explosion'
)
.defines(function() {
EntityBounds = ig.Entity.extend({
  // if true, entity will die at the edge of the screen
  shouldCheckBounds: true
  , showPoints: true

  , getBounds: function () {
    var bounds = {
      visibleLeft: ig.game.camera.pos.x - 100
      , visibleRight: ig.game.camera.pos.x + 1124
    };

    return bounds;
  }

  , checkBounds: function() {
    var width = this.size.x;
    var leftX = this.pos.x + width;
    var rightX = this.pos.x;
    var bounds = this.getBounds();
    var shouldKill = false;


    // on the left side, we need to offset by size
    if (leftX < bounds.visibleLeft || rightX > bounds.visibleRight) {
      this.kill();
    }
  }

  , update: function() {
    // do they want bounds checking?
    if (this.shouldCheckBounds) {
      this.checkBounds();
    }

    this.parent();
  }

  , kill: function() {
    var x = this.pos.x;
    var y = this.pos.y;

    // did we die because of damage?
    if (this.health < 1) {
      ig.game.spawnEntity(EntityScore, x, y, {
        points: this.points
      });
      ig.game.spawnEntity(EntityExplosion, x, y, {});
    }
    this.parent();
  }
});
});