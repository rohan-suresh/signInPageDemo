import Ember from 'ember';
import routeTitle from '../mixins/route-title';

export default Ember.Route.extend(routeTitle, {
    authentication: Ember.inject.service('session'),
    beforeModel() {
        if (window.localStorage.getItem('zyClientSession') && window.localStorage.getItem('zyClientUser')) {
            this.set('authentication.session', JSON.parse(window.localStorage.getItem('zyClientSession')));
            this.set('authentication.user', JSON.parse(window.localStorage.getItem('zyClientUser')));
            this.replaceWith('library');
        }
        else {
            this.replaceWith('welcome');
        }
    },
});
