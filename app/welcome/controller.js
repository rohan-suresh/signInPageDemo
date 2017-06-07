import Ember from 'ember';

export default Ember.Controller.extend({

    /**
      @property store_email
      @type {String}
      @default null
     */
    store_email: null,

    /**
       @property store_password
       @type {String}
       @default null
     */
    store_password: null,

    /**
     @property session
     @type {Object}
     @default null
     */
    session: Ember.inject.service(),

    /**
       @property errorMessage
       @type {String}
       @default null
     */
    errorMessage: null,

    /**
      @observer loginChange
      @observes {store_email, store_password}
      @return {void}
     */
    loginChange: function() {
        this.set('errorMessage', null);
    }.observes('store_email', 'store_password'),

    /**
       @property title
       @type {String}
       @default null
     */
    title: null,

    /**
     @method login
     @paramType {String}
     @param {String} rName reset
     @return {void}
     */
    reset(rName) {
        this.set('title', rName);
    },

    actions: {

        /**
         @method login
         @return {void}
         */
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
