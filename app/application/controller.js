import Ember from 'ember';

export default Ember.Controller.extend({

    /**
      @property title
      @type {String}
      @default null
     */
    title: null,
    actions: {

        /**
          @method signOut
          @return {void}
         */
        signOut: function() {
            window.localStorage.removeItem('zyClientUser');
            window.localStorage.removeItem('zyClientSession');
            this.transitionToRoute('welcome');
        },
    },
});
