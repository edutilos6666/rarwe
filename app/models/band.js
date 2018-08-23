// import {computed} from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),
  description: DS.attr(),  //default 'string'
  songs: DS.hasMany('song'),
  // slug: computed('name', function() {
  //   return this.get('name').dasherize();
  // })
});
