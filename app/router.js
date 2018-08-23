import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bands', function() {
      // this.route('band', {path: ':slug'}, function()
    this.route('band', {path: ':id'}, function()  {
      this.route('songs'); //bands.band.songs -> app/routes/bands/band/songs.js
      this.route('albums');  //bands.band.albums -> app/routes/bands/band/albums.js
      this.route('details');
    });
  });
});

export default Router;
