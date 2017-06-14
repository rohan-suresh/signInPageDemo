import Ember from 'ember';

export default Ember.Controller.extend({
    userActions: Ember.inject.service('actions'),
    user_id: Ember.inject.service('session'),
    userActivity: null,
    userTrack: null,
    zybook_code: Ember.computed.alias('model.zybook_code'),

    lastFive: function() {
        if (this.get('userActivity')) {
            const userActLen = this.get('userActivity').length;

            const maxLen = 5;

            if (userActLen > maxLen) {
                const toRemove = userActLen - maxLen;

                return this.get('userActivity').slice(toRemove, userActLen);
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

        recordEvent: function(sectionNum, chapterNum) {
            const uAct = this.get('userActions');

            const zCode = this.get('zybook_code');

            uAct.trackActions(zCode, this.get('user_id.user.user_id'), sectionNum, chapterNum).then(events => {
                this.set('userActivity', events);
            });
        },
    },

});

