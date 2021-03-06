import Route from '@ember/routing/route';


export default Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },
  resetController: function(controller) {
    controller.set('songCreationStarted', false);
  },
  actions: {
    createSong: function() {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        rating: parseInt(controller.get('rating')),
        band: band
      });
      song.save().then(function() {
        controller.set('title', '');
        controller.set('rating', ''); 
      });
    },
    didTransition: function() {
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    }
  }
});
