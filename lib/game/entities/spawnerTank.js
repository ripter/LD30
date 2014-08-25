ig.module(
  'game.entities.spawnerTank'
).requires(
  'game.entities.spawnerMob'
).defines(function() {

EntitySpawnerTank = EntitySpawnerMob.extend({
  spawnType: 'EntityTank'


});
});