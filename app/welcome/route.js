import Ember from 'ember';
import routeTitle from '../mixins/route-title';

export default Ember.Route.extend(routeTitle, {

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
        if (window.localStorage.getItem('zyClientSession') && window.localStorage.getItem('zyClientUser')) {
            this.set('authentication.session', JSON.parse(window.localStorage.getItem('zyClientSession')));
            this.set('authentication.user', JSON.parse(window.localStorage.getItem('zyClientUser')));
            this.replaceWith('library');
        }
    },
});
