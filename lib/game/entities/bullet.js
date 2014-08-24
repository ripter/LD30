ig.module(
  'game.entities.bullet'
).requires(
  'impact.entity'
  , 'impact.entity-pool'
).defines(function() {
EntityBullet = ig.Entity.extend({
  size: {x: 12, y: 6}
  , vel: {x: 3, y:3}
  , animSheet: new ig.AnimationSheet('media/bulletBigger.png', 12, 6)
  , gravityFactor: 0
  , type: ig.Entity.TYPE.B
  , checkAgainst: ig.Entity.TYPE.A
  , damage: 1

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);

    this.angle = this.angleTo(ig.player);
    this.currentAnim.angle = this.angle;
  }

  , update: function() {
    this.pos.x += Math.cos(this.angle) * this.vel.x;
    this.pos.y += Math.sin(this.angle) * this.vel.y;

    this.parent();
  }

  , handleMovementTrace: function(res) {
    // don't check the collision map
  }

  , check: function(other) {
    other.receiveDamage(this.damage);
    this.kill();
  }
});

ig.EntityPool.enableFor(EntityBullet);
});