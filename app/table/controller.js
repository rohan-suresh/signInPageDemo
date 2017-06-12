import Ember from 'ember';

export default Ember.Controller.extend({
  userActions: Ember.inject.service('actions'),
  user_id: Ember.inject.service('session'),
  userActivity: null,
  userTrack: null,
  zybook_code: Ember.computed.alias('model.zybook_code'),

  displayGet: function() {
    this.get('userActions').getActions().then(events => {
      this.set('userActivity', events);
    });
  },

  actions: {

    postData: function() {
      this.get('userActions').trackActions(this.get('zybook_code'), this.get('user_id.user.user_id')).then(success => {
        this.set('userTrack', success);
      })
    }
  }



});

