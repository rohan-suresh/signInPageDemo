import Ember from 'ember';

export default Ember.Controller.extend({

    /*
    @property store_email
    @type {String}
    @default null
     */

    store_email: null,

    /*
     @property store_password
     @type {String}
     @default null
     */

    store_password: null,

    session: Ember.inject.service(),

    /*
     @property errorMessage
     @type {String}
     @default null
     */

    errorMessage: null,

    /*
    @observer loginChange
    @param {}
    @observes {store_email, store_password}
     */

    loginChange: function() {
        this.set('errorMessage', null);
    }.observes('store_email', 'store_password'),

    /*
     @method login
     @param {}
     @return {}
     */

    title: null,
    reset(rName) {
        this.set('title', rName);
    },

    actions: {
        login: function() {
            this.get('session').login(this.get('store_email'), this.get('store_password')).then(success => {
                if (success) {
                    this.transitionToRoute('library');
                }
            },
        () => {
            this.set('errorMessage', 'Incorrect email/password');
        });
        },
    },
});
