import Ember from 'ember';

export default Ember.Controller.extend({
  userActions: Ember.inject.service('actions'),
  userActivity: null,

  reset: function() {
    this.get('userActions').getActions().then(events => {
    this.set('userActivity', events);
  });
  },
});

