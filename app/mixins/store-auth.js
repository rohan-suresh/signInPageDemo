import Ember from 'ember';
export default Ember.Mixin.create({

    /**
      @property authentication
      @type {Object}
      @default null
     */
    authentication: Ember.inject.service('session'),

    /**
      @method beforeModel
      @return {void}
     */
    beforeModel: function() {
        if (!this.get('authentication.session.auth_token')) {
            if (window.localStorage.getItem('zyClientSession') && window.localStorage.getItem('zyClientUser')) {
                this.set('authentication.session', JSON.parse(window.localStorage.getItem('zyClientSession')));
                this.set('authentication.user', JSON.parse(window.localStorage.getItem('zyClientUser')));
            }
            else {
                this.replaceWith('welcome');
            }
        }
    },
});
