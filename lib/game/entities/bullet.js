ig.module(
  'game.entities.bullet'
).requires(
  'impact.entity',
  'game.entities.bounds'
).defines(function() {
EntityBullet = ig.Entity.extend({
  size: {x: 6, y: 3}
  , vel: {x: 3, y:3}
  , animSheet: new ig.AnimationSheet('media/bullet.png', 6, 3)
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

    this.checkBounds();

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
});
