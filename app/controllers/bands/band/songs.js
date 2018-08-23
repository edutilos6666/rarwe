import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {isEmpty} from '@ember/utils';

export default Controller.extend({
  songCreationStarted: false,
  canCreateSong: computed('songCreationStarted', 'model.songs.[]', function(){
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),
  title:'',
  rating: '',
  isAddButtonDisabled: computed('title', 'rating', function() {
    try {
      var ratingNumber = parseInt(this.get('rating'), 10);
      if(ratingNumber >= 0 && ratingNumber <= 5 && !isEmpty(this.get('title'))) {
        return false;
      }
    } catch(ex) {
      return true;
    }
    return true;
  }),
  actions: {
    updateRating: function(params) {
      var song = params.item ,
      rating = params.rating;
      if(song.get('rating') === rating) {
        rating = 0; 
      }
      song.set('rating', rating);
      return song.save();
    },
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    }
  }
});
