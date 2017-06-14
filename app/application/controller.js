import Ember from 'ember';

export default Ember.Controller.extend({

    title: null,
    actions: {
        signOut: function() {
            window.localStorage.removeItem('zyClientUser');
            window.localStorage.removeItem('zyClientSession');
            this.transitionToRoute('welcome');
        },
    },
});
