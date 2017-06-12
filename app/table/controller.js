import Ember from 'ember';

export default Ember.Controller.extend({
  userActions: Ember.inject.service('actions'),
  user_id: Ember.inject.service('session'),
  userActivity: null,
  userTrack: null,
  zybook_code: Ember.computed.alias('model.zybook_code'),

  lastFive: function() {
    if (this.get('userActivity')!=null) {
      const userActLen = this.get('userActivity').length;
      if (userActLen > 5) {
        const toRemove = userActLen - 5;
        return this.get('userActivity').slice(toRemove, );
      }
      return this.get('userActivity');
    }
    return [];
  }.property('userActivity'),

  displayGet: function() {
    this.get('userActions').getActions(this.get('zybook_code'), this.get('user_id.user.user_id')).then(events => {
      this.set('userActivity', events);
    });
  },

  actions: {

    postData: function(sectionNum, chapterNum) {
      this.get('userActions').trackActions(this.get('zybook_code'), this.get('user_id.user.user_id'), sectionNum, chapterNum).then(events => {
        this.set('userActivity', events);
      })
    }
  }



});

